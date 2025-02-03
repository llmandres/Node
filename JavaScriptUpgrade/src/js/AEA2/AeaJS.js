// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
const dataJson = readFileSync('src/js/AEA2/cherry.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)
// console.log(data)

console.log('----------------EJ 1-------------------')
// enunciado
// EJ1
/** 1. Recibirá una URL como parámetro. Esta URL corresponderá a un recurso obtenido
desde el objeto json cuando se llame a la función.
2. Separa la URL en función del carácter “/”, generando un array con cada uno de los
segmentos que la componen.
3. Convierte todos los elementos del array generado anteriormente a mayúsculas.
4. La función debe devolver el array resultante */

const arrowFunc = url => {
  const secciones = url.split('/')
  const mayusculaURL = secciones.map(seccion => seccion.toUpperCase())
  return mayusculaURL
}
console.log(arrowFunc(data.firmness.url))
console.log('----------------EJ 2-------------------')
// enunciaod
// EJ 2
/**  Para este ejercicio, tu tarea es crear una función expresiva anónima en JavaScript que siga
estos pasos:
 1. Recibe un parámetro que será el objeto general JSON cargado.
 2. Convierte todos los valores del objeto en un array.
 3. Filtra aquellos valores que sean de tipo objeto y que además la propiedad .url no
sea undefined
 4. Devuelve el array con los objetos filtrados.
 5. Itera sobre el array filtrado y extraer las URLs, devolviendo un array con las URLs
obtenidas */

const funcionAnonima = (data) => {
  const valoresArray = Object.values(data)
  // console.log(valuesArray)
  const valoresFiltrados = valoresArray.filter(x => typeof x === 'object' && x.url !== undefined)
  // console.log(filteredValues)
  const urls = valoresFiltrados.map(x => x.url)
  return urls
}

console.log(funcionAnonima(data))

console.log('----------------EJ 3-------------------')
// enunciado
// EJ 3
/**  Para este ejercicio, tu tarea es crear una función autoejecutable (IIFE) que:
 1. Reciba por parámetro el array flavors.
 2. Determine si alguno de los elementos del array tiene una potency distinta de 0 y lo
muestre por consola.
 3. Calcule la suma total de todas las potencias de los elementos del array y la
muestre por consola. */

const flavorsArray = data.flavors
let contador = 0

;(function (flavorsArray) {
  flavorsArray.forEach(element => {
    if (element.potency !== 0) {
      console.log(element)
    }
    contador = contador + element.potency
  })
})(flavorsArray)
console.log('Contador de potency : ' + contador)

console.log('----------------EJ 4-------------------')
// enunciado
// EJ 4
/**
 * Para este ejercicio, tu tarea es crear una función arrow llamda filtrarNúmeros en JavaScript
que:
 1. Reciba el objeto data como parámetro.
 2. Convierta el objeto en un array de pares [clave, valor].
 3. Filtre solo aquellos elementos cuyo valor sea de tipo Number.
 4. Convierta el array filtrado nuevamente a un objeto.
 5. Recorra el objeto final y muestre por consola cada clave y su valor.
 */

const filtrarNumeros = x => {
  const keysConNumberValues = Object.entries(x).filter(([clave, valor]) => typeof valor === 'number')
  const objectoFiltrado = Object.fromEntries(keysConNumberValues)
  for (const [clave, valor] of Object.entries(objectoFiltrado)) {
    console.log(clave + ' : ' + valor)
  }
  return objectoFiltrado
}

console.log(filtrarNumeros(data))

console.log('----------------EJ 5-------------------')
// enunciado
// EJ 5
/**
 *  Para este ejercicio, tu tarea es crear una función declarativa llamada procesarFlavors que:
 1. Reciba el array flavors como parámetro.
 2. Extraiga los nombres de los sabores y los guarde en un nuevo array.
 3. Ordene alfabéticamente los nombres.
 4. Una los nombres ordenados utilizando "->" como separador.
 5. Devuelva la String resultante y la muestre por terminal.
 */
const arrayNombres = []
function procesarFlavors (array) {
  array.forEach(elem => {
    arrayNombres.push(elem.flavor.name)
  })
}
procesarFlavors(data.flavors)
console.log(arrayNombres)
arrayNombres.sort()

console.log(arrayNombres.join('->'))

console.log('----------------EJ 6-------------------')
// enunciado
// EJ 6
/**
 *  Para este ejercicio, tu tarea es crear una función arrow llamada contarVocales que:
 1. Reciba como parámetro el array con las claves del objeto JSON.
 2. Separa cada clave en letras individuales.
 3. Aplana el array resultante en una única lista de caracteres.
 4. Cuente cuántas vocales (a, e, i, o, u) hay en el array final.
 5. Muestre el número total de vocales por terminal.
 */
let contadorVocales = 0
const vocales = ['a', 'e', 'i', 'o', 'u']
const contarVocales = x => {
  for (const e of Object.keys(x)) {
    for (let i = 0; i < e.length; i++) {
      console.log(e[i])
      if (vocales.some(a => a === e[i])) {
        contadorVocales++
      }
    }
    console.log('-----------------')
  }
}

contarVocales(data)
console.log('Contador de vocales : ' + contadorVocales)

console.log(Object.keys(data).map(e => e.split('')).flat().reduce((acc, el) => {
  if (vocales.some(a => a === el)) acc++
  return acc
}, 1))
