interface IMenuItem {
  id: string
  title: string
  link: string
  component: string
  parentId: string | null
  order: number
}

export type { IMenuItem }