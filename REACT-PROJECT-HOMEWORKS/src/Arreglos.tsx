import {useState} from 'react'

function Arreglos() { 
    const [arreglo, setArreglo] = useState<number[]>([])

    const addToArray = () => {
        const nuevo = Date.now();
        setArreglo( prev => [...prev, nuevo])
    }
    return(
        <>
        <button onClick = {addToArray} > Agregar </button>
        {
            arreglo.map((item,index) => {
                return <li key={index}>{item}</li>
            })
        }
        <button onClick={() => setArreglo([])}>
            Reset Lista
        </button>
        </>
    )
}

export default Arreglos;