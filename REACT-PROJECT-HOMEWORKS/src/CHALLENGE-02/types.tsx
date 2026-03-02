// "interface" en TypeScript = un "molde" o "plantilla"
// Esto NO crea datos, solo define la forma que deben tener los datos
// Aquí decimos: un Contacto SIEMPRE tendrá id, nombre y telefono
export interface Contacto {
  id: number
  nombre: string
  telefono: string
}