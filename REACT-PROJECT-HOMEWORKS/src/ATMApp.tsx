import { useState } from "react"
import { Queue } from "./algorithms/Queue.class"
import ATMForm from "./components/ATMForm"
import ATMList from "./components/ATMList"
import Button from "./components/Button"
import { ATMdata, createRandomArrivalDate } from "./data/ATMdata"
import type { IATMRecord } from "./interfaces/IATM.interface"

const loadInitialPeople = () => {
  const queue = new Queue()

  ATMdata.forEach((person) => {
    queue.enqueue(person)
  })

  return queue.print()
}

export default function ATM() {
  const [people, setPeople] = useState<IATMRecord[]>(loadInitialPeople())
  const [lastAttended, setLastAttended] = useState<IATMRecord | null>(null)

  const [name, setName] = useState("")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")

  const rebuildQueue = () => {
    const queue = new Queue()

    people.forEach((person) => {
      queue.enqueue(person)
    })

    return queue
  }

  const handleAddPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (name.trim() === "" || withdrawalAmount.trim() === "") {
      return
    }

    const newPerson: IATMRecord = {
      id: Date.now(),
      name: name.trim(),
      withdrawalAmount: Number(withdrawalAmount),
      arrivalDate: createRandomArrivalDate(),
    }

    const queue = rebuildQueue()
    queue.enqueue(newPerson)

    setPeople(queue.print())
    setName("")
    setWithdrawalAmount("")
  }

  const handleAttendPerson = () => {
    if (people.length === 0) {
      return
    }

    const queue = rebuildQueue()
    const attendedPerson = queue.dequeue()

    setLastAttended(attendedPerson)
    setPeople(queue.print())
  }

  return (
    <main className="page">
      <section className="atm-container">
        <h1>Challenge 08 - Cola de personas en cajero</h1>

        <div className="atm-info">
          <p>Total de personas en cola: {people.length}</p>
          <p>
            Primera persona en la cola:{" "}
            {people.length > 0 ? people[0].name : "Ninguna"}
          </p>
          <p>
            Última persona atendida:{" "}
            {lastAttended ? lastAttended.name : "Ninguna"}
          </p>
        </div>

        <ATMForm
          name={name}
          withdrawalAmount={withdrawalAmount}
          onChangeName={setName}
          onChangeWithdrawalAmount={setWithdrawalAmount}
          onSubmit={handleAddPerson}
        />

        <div className="actions">
          <Button
            text="Atender persona"
            onClick={handleAttendPerson}
            disabled={people.length === 0}
          />
        </div>

        <h2>Cola de personas por fecha de llegada</h2>
        <ATMList people={people} />
      </section>
    </main>
  )
}