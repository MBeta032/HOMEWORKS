import { useState, type FormEvent } from "react"
import { Queue } from "../algorithms/Queue.class"
import ATMForm from "../components/atm/ATMForm"
import ATMList from "../components/atm/ATMList"
import { ATMdata, createRandomArrivalDate } from "../data/ATMdata"
import type { IATMRecord } from "../interfaces/IATMRecord.interface"
import Header from "../components/shared/Header"

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

  const handleAddPerson = (event: FormEvent<HTMLFormElement>) => {
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
        <Header/>
        <h1>ATM</h1>

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

        <button onClick={handleAttendPerson} disabled={people.length === 0}>
          Atender persona
        </button>

        <h2>Cola de personas</h2>
        <ATMList people={people} />
      </section>
    </main>
  )
}