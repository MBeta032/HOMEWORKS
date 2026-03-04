import { ComiteNode } from "../Nodos/ComiteNode"

interface Props {
    current: ComiteNode | null 
    onNext: () => void
    onPrev: () => void
}

export default function ComiteCard({ current, onNext, onPrev}: Props) {

    if(current === null ) return <div>No hay miembros del Comite registrados</div>

    return (
        <div>
            <div>
                <p>{current.nombre} - {current.role}</p>
            </div>
            <div>
                <button onClick={onPrev}> Miembro Anterior </button>
            <button onClick={onNext}> Miembro Siguiente </button>
        </div>
  </div>
)
}