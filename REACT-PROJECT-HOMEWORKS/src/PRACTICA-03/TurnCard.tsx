import { TurnNode } from "./TurnNode";

interface Props {
    current: TurnNode | null 
    onNext: () => void
    onPrev: () => void
}

export default function TurnCard({ current, onNext, onPrev}: Props) {

    if(current === null ) return <div>No hay turnos en curso</div>

    return (
        <div className="turn-card">
            <div className="turn-badge">
                <div className="turn-number">{current.number}</div>
            </div>

            <div className="turn-info">
                <div className="turn-name">{current.name}</div>
                <div className="turn-hint">Turno actual</div>
            </div>

            <div className="turn-actions">
                <button className="turn-btn turn-btn-prev" onClick={onPrev}>
                    Anterior
                </button>
            <button className="turn-btn turn-btn-next" onClick={onNext}>
                Siguiente
            </button>
        </div>
  </div>
)
}