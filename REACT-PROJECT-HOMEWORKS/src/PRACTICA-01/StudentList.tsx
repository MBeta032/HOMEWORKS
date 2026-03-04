// Paso 09 crear lista de estudiantes que los recibe mediante los props y muestra con .map()

import type { Student } from "./types";

interface Props {
    students: Student[]
    onDelete: (code: string) => void
}

function StudentList ( { students, onDelete }: Props){
    return (
        <ol>
            {students.map((s) => (
                <li key={s.code}>
                    {s.name} - {s.age} - {s.code}
                    <button onClick={() => onDelete(s.code)}>Eliminar</button>
                </li>
            ))}
        </ol>
    )
} 

export default StudentList