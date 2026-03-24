import type { IATMRecord } from "../interfaces/IATM.interface"
import ATMCard from "./ATMCard"

interface ATMListProps {
  people: IATMRecord[]
}

export default function ATMList({ people }: ATMListProps) {
  if (people.length === 0) {
    return <p>No hay personas en la cola.</p>
  }

  return (
    <section className="atm-list">
      {people.map((person) => (
        <ATMCard key={person.id} person={person} />
      ))}
    </section>
  )
}