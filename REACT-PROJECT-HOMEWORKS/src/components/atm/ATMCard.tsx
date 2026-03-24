import type { IATMRecord } from "../../interfaces/IATMRecord.interface"

interface ATMCardProps {
  person: IATMRecord
}

export default function ATMCard({ person }: ATMCardProps) {
  return (
    <article className="atm-card">
      <p>
        <strong>Nombre:</strong> {person.name}
      </p>

      <p>
        <strong>Monto a retirar:</strong> $
        {person.withdrawalAmount.toLocaleString("es-CO")}
      </p>

      <p>
        <strong>Fecha de llegada:</strong>{" "}
        {new Date(person.arrivalDate).toLocaleString("es-CO")}
      </p>
    </article>
  )
}