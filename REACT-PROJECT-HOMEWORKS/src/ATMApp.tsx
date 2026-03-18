import { useState } from "react"
import { ATMQueue, type PersonaATM } from "./ATMQueue"

const crearFechaAleatoria = () => {
  const fecha = new Date()
  const minutosAleatorios = Math.floor(Math.random() * 10080)
  fecha.setMinutes(fecha.getMinutes() - minutosAleatorios)
  return fecha.getTime()
}

const cargarPersonasMock = () => {
  const queue = new ATMQueue()

  const personasMock: PersonaATM[] = [
    {
      id: 1,
      name: "Laura",
      withdrawalAmount: 200000,
      arrivalDate: crearFechaAleatoria(),
    },
    {
      id: 2,
      name: "Carlos",
      withdrawalAmount: 50000,
      arrivalDate: crearFechaAleatoria(),
    },
    {
      id: 3,
      name: "Andres",
      withdrawalAmount: 120000,
      arrivalDate: crearFechaAleatoria(),
    },
  ]

  personasMock.forEach((persona) => {
    queue.enqueue(persona)
  })

  return queue.print()
}

export default function ATMApp() {
  const [personasATM, setPersonasATM] = useState<PersonaATM[]>(cargarPersonasMock())

  const [name, setName] = useState("")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")

  const handleAddPersonaATM = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (name.trim() === "" || withdrawalAmount.trim() === "") {
      return
    }

    const nuevaPersona: PersonaATM = {
      id: Date.now(),
      name: name,
      withdrawalAmount: Number(withdrawalAmount),
      arrivalDate: crearFechaAleatoria(),
    }

    const nuevaCola = new ATMQueue()

    personasATM.forEach((persona) => {
      nuevaCola.enqueue(persona)
    })

    nuevaCola.enqueue(nuevaPersona)

    setPersonasATM(nuevaCola.print())

    setName("")
    setWithdrawalAmount("")
  }

  return (
    <div>
      <h1>Challenge 05 - Queue de Personas ATM</h1>

      <p>Total de personas en cola: {personasATM.length}</p>
      <p>
        Primera persona en la cola:{" "}
        {personasATM.length > 0 ? personasATM[0].name : "Ninguna"}
      </p>

      <form onSubmit={handleAddPersonaATM}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </div>

        <div>
          <label>Withdrawal Amount</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(e.target.value)}
            placeholder="Monto a retirar"
          />
        </div>

        <button type="submit">Agregar Persona ATM</button>
      </form>

      <hr />

      <h2>Cola de personas por arrival date</h2>

      {personasATM.map((persona) => (
        <div key={persona.id}>
          <p><strong>Name:</strong> {persona.name}</p>
          <p>
            <strong>Withdrawal Amount:</strong> $
            {persona.withdrawalAmount.toLocaleString("es-CO")}
          </p>
          <p>
            <strong>Arrival Date:</strong>{" "}
            {new Date(persona.arrivalDate).toLocaleString("es-CO")}
          </p>
          <hr />
        </div>
      ))}
    </div>
  )
}