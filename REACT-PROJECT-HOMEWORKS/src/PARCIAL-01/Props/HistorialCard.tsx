import { HistorialNode } from "../Nodos/HistorialNode"

interface Props {
    current: HistorialNode | null
    onNext: () => void
    onPrev: () => void
}

export default function HistorialCard({ current, onNext, onPrev }: Props) {

    if (current === null) return <div>No hay historial</div>

    return (
        <div>
            <h1>Historial de Atención </h1>

            <p>Paciente: {current.nombrePaciente} - {current.pacienteId}</p>
            <p>Doctor: {current.nombreDoctor} - {current.doctorId} </p>

            <button onClick={onPrev}>Anterior</button>
            <button onClick={onNext}>Siguiente</button>
        </div>
    )
}