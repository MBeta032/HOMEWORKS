import type { IATMRecord } from "../interfaces/IATM.interface"

export const createRandomArrivalDate = () => {
  const date = new Date()
  const randomMinutes = Math.floor(Math.random() * 10080)
  date.setMinutes(date.getMinutes() - randomMinutes)
  return date.getTime()
}

export const ATMdata: IATMRecord[] = [
  {
    id: 1,
    name: "Laura",
    withdrawalAmount: 200000,
    arrivalDate: createRandomArrivalDate(),
  },
  {
    id: 2,
    name: "Carlos",
    withdrawalAmount: 50000,
    arrivalDate: createRandomArrivalDate(),
  },
  {
    id: 3,
    name: "Andres",
    withdrawalAmount: 120000,
    arrivalDate: createRandomArrivalDate(),
  },
]