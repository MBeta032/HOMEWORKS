import type { Pacientes } from "../types";

interface Props {
    pacientes: Pacientes []
    onDelete: (id: string) => void
}

function PacienteCard ( {pacientes, onDelete}: Props) {
    return (
        <ol>
            {pacientes.map((s) => (
                <li key={s.id}>
                    {s.nombre} - {s.turno}
                    <button onClick={() => onDelete(s.id)}>Eliminar</button>
                </li>
            ))}
        </ol>
    )
}

export default PacienteCard