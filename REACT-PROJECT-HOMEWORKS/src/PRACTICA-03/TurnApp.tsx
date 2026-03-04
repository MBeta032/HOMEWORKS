import { useState, useEffect } from "react";
import { TurnCircularList } from "./TurnCircularList";
import TurnCard from "./TurnCard";
import "./turns.css"



function TurnApp() {
    const [list] = useState(new TurnCircularList())
    const [current, setCurrent] = useState(list.current)

    const [number, setNumber] = useState ("")
    const [name, setName] = useState ("")

    useEffect(() => {
        if (current !== null) {
            console.log("Turno actual:", current.number, "-", current.name)
        }
    }, [current])

    useEffect(() => {
        const timer = setInterval(() => {
            list.next()
            setCurrent(list.current)
     }, 10000)
        return () => clearInterval(timer)
    }, [])

    const goNext = () => {
        list.next()
        setCurrent(list.current)
    }

    const goPrev = () => {
        list.previous()
        setCurrent(list.current)
    }

    const handleAdd = () => {
        if (number === "" || name === "") return
        list.append(Number(number), name)

        if (list.current !== null){
            setCurrent(list.current)
        }
        setNumber("")
        setName("")
    }

    return (
    <div className="turn-app">
        <h2 className="turn-title">Practica 03 - Turnos</h2>
        <div className="turn-form">
        <div className="turn-field">
            <label className="turn-label">Número</label>
            <input
            className="turn-input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Numero"/>
        </div>
        <div className="turn-field">
            <label className="turn-label">Nombre</label>
            <input className="turn-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"/>
        </div>
        <button className="turn-btn turn-btn-add" onClick={handleAdd}>
            Agregar turno
        </button>
    </div>
            <TurnCard current={current} onNext={goNext} onPrev={goPrev} />
        </div>
    )
}

export default TurnApp