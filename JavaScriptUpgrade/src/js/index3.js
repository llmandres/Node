const objetoTest = {
  nombre: 'Pepe',
  apellidos: 'Garcia Martinez',
  edad: 34,
  notas: [2, 3, 5],
  estadisticas: { inteligencia: 8, fuerza: 6, oratoria: 7, paciencia: 10 }
}

// FOR EACH o FOR OF, nota es la variable que usaremos como i y luego ponemos OF del array
for (const nota of objetoTest.notas) {
  console.log(nota)
}
// Claves, valores y entries de un objeto

// Object.keys() // Claves
// Object.values() // Valores
// Object.entries() // Todo, en un array de arrays, es decir, envuelve todo el objeto en un array
// y envia todo en un array tipo posicion 1 es ['nombre', 'Pepe'], es decir mete a todo a un array

// Estas las podemos recorrer asi
for (const clave of Object.keys(objetoTest)) { // Lo mismo con el resto
  console.log(clave)
}

for (const clave of Object.entries(objetoTest)) { // Lo mismo con el resto
  console.log(clave)
}

console.log('-------------------------------------')

// Si haces un for in de un array, te va a dar las posiciones tipo 0 1 2 3 4
// Pero se usa principalmente en objetos ya que las posiciones de un objeto
// son los indices

// FOR OF VALORES (ARRAYS)
// FOR IN INDICES (OBJETOS)

// El FOR OF devuelve los valores de cada clave

for (const clave in objetoTest) { // Esto te va a dar las claves de un objeto
  console.log(clave)
  // console.log(objetoTest.clave) ESTO NO FUNCIONARIA, para este tipo de estructuras
  // hay que usar [objetoTest[clave]]
}

// Esto seria igual que el for in, pero con el of
for (const clave of Object.keys(objetoTest)) {
  console.log(clave)
}
console.log('-------------------------------------')
console.log('FOR EACH')
console.log('-------------------------------------')
// Este va a ir agarrando cada posicion y se le va a aplicar un callback

console.log(objetoTest.notas)

// Callback es una funcion que se pasa por parametro y lo meteremos en el forEach

console.log('Forma mas larga')
const mostrarPantalla = (element) => { console.log(element) } // CallBACK
// Metemos el callback como parametro de forEach
objetoTest.notas.forEach(mostrarPantalla) // El for each solo funciona en arrays, como .notas tiene un array, puede usar .forEach
// Esto se puede simplificar a esto
console.log('Forma mas corta')
objetoTest.notas.forEach(element => console.log(element))

console.log('Forma con callback de LOGICA')
const mostrarPantallaLogica = (element) => {
  const valorDuplicado = element * 2
  console.log(valorDuplicado)
} // CALL BACK CON LOGICA

objetoTest.notas.forEach(mostrarPantallaLogica)

console.log('Entrando con values')
Object.values(objetoTest.estadisticas).forEach(mostrarPantalla) // Entra al array usando values

// Lo que hace verify es verificar toDOs los valores y va a comprobar o a hacer algo.
// Every devuelve TRUE O FALSE, si se cumple lo pedido o no
const verificarPares = (elem) => { return elem % 2 === 0 } // true, false, true , true
console.log(objetoTest.notas.every(verificarPares)) // Con lo recorrido te devolvera false, porque hay un false
// Osea every una vez recorrido, verifica un criterio pasado por el callback en este caso, que sean pares

console.log('Simplificacion de EVERY')
// EN EVERY TODAS TIENEN QUE CUMPLIR EL CRITERIO
console.log(objetoTest.notas.every(eleme => eleme % 2 === 0))

console.log('SOME')
// SOME
// A Diferencia de Every, aqui siempre que cumpla 1 sera true, OSEA,
// al menos tiene que existir un true
console.log(objetoTest.notas.some(eleme => eleme % 2 === 0)) // Mismo ejemplo de antes, pero como ahora es SOME y tiene un true
// dara true en vez de false

console.log('------------------------')
console.log('MAP')
// !!!! IMPORTANTE
console.log('------------------------')
console.log(objetoTest.notas)
const porDos = (elem) => { return elem * 2 } // Agarra el valor y lo multiplica x2
console.log(objetoTest.notas.map(porDos)) // Como notas es un array, puede tener .map . Su parametro va a ser un callback
// Ahora .map lo que hara sera agarrar todos los valores y multiplicarlo por 2 , creando un array nuevo con todo metido
// es UN NUEVO ARRAY, una coPIA
const copiaArrayNotas = objetoTest.notas.map(porDos)
console.log(copiaArrayNotas) // Como crea una nuevo, puedes meterlo en una variable

// Every , some y MAP devuelven valores
const copiaArraySimplificado = objetoTest.notas.map((elem) => { return elem * 2 })
console.log(copiaArraySimplificado)

console.log('------------------------')
console.log('FILTER')
console.log('------------------------')

console.log(objetoTest.notas) // Este es el array normal
const esPar = (elem) => { return elem % 2 === 0 } // El callback que sera el criterio / condicion a cumplir
console.log(objetoTest.notas.filter(esPar)) // Ahora retornara un array con unicamente los valores que pasen el criterio
// es decir, solo los valores pares en este caso.
// En este caso es  true, false , false, entonces solo traera el primer valor

console.log('------------------------')
console.log('REDUCE')
console.log('------------------------')
// Forma larga
const multiplicacionElementos = (acc, elem) => acc * elem
console.log(objetoTest.notas.reduce(multiplicacionElementos))
// Forma simplificada
console.log(objetoTest.notas.reduce((acc, elem) => acc * elem))

// Reduce puede recibir un callback y un valor.
// El segundo valor es el valor en el cual se va a inicializar
// Por lo tanto, en este caso estara haciendo multiplicaciones por 0 todo el rato
console.log(objetoTest.notas.reduce(multiplicacionElementos, 1))// Los parametros son (callback, valor_en_el_que_se_inicializara)
// Si no se inicializa , va a pillar siempre el PRIMER valor, es decir, por defecto se inicializara al valor de la primera posicion del array
// a no ser que se lo pases por paramtero despues del callback
