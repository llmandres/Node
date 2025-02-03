// ARRAYS EN JAVASCRIPT
const lista = [90, 'tetxo', Date.now(), NaN, null]

console.log(lista)

console.log('///////////////////////////')
// Destructuracion

const list = ['a', 'b', 'c']
// Si queremos meter varios valores en variables se puede hacer de esta forma clasica
// const var1 = list[0]
// const var1 = list[1]
// const var1 = list[2]
// O TAMBIEN
const [var1, var2, var3] = list
console.log(var1)
console.log(var2)
console.log(var3)
console.log('///////////////////////////')
// SPREAD
const list3 = ['a', 'b', 'c']
let list2 = ['d', 'e', ...list3] // Esto lo que hace es que añade lo de un array a otro
// Es decir, los valores que tenga un array + ...(la lista que quieres añadir). Se puede poner
// en cualquier parte. Esto por ejemplo daría "d , e , a , b , c"
console.log(list2)
// Otra lista mas
const list4 = ['jjj']
list2 = ['d', 'e', ...list3, ...list4]
console.log(list2)

// Ahora juntamos el SPREAD y el DESTRUCTURATION

const [var10, ...var12] = ['a', 'b', 'c']
console.log(var10 + ' + ' + var12) // Aqui la variable que pongas detras de los ... agarrara todo el resto de valores que queden
// segun el orden disponible como
const [var20, var21, ...var22] = ['a', 'b', 'c', 'j', 'k', 'z']
console.log(var20 + ' + ' + var21 + ' + ' + var22) // Aqui el var20 y var21 pilla los 2 primeros de las 2 primeras posiciones
// y el var22 pilla el resto de valores que quedan
console.log('///////////////////////////')
// PUSHES

// Agrega un elemento al final
list2 = ['d', 'e']
console.log(list2)
list2.push('x')
console.log(list2)
console.log('///////////////////////////')
// Agrega un elemento al principio
list2 = ['d', 'e']
console.log(list2)
list2.unshift('w')
console.log(list2)
console.log(list2.includes('w'))

console.log('///////////////////////////')

const copia = list2.toSorted()
console.log(list2) // Sin ordenar
console.log(copia) // Ordenado

const ciudades = ['Madrid', 'Barcelona', 'Berlin', 'Tokyo']
console.log(ciudades[0])
console.log(ciudades[ciudades.length - 1])
ciudades.unshift('Seúl')
ciudades.push('London')
ciudades.pop()

const paises = ['España', 'Italia', 'Japon', 'Alemania']

// Si queremos imprimir los datos de dos arrays o mas usando el SPREAD
console.log([...ciudades, ...paises])

console.log('------------------------------------------')
// JSON en JavaScript

const listaJSON = { edad: 18, altura: 188, nombre: 'Maria' }
console.log(listaJSON.edad) // Se puede acceder a un atributo asi
console.log(listaJSON['edad']) // o asi
console.log(listaJSON)
// Tambien podemos borrar propiedades
delete listaJSON.edad // Aqui eliminamos la propiedad
console.log(listaJSON)

// Cambios en las propiedades
const listaJSON2 = { edad: 18, altura: 188, nombre: 'Maria' }
listaJSON2.edad = 'Hola'
console.log(listaJSON2)

// Crear dinamicamente propiedades

listaJSON2.calificacion = 8 // Aunque no exista realmente en el objeto, este lo creara automaticamente y le dara el valor
console.log(listaJSON2)

listaJSON2.info = { comportamiento: 'bueno', trabajo: 'decente' } // Hemos creado un objeto dentro del objeto con la propiedad info
console.log(listaJSON2)

console.log(listaJSON2.info.comportamiento) // Acceder a propiedades de objetos anidados

// -------

console.log('-------------------------------------')
const lista3 = [18, 188, 'Maria']
const listaJSON3 = { edad: 18, altura: 188, nombre: 'Maria' }

const [x, y, z] = lista3
const { a, b, c } = listaJSON3

console.log(x, y, z) // Aqui si que dara el resultado normal
console.log(a, b, c) // Esto sera undefined, undefined, undefined
// Para que la destructuracion funcione bien con Objetos habra que ponerle el nombre de la propiedas

const { edad, altura, nombre } = listaJSON3
console.log(edad, altura, nombre) // Ahora si funcionaria

// Si utilizamos Spread

const { edad2, ...listaJSON4 } = listaJSON3

console.log(edad2, listaJSON4) // Aqui pilla primero edad2, como no existe una clave asi sera undefined y con los ... pondra el resto de valores

const objeto1 = { CI: 60, sexo: 0 }
const obejto2 = { edad: 18, nombre: 'Juan', ...objeto1 } // De esta manera junta 2 objetos
console.log(obejto2)

console.log('--------------------------------')
// KEYS

console.log(Object.keys(obejto2)) // De esta manera podemos sacar las "claves" o nombres de propiedades del objeto
console.log(Object.values(obejto2)) // De esta manera unicamente no va a dar los valores
console.log(Object.entries(obejto2)) // Nos da todo como separado por arrays []

// Importante Destructuring Objetos y Spread en Objetos
/** ********************************************************** */
/**
 * const lista3 = [18, 188, 'Maria']
const listaJSON3 = { edad: 18, altura: 188, nombre: 'Maria' }

const [x, y, z] = lista3
const { a, b, c } = listaJSON3

console.log(x, y, z) // Aqui si que dara el resultado normal
console.log(a, b, c) // Esto sera undefined, undefined, undefined
// Para que la destructuracion funcione bien con Objetos habra que ponerle el nombre de la propiedas

const { edad, altura, nombre } = listaJSON3
console.log(edad, altura, nombre) // Ahora si funcionaria
 */
/**
 * const { edad2, ...listaJSON4 } = listaJSON3

console.log(edad2, listaJSON4) // Aqui pilla primero edad2, como no existe una clave asi sera undefined y con los ... pondra el resto de valores

 */

/** ********************************************************* */

// Como convertir un objeto JAVASCRIPT en JSON

console.log('--------------------------')

// JSON.stringify() -> Convierte el objeto en String (JSON)
// JSON.parse() -> Convierte el String (JSON) en un Object
console.log(JSON.stringify)

const JSONconvertido = JSON.stringify(obejto2) // String (JSON) // Se usa cuando vamos a enviar los datos ya que los va a pasar a String (JSON)
console.log(JSONconvertido) // Pasado a string (JSON)
console.log(typeof JSONconvertido) // String
console.log(typeof JSON.parse(JSONconvertido)) //  Se usa cuando vayamos a hacer una lectura , ya que esto lo va a convertir en Object
// Esa sentencia de arriba sera Object ahora
console.log(JSON.parse(JSONconvertido)) // Lo imprime como un Objeto normal ya, y no como un JSON con "" en cada propiedad
