import { readFileSync } from 'fs'

// NOTA: Cargar el fichero snorlax.json

const dataJson = readFileSync('src/js/ej02/snorlax (1).json', 'utf8')
const data = JSON.parse(dataJson)
// console.log(data)

// 1. IIFE para mostrar habilidades (Revisar Tema 3.5 Pagina 6)
function mostrarHabilidades () {
  data.abilities.forEach(element => {
    console.log(element.ability.name)
  })
}
mostrarHabilidades()

// Enunciado: Crea una función autoejecutable (IIFE) que recorra el
// array de habilidades (abilities) en el archivo JSON.
// Obtén los nombres de las habilidades y muéstralos en la consola como un array.
const arrayAbilities = [];

(function () {
  data.abilities.forEach(element => {
    arrayAbilities.push(element.ability.name)
  })
})()

console.log(arrayAbilities)

// 2. Callback para mostrar nombres de juegos (Revisar Tema 3.5 Pagina 8)

// Enunciado: Escribe una función llamada getGameNames que reciba un callback.
// Esta función debe recorrer el array game_indices del archivo JSON,
// obtener los nombres de las versiones del juego y pasarlos al callback,
// que debe imprimirlos en la consola como un array.
// Assuming data.game_indices is an array of objects and each object has a 'name' property
function getGameNames (callback) {
  const gameNames = []

  data.game_indices.forEach(element => {
    gameNames.push(element.version.name)
  })

  callback(gameNames)
}

function printGameNames (gameNames) {
  console.log(gameNames)
}

getGameNames(printGameNames)

// 3. Arrow Function para calcular la altura (Revisar Tema 3.5 Pagina 11)

// Enunciado: Crea una función flecha que reciba como parámetro
// la altura de Snorlax (en decímetros) y la convierta a metros.
// Muestra el resultado en la consola.
const alturaMetros = altura => altura / 10
console.log(alturaMetros)

// 4. Arrow Functions y Callbacks para determinar si Snorlax es "alto" (Revisar Tema 3.5 Pagina 8 y 11)

// Enunciado: Crea una función flecha que reciba 2 parametros: la altura en decimetros y
// un callback que permita la conversion a metros.
// El objetivo es determinar si es "alto". Considera que Snorlax es alto si su altura es
// mayor o igual a 2 metros. La función debe retornar true si es alto
// y false en caso contrario. Muestra el resultado en la consola.
const esAlto = (x, callback) => {
  const alturaMetro = callback(x)
  if (alturaMetro >= 2) {
    console.log('Es alto')
  } else {
    console.log('No Es alto')
  }
}
esAlto(data.height, alturaMetros)

// 5. HOF para filtrar objetos con rareza alta (Revisar Tema 3.5 Pagina 9)

// Enunciado: Escribe una función llamada getMoves que reciba un callback.
// Esta función debe recorrer el arreglo moves del archivo JSON y obtener
// los nombres de los movimientos. Pasa estos nombres al callback,
// que debe imprimirlos en la consola. Como ejemplo, muestra los primeros
// cinco movimientos.

function getMoves (callback) {
  const moveNames = []

  data.moves.forEach(element => {
    moveNames.push(element.move.name)
  })

  callback(moveNames)
}

function printFirstFiveMoves (moves) {
  console.log(moves.slice(0, 5))
}

getMoves(printFirstFiveMoves)

// 6. HOF que retorna una función para filtrar habilidades por visibilidad (Revisar Tema 3.5 Pagina 9)

// Enunciado: Crea una función de orden superior llamada createAbilityFilter.
// Esta función debe recibir un parámetro isHidden (un booleano) y
// retornar una nueva función que, al ejecutarse,
// recorra el array de habilidades (abilities) del archivo JSON y
// devuelva un array con los nombres de las habilidades que cumplan con el
// criterio de visibilidad (is_hidden).

function createAbilityFilter (isHidden) {
  return function () {
    const filteredAbilities = []

    data.abilities.forEach(element => {
      if (element.is_hidden === isHidden) {
        filteredAbilities.push(element.ability.name)
      }
    })

    return filteredAbilities
  }
}

const hiddenAbilityFilter = createAbilityFilter(true)

const visibleAbilityFilter = createAbilityFilter(false)

console.log(hiddenAbilityFilter())

console.log(visibleAbilityFilter())
