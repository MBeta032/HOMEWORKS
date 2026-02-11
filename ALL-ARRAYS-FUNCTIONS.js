// TODAS LAS FUNCIONES DE ARRAYS EN JAVASCRIPT (apuntes míos)

const invitados = ["Sofia", "Daniel", "Mateo"];
console.log(invitados); // => ["Sofia", "Daniel", "Mateo"]

// new Array
const niveles = new Array("Bronce", "Plata", "Oro");
console.log(niveles); // => ["Bronce", "Plata", "Oro"]


// new Array(n)
// Sirve para crear un array con longitud n
const espacios = new Array(4);
console.log(espacios);        // => [ <4 empty items> ]
console.log(espacios.length); // => 4

// 2) ACCESO BÁSICO (leer elementos / tamaño)

// length (tamaño)
// Sirve para saber cuántos elementos tiene el array.
const turnos = ["6am", "8am", "10am", "12m"];
console.log(turnos.length); // => 4

// índice [0]
// Sirve para acceder a una posición específica.
console.log(turnos[0]); // => "6am"

// último elemento
console.log(turnos[turnos.length - 1]); // => "12m"

// at(index) (forma moderna, soporta negativos)
// Sirve para obtener el último fácil con -1.
console.log(turnos.at(-1)); // => "12m"


// 3) STATIC METHODS

// Array.from()
// Sirve para convertir algo “recorrible” en array (string, Set, NodeList, etc.).
const usuario = "Manu#2236320";
const letras = Array.from(usuario);
console.log(letras); // => ["M","a","n","u","#","2","2","3","6","3","2","0"]


// Array.fromAsync()
// Sirve para convertir cosas async (promesas o async iterables) en un array FINAL con valores ya listos.
(async () => {
  const tareas = [
    Promise.resolve("PDF listo"),
    Promise.resolve("PPTX listo"),
    Promise.resolve("README listo")
  ];

  const resultados = await Array.fromAsync(tareas);
  console.log(resultados); // => ["PDF listo", "PPTX listo", "README listo"]
})();


// Array.isArray()
// Sirve para comprobar si algo realmente es un array 
const raro1 = ["ok"];
const raro2 = { 0: "ok", length: 1 }; // parece array, pero NO lo es

console.log(Array.isArray(raro1)); // => true
console.log(Array.isArray(raro2)); // => false


// Array.of()
// Sirve para crear un array con los argumentos TAL CUAL

const lista = Array.of("Cali", "UAO", 2026);
console.log(lista); // => ["Cali", "UAO", 2026]


// 4) MÉTODOS DE BÚSQUEDA (encontrar cosas)

// includes(valor)
// Sirve para saber si algo existe en el array.
const materias = ["Estructuras II", "IS II", "Arquitectura"];
console.log(materias.includes("IS II")); // => true

// indexOf(valor)
// Sirve para saber en qué posición está algo (si no está, da -1).
console.log(materias.indexOf("Arquitectura")); // => 2
console.log(materias.indexOf("Calculo"));      // => -1

// find(fn)
// Sirve para encontrar el primer elemento que cumpla una condición.
const gastos = [12000, 3500, 18000, 4000];
const primerCaro = gastos.find(x => x > 10000);
console.log(primerCaro); // => 12000

// findIndex(fn)
// Sirve para encontrar el índice del primer elemento que cumpla.
const idxCaro = gastos.findIndex(x => x > 10000);
console.log(idxCaro); // => 0


// 5) TRANSFORMACIONES (crear nuevos arrays)

// map(fn)
// Sirve para transformar cada elemento y devolver un array nuevo.
const minutos = [15, 20, 35];
const enHoras = minutos.map(m => `${m / 60}h`);
console.log(enHoras); // => ["0.25h", "0.3333333333333333h", "0.5833333333333334h"]

// filter(fn)
// Sirve para quedarte solo con los que cumplen una condición.
const peajes = [0, 7000, 0, 12000, 0];
const pagos = peajes.filter(x => x > 0);
console.log(pagos); // => [7000, 12000]

