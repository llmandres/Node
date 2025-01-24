// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('src/js/ej02/snorlax (1).json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.

console.log('Ej 1')
for (const clave in data) {
  console.log(clave)
  console.log(typeof clave)
}
console.log('-------------------')
for (const clave of data.game_indices) {
  console.log(clave.version.name)
}

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)
console.log(data.abilities.map((elem) => 'Ability: ' + elem.ability.name))

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)

// console.log(data.moves.filter((elem) => elem.version_group_details))

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
const trueAbilities = (data.abilities.find((elem) => elem.is_hidden === true))
if (trueAbilities) {
  console.log(trueAbilities.ability.name)
} else {
  console.log('No hay habilidades ocultas')
}

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)

// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )
