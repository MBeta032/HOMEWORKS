# 🏧 Challenge 05 — Queue de Personas en ATM

Este challenge consiste en crear y manejar una **cola de personas (Queue)** para un cajero automático, aplicando estructuras de datos en una interfaz desarrollada con **React + TypeScript**.

---

## 👤 Información del estudiante

- **Nombre:** Manuel Betancurt Pérez
- **Código:** 2236320
- **Correo:** manuel.betancurt@uao.edu.co

---

## 🎯 Objetivo del challenge

Implementar una estructura de datos tipo **Queue** para gestionar la fila de personas en un ATM, permitiendo:

- registrar nuevas personas
- asignar fecha de llegada aleatoria
- mostrar la cola ordenada en pantalla
- atender personas según el orden de llegada

---

## 📌 Requerimientos del ejercicio

Cada persona en el ATM debe tener:

- **name**
- **withdrawal amount**
- **random arrival date** asignada por el sistema

Además, el proyecto debe:

1. crear y manejar una cola de personas
2. llenar la cola con datos mock
3. crear una pantalla con formulario para agregar personas
4. imprimir la cola en pantalla según la fecha de llegada

---

## 🛠️ Tecnologías usadas

- **React**
- **TypeScript**
- **CSS**
- **Vite**

---

## 🧠 Estructura de datos utilizada

### Queue (Cola)

Se utilizó una estructura tipo **Queue**, la cual sigue la lógica:

- **FIFO** → *First In, First Out*
- la primera persona en entrar es la primera en ser atendida

---

## 📁 Posible estructura del proyecto

```bash
src/
│
├── algorithms/
│   └── Queue.class.ts
├── components/
│   ├── ATMCard.tsx
│   ├── ATMForm.tsx
│   └── ATMList.tsx
├── data/
│   └── ATMdata.ts
├── interfaces/
│   └── IATMRecord.interface.ts
├── styles/
│   └── index.css
├── ATM.tsx
└── main.tsx