// reduce(fn, inicio)
// Sirve para “resumir” todo a un solo valor (sumar, multiplicar, etc.).
const totalGastos = gastos.reduce((acc, n) => acc + n, 0);
console.log(totalGastos); // => 37500


// 6) ORDEN / REVERSA 

// sort() - si ordenas números, usa compare
const notas = [4.2, 3.5, 5.0, 2.9];
notas.sort((a, b) => b - a);
console.log(notas); // => [5, 4.2, 3.5, 2.9]

// reverse() 
const ruta = ["Casa", "Parada", "UAO"];
ruta.reverse();
console.log(ruta); // => ["UAO", "Parada", "Casa"]

// toSorted() 
const original = [3, 1, 2];
const ordenado = original.toSorted((a, b) => a - b);
console.log(ordenado); // => [1, 2, 3]
console.log(original); // => [3, 1, 2]

// toReversed()
const r2 = ["A", "B", "C"];
const r2rev = r2.toReversed();
console.log(r2rev); // => ["C", "B", "A"]
console.log(r2);    // => ["A", "B", "C"]

// 7) AGREGAR / QUITAR ELEMENTOS (mutan)

// push(...)
// Sirve para agregar al final.
const listaCompras = ["pan", "leche"];
listaCompras.push("huevos");
console.log(listaCompras); // => ["pan", "leche", "huevos"]

// pop()
// Sirve para quitar el último.
const ultimo = listaCompras.pop();
console.log(ultimo);       // => "huevos"
console.log(listaCompras); // => ["pan", "leche"]

// unshift(...)
// Sirve para agregar al inicio.
listaCompras.unshift("cafe");
console.log(listaCompras); // => ["cafe", "pan", "leche"]

// shift()
// Sirve para quitar el primero.
const primero = listaCompras.shift();
console.log(primero);      // => "cafe"
console.log(listaCompras); // => ["pan", "leche"]


// splice(start, deleteCount, ...items)
// Sirve para borrar/insertar en medio.
const agenda = ["clase", "gym", "trabajo", "descanso"];
const borrado = agenda.splice(1, 2, "estudio"); // borra "gym","trabajo" y mete "estudio"
console.log(borrado); // => ["gym", "trabajo"]
console.log(agenda);  // => ["clase", "estudio", "descanso"]


// toSpliced()
// Sirve para hacer lo mismo que splice pero sin modificar el original.
const agenda2 = ["clase", "gym", "trabajo", "descanso"];
const nuevaAgenda = agenda2.toSpliced(1, 1, "proyecto"); // reemplaza "gym" por "proyecto"
console.log(nuevaAgenda); // => ["clase", "proyecto", "trabajo", "descanso"]
console.log(agenda2);     // => ["clase", "gym", "trabajo", "descanso"]


// 8) EXTRA: UNIR / PARTIR / STRING

// join(separador)
// Sirve para convertir array a string con separador.
const tags = ["#study", "#uao", "#js"];
console.log(tags.join(" ")); // => "#study #uao #js"

// concat(...arrays)
// Sirve para unir arrays
const a = [1, 2];
const b = [3];
console.log(a.concat(b)); // => [1, 2, 3]
console.log(a);           // => [1, 2]

// slice(start, end) 
// Sirve para sacar una “porción” del array.
const semana = ["L", "M", "X", "J", "V", "S", "D"];
console.log(semana.slice(0, 5)); // => ["L", "M", "X", "J", "V"]

// 9) COMPROBACIONES (true/false)

// some(fn): true si AL MENOS uno cumple
console.log(gastos.some(x => x > 20000)); // => false

// every(fn): true si TODOS cumplen
console.log(gastos.every(x => x > 1000)); // => true


// 10) ITERADORES (para recorrer con más control)

// entries(): pares [indice, valor]
const colores = ["beige", "negro", "blanco"];
console.log([...colores.entries()]); // => [[0,"beige"],[1,"negro"],[2,"blanco"]]

// keys(): índices
console.log([...colores.keys()]); // => [0, 1, 2]

// values(): valores
console.log([...colores.values()]); // => ["beige", "negro", "blanco"]
