import { useState, useEffect } from "react";
import { ProductCircularList } from "./ProdcutCircularList";
import ProductCard from "./ProductCard";
import "./market.css"

const productosFake = [
  { id: "p1", name: "Audífonos", price: 120000, image: "/products/audifonos.jpg" },
  { id: "p2", name: "Teclado", price: 180000, image: "/products/teclado.jpg" },
  { id: "p3", name: "Mouse", price: 90000, image: "/products/mouse.jpg" },
]

export default function ProductApp (){

    const[list] = useState( new ProductCircularList())
    const [current, setCurrent] = useState(list.current)

    useEffect(() => {
        for (let i = 0; i < productosFake.length; i = i + 1) {
            const p = productosFake[i]
            list.append(p.id, p.name, p.price, p.image)
        }
        setCurrent(list.current)
        }, [])

    const goNext = () => {
        list.next()
        setCurrent(list.current)
    }

    const goPrev = () => {
        list.previous()
        setCurrent(list.current)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            list.next()
            setCurrent(list.current)
        }, 2000)

        return () => clearInterval(timer)
    })

    return (
        <div className="market-app">
            <div className="market-title">
                <h1> PRACTICA 02 - CARROUSEL </h1>
                <div className="market-chip">Super Market</div>
                </div>
            

            <ProductCard current={current} onPrev={goPrev} onNext={goNext} />
        </div>
    )
}