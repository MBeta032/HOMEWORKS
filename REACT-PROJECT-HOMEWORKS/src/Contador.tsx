import {useState} from 'react';
interface Props {
    suma: number;
}

function Contador({suma}:Props) {
    const [contador, setContador]=useState(suma)

    return (
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
            Sumar
        </button>
        <button onClick={() => setContador(contador - 1)}>
            Restar
        </button>
        <button onClick={() => setContador(suma)}>
            Reset
        </button>
        </>
        
    );
}

export default Contador