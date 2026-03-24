# 📘 Challenge 04 — Stack de Libros

Este challenge consiste en crear y manejar una **pila de libros (Stack)**, aplicando la lógica de estructuras de datos dentro de una interfaz desarrollada en **React + TypeScript**.

---

## 👤 Información del estudiante

- **Nombre:** Manuel Betancurt Pérez
- **Código:** 2236320
- **Correo:** manuel.betancurt@uao.edu.co

---

## 🎯 Objetivo del challenge

Implementar una estructura de datos tipo **Stack** para gestionar libros, permitiendo:

- crear nuevos libros
- agregarlos a la pila
- mostrar los libros en pantalla
- trabajar con datos mock iniciales

---

## 📌 Requerimientos del ejercicio

Cada libro debe tener:

- **Name**
- **ISBN**
- **Author**
- **Editorial**

Además, el proyecto debe:

1. crear y manejar una pila de libros
2. llenar la pila con datos mock
3. mostrar una pantalla con formulario para agregar libros
4. imprimir la pila en pantalla

---

## 🛠️ Tecnologías usadas

- **React**
- **TypeScript**
- **CSS**
- **Vite**

---

## 🧠 Estructura de datos utilizada

### Stack (Pila)

Se utilizó una estructura tipo **Stack**, la cual sigue la lógica:

- **LIFO** → *Last In, First Out*
- el último libro agregado es el primero en salir

---

## ⚙️ Funcionalidades implementadas

- carga inicial de libros mock
- formulario para agregar nuevos libros
- visualización de la pila en pantalla
- operación para remover el libro superior de la pila
- separación entre lógica, componentes, datos e interfaces

---

## 📁 Estructura del proyecto

```bash
src/
│
├── algorithms/
│   └── Stack.class.ts
├── components/
│   ├── BookCard.tsx
│   ├── BookForm.tsx
│   └── LibraryList.tsx
├── data/
│   └── books.mock.data.ts
├── interfaces/
│   └── book.interface.ts
├── styles/
│   └── index.css
├── LibroApp.tsx
└── main.tsx
