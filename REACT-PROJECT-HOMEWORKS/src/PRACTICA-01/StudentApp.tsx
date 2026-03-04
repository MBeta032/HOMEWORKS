// Paso 07 creamos el componente padre 

import { useState , useEffect } from "react";
import { StudentLinkedList } from "./StudentLinkedList";
import StudentList from "./StudentList";
import "./students.css"


function StudentApp() {
    const [ list, setList ] = useState(new StudentLinkedList()) //list -> lista actual setList -> La función que actualiza el estado cada setlist actualiza la list

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [code, setCode] = useState("")

    useEffect (() => {
        console.log("La lista cambió. Total:", list.length);
        console.log(list.toArray());
        }, [list]);

    const handleDelete = (code:string) => {
        const nueva = new StudentLinkedList()

        let curr = list.head
        while (curr !== null) {
            if (curr.code !== code) {
                nueva.append(curr.name, curr.age, curr.code)
            }
            curr = curr.next
        }
        setList(nueva)
    }

    const handleAdd = () => {
        const nueva = new StudentLinkedList()

        let curr = list.head
        while (curr !== null) {
            nueva.append(curr.name, curr.age, curr.code)
            curr = curr.next
        }

        nueva.append(name, Number(age), code)
        setList(nueva)

        setName("")
        setAge("")
        setCode("")
    }
    

    return <div className = "student-app">
    <div className = "student-title"> Practice 01 -Students</div>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
    <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code" />
    <button onClick={handleAdd}>Agregar</button>
    <StudentList students={list.toArray()} onDelete={handleDelete} />
    </div>
}

export default StudentApp