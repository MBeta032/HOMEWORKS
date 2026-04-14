import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react'
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore'
import { db } from '../Firebase/config'
import { MenuTree } from '../algorithms/MenuTree'
import { defaultMenuItems } from '../data/menu-tree/defaultMenuItems'
import { useAuth } from '../hooks/useAuth'
import { useCollection } from '../hooks/useCollection'
import type { IMenuItem } from '../interfaces/IMenuItem'

type MenuTreeContextType = {
  items: IMenuItem[]
  tree: MenuTree
  dfsValues: IMenuItem[]
  bfsValues: IMenuItem[]
  hierarchyLines: string[]
  loading: boolean
  error: string
  resetMenu: () => Promise<void>
  getItemByLink: (link: string) => IMenuItem | null
}

const MenuTreeContext = createContext<MenuTreeContextType | undefined>(undefined)

function MenuTreeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [seeding, setSeeding] = useState(false)

  const path = user ? `users/${user.uid}/menuItems` : null

  const {
    documents: rawItems,
    loading: firebaseLoading,
    error
  } = useCollection<IMenuItem>(path)

  const items = useMemo(() => {
    return [...rawItems].sort((a, b) => a.order - b.order)
  }, [rawItems])

  useEffect(() => {
    const seedMenu = async () => {
      if (!user) return
      if (firebaseLoading) return
      if (items.length > 0) return
      if (seeding) return

      setSeeding(true)

      try {
        const collectionRef = collection(db, `users/${user.uid}/menuItems`)
        const batch = writeBatch(db)

        defaultMenuItems.forEach(item => {
          const itemRef = doc(collectionRef, item.id)

          batch.set(itemRef, {
            title: item.title,
            link: item.link,
            component: item.component,
            parentId: item.parentId,
            order: item.order
          })
        })

        await batch.commit()
      } finally {
        setSeeding(false)
      }
    }

    seedMenu()
  }, [user, firebaseLoading, items, seeding])

  const tree = useMemo(() => {
    return MenuTree.fromItems(items)
  }, [items])

  const dfsValues = useMemo(() => {
    return tree.dfs()
  }, [tree])

  const bfsValues = useMemo(() => {
    return tree.bfs()
  }, [tree])

  const hierarchyLines = useMemo(() => {
    return tree.printHierarchy()
  }, [tree])

  const getItemByLink = (link: string) => {
    return items.find(item => item.link === link) ?? tree.root?.item ?? null
  }

  const resetMenu = async () => {
    if (!user) return

    const collectionRef = collection(db, `users/${user.uid}/menuItems`)
    const snapshot = await getDocs(collectionRef)
    const batch = writeBatch(db)

    snapshot.docs.forEach(document => {
      batch.delete(document.ref)
    })

    defaultMenuItems.forEach(item => {
      const itemRef = doc(collectionRef, item.id)

      batch.set(itemRef, {
        title: item.title,
        link: item.link,
        component: item.component,
        parentId: item.parentId,
        order: item.order
      })
    })

    await batch.commit()
  }

  const value = useMemo(
    () => ({
      items,
      tree,
      dfsValues,
      bfsValues,
      hierarchyLines,
      loading: firebaseLoading || seeding,
      error,
      resetMenu,
      getItemByLink
    }),
    [items, tree, dfsValues, bfsValues, hierarchyLines, firebaseLoading, seeding, error]
  )

  return (
    <MenuTreeContext.Provider value={value}>
      {children}
    </MenuTreeContext.Provider>
  )
}

function useMenuTree() {
  const context = useContext(MenuTreeContext)

  if (!context) {
    throw new Error('useMenuTree debe usarse dentro de MenuTreeProvider')
  }

  return context
}

export { MenuTreeContext, MenuTreeProvider, useMenuTree }