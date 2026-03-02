import { useEffect, useState } from "react";


// 1) "interface" = el molde de cómo luce un Contacto
interface Contacto {
    id: number;
    nombre: string;
    telefono: string;
}

export default function ContactoApp() {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("ya pasaron 2 segundos")
            setCargando(false);
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const [cargando, setCargando] = useState(true)

    if (cargando) {
        return <p> Cargando...</p>
    }
    


    const ejemplo: Contacto = {
        id: 1,
        nombre: "Ana",
        telefono: "+573137373581"
    }

    return (
        <div>
            <h1>Agenda de Contactos</h1>
            <p> Contacto de ejemplo: </p>
            <p>
                {ejemplo.nombre} - {ejemplo.telefono}
            </p>
        </div>
    )
}