import { DoctorNode } from "../Nodos/DoctorNode";

interface Props {
    current: DoctorNode | null
    onNext: () => void
}

export default function DoctorCard({ current, onNext }: Props) {

    if (current === null) return <div>No hay doctores en guardia</div>

    return (
        <div>
            <h3> Médico de guardia </h3>
            <p>ID: {current.id} </p>
            <p>Nombre: {current.nombre} </p>
            <p>Área: {current.area} </p>

            <button onClick={onNext}> Siguiente doctor </button>
        </div>
    )
}