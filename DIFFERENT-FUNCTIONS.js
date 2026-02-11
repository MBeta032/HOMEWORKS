//Research difference between Arrow Functions and Regular Functions

/************************************************************
  ARROW (=>) vs FUNCTION (normal) — EXPLICADO CON COMENTARIOS
************************************************************/


/* ==========================================================
1) MÉTODO DENTRO DE UN OBJETO (CASO CLÁSICO)
   -> Si usas "this" para leer propiedades del objeto,
      lo correcto casi siempre es FUNCTION normal.
========================================================== */

const robot1 = {
  nombre: "R2",
  hablar: function () {
    console.log(this.nombre);
    // ✅ BIEN: aquí "this" apunta al objeto robot1 porque
    // robot1.hablar() => quien llama es robot1
  }
};
robot1.hablar(); // R2

const robot2 = {
  nombre: "R2",
  hablar: () => {
    console.log(this.nombre);
    // ❌ MAL: arrow NO tiene su propio "this".
    // "this" lo toma del contexto de afuera (global/archivo),
    // NO del objeto robot2, por eso suele salir undefined.
  }
};
robot2.hablar(); // undefined (comúnmente)

/* ==========================================================
4) arguments
   -> Function normal tiene "arguments".
   -> Arrow NO tiene "arguments" (usa ...args).
========================================================== */

function contar() {
  console.log(arguments.length);
  // ✅ BIEN: "arguments" existe en function normal.
}
contar(1, 2, 3); // 3

const contar2 = () => {
  // console.log(arguments.length);
  // ❌ MAL: "arguments" NO existe en arrow (ReferenceError).
};
const contar3 = (...args) => {
  console.log(args.length);
  // ✅ BIEN: en arrow se usa rest (...args) para capturar parámetros.
};
contar3(1, 2, 3); // 3


/* ==========================================================
5) new (constructores)
   -> Function normal puede usarse con "new".
   -> Arrow NO puede usarse con "new".
========================================================== */

function Persona(nombre) {
  this.nombre = nombre;
  // ✅ BIEN: function normal puede ser constructor.
}
const p1 = new Persona("Ana");
console.log(p1.nombre); // Ana

const Persona2 = (nombre) => {
  this.nombre = nombre;
  // ❌ MAL: arrow no sirve como constructor.
};
// const p2 = new Persona2("Ana"); // ❌ TypeError

/************************************************************
  REGULAR FUNCTION (normal)
************************************************************/
function oddOrEven(num) {
  // ✅ BIEN: function normal para una función “normal” reutilizable.
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// Examples
oddOrEven(7);  // 7 is odd
oddOrEven(12); // 12 is even


/************************************************************
  ARROW FUNCTION (=>)
************************************************************/
const oddOrEvenArrow = (num) => {
  // ✅ BIEN: arrow es perfecto para funciones cortas.
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
};

// Examples
oddOrEvenArrow(7);  // 7 is odd
oddOrEvenArrow(12); // 12 is even
