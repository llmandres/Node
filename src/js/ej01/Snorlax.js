// Importar el módulo readFileSync
import { readFileSync, stat } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('src/js/ej01/snorlax.json', 'utf8')

// TO-DO - Convertir JSON a Object
const data = JSON.parse(dataJson)
// console.log(data)

// 1. Crea un nuevo objeto, denominado info, que tenga las claves abilities, game_indices,
// held_items, moves y stats. Asigna todos un array vacio
console.log('EJ 1')
const info = {
  abilities: [],
  game_indices: [],
  held_items: [],
  moves: [],
  stats: [],
}

// 2. Del JSON, imprime por pantalla las mismas claves que has utilizado
// al crear tu objeto info
console.log('EJ 2')

// console.log(data.abilities, data.game_indices, data.held_items, data.moves, data.stats)

// 3. Agrega al array vacio de abilities el nombre de las habilidades contenidas en el JSON.
// 3.1. Accede manualmente a los 3 nombres y haz un push al array vacio
info.abilities.push(data.abilities[0].ability.name) // Con esto metemos a abilities el name del otro abilities.
info.abilities.push(data.abilities[1].ability.name)
info.abilities.push(data.abilities[2].ability.name)

// 3.2. Modifica el acceso manual para que ahora utilices un for para hacer push a los 3 nombres
console.log('EJ 3')
info.abilities = []
for (let i = 0; i < 3; i++) {
  info.abilities.push(data.abilities[i].ability.name)
}
console.log(info)

// 4. Modifica el array abilities del objeto info para que ahora contenga
// tres subarrays, formados por el nombre y la URL
// Borra la propiedad abilties y vuelvela a crear dinamicamente
console.log('EJ 4')

// Esto imprime los valores que tiene ability en cada objeto que esta dentro de abilities
// console.log(Object.values(data.abilities[0].ability))
// console.log(Object.values(data.abilities[1].ability))
// console.log(Object.values(data.abilities[2].ability))
const abilities = []
abilities.push(Object.values(data.abilities[0].ability))
abilities.push(Object.values(data.abilities[1].ability))
abilities.push(Object.values(data.abilities[2].ability))
// console.log(abilities)
info.abilities = abilities // Ahora tiene varios array dentro del array ability , y dentro de estos array tiene el nombre y la url
console.log(info)

// 5. Usa el operado spread (...) para agregar al array vacio de game_indices de info
// los datos contenidos en game_indices del json
console.log('EJ 5')
info.game_indices = [...data.game_indices]

// 6. Modifica con un bucle cada una de las posiciones del array game_indices de info
// para que solo contena un objeto formado ppr game_index y name
console.log('EJ 6')
for (let i = 0; i < info.game_indices.length; i++) {
  info.game_indices[i] = { game_index: info.game_indices[i].game_index, name: info.game_indices[i].version.name }
}
console.log(info)

// 7. Dentro del JSON, accede a los nombres de los items de held_items.
// Crea un array con solo los nombres y unelos para crear una string separado por <->
// Guardalo dentro del info -> held_items, sobreescribiendo el array vacio
console.log('EJ 7')

const itemArray = []
// console.log(data.held_items[0].item.name)

itemArray.push(data.held_items[0].item.name)
itemArray.push(data.held_items[1].item.name)
console.log(itemArray)

const itemsUnidos = itemArray.join('<->') // De esta manera los unimos el array en cadena, y usamos de separador lo que pongamos entre comillas
console.log(itemsUnidos)

// 8. De la clave moves del JSON, crea un array que contenga todos los nombres
// de los movimientos. Tras ello ordenalos alfabeticamente y ingresa en el array vacio
// de moves dentro los primeros 10 movimientos
console.log('EJ 8')
const moveNames = []
// moveNames.push(data.moves[0].move.name)
// moveNames.push(data.moves[1].move.name)
for (let i = 0; i < data.moves.length; i++) {
  moveNames.push(data.moves[i].move.name)
}
moveNames.sort() // Esto sirve para ordenar alfabeticamente
info.moves = [...moveNames.slice(0, 10)] // Con slice cortamos para enviar de la primera posicion hasta la segunda posicion mandada
// console.log(moveNames)
console.log(info.moves)

// 9. Crea un objeto compuesto de las claves hp, attack, defense,
// specialAttack, specialDefense y speed. Ingresa los valores que se indican en JSON
// referente a estos nombres. Tras ello ingresalo en info -> stats sustituyendo al array
// vacio
console.log('EJ 9')

console.log(data.stats[0].base_stat)

const stats = {
  hp: data.stats[0].base_stat, // Accedemos a data stats para rellenar hp :shrugh:
  attack: data.stats[1].base_stat,
  defense: data.stats[2].base_stat,
  specialAttack: data.stats[3].base_stat,
  specialDefense: data.stats[4].base_stat,
  speed: data.stats[5].base_stat
}

console.log(stats)

info.stats = stats

// 10. Dentro de stats convierte el objeto en un array,
// aplanalo y elimina los strings El resultado te tiene que quedar  // Un arrays de array a uno unico
// los valores numericos de las stats
console.log('EJ 10')

console.log(Object.entries(info.stats))
// Aplanar significa cambiar un array bidimensional a un unico array, es decir, quitar los []
// Con flat
console.log(Object.entries(info.stats).flat()) // Ahora esta aplanado
info.stats = Object.entries(info.stats).flat()
const statNumerica = []

for (let i = 0; i < info.stats.length; i++) {
  if (typeof info.stats[i] !== 'string') {
    statNumerica.push(info.stats[i])
  }
}
console.log(statNumerica)
info.stats = statNumerica

console.log(info)
