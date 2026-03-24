import type { FormEvent } from "react"
import Button from "../shared/Button"

interface ATMFormProps {
  name: string
  withdrawalAmount: string
  onChangeName: (value: string) => void
  onChangeWithdrawalAmount: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function ATMForm({
  name,
  withdrawalAmount,
  onChangeName,
  onChangeWithdrawalAmount,
  onSubmit,
}: ATMFormProps) {
  return (
    <form onSubmit={onSubmit} className="atm-form">
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="Nombre"
        />
      </div>

      <div>
        <label htmlFor="withdrawalAmount">Monto a retirar</label>
        <input
          id="withdrawalAmount"
          type="number"
          value={withdrawalAmount}
          onChange={(e) => onChangeWithdrawalAmount(e.target.value)}
          placeholder="Monto a retirar"
        />
      </div>

      <Button type="submit" text="Agregar persona" />
    </form>
  )
}