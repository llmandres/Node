// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('src/js/ej01/snorlax.json', 'utf8')

// TO-DO - Convertir JSON a Object
const data = JSON.parse(dataJson)
// console.log(data)

// 1. Crea un nuevo objeto, denominado info, que tenga las claves abilities, game_indices,
// held_items, moves y stats. Asigna todos un array vacio
const info = {
  abilities: [],
  game_indices: [],
  held_items: [],
  moves: [],
  stats: [],
}

// 2. Del JSON, imprime por pantalla las mismas claves que has utilizado
// al crear tu objeto info

// console.log(data.abilities, data.game_indices, data.held_items, data.moves, data.stats)

// 3. Agrega al array vacio de abilities el nombre de las habilidades contenidas en el JSON.
// 3.1. Accede manualmente a los 3 nombres y haz un push al array vacio
info.abilities.push(data.abilities[0].ability.name) // Con esto metemos a abilities el name del otro abilities.
info.abilities.push(data.abilities[1].ability.name)
info.abilities.push(data.abilities[2].ability.name)

// 3.2. Modifica el acceso manual para que ahora utilices un for para hacer push a los 3 nombres
info.abilities = []
for (let i = 0; i < 3; i++) {
  info.abilities.push(data.abilities[i].ability.name)
}
console.log(info)

// 4. Modifica el array abilities del objeto info para que ahora contenga
// tres subarrays, formados por el nombre y la URL
// Borra la propiedad abilties y vuelvela a crear dinamicamente

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

// 6. Modifica con un bucle cada una de las posiciones del array game_indices de info
// para que solo contena un objeto formado ppr game_index y name

// 7. Dentro del JSON, accede a los nombres de los items de held_items.
// Crea un array con solo los nombres y unelos para crear una string separado por <->
// Guardalo dentro del info -> held_items, sobreescribiendo el array vacio

// 8. De la clave moves del JSON, crea un array que contenga todos los nombres
// de los movimientos. Tras ello ordenalos alfabeticamente y ingresa en el array vacio
// de moves dentro los primeros 10 movimientos

// 9. Crea un objeto compuesto de las claves hp, attack, defense,
// specialAttack, specialDefense y speed. Ingresa los valores que se indican en JSON
// referente a estos nombres. Tras ello ingresalo en info -> stats sustituyendo al array
// vacio

// 10. Dentro de stats convierte el objeto en un array,
// aplanalo y elimina los strings El resultado te tiene que quedar  // Un arrays de array a uno unico
// los valores numericos de las stats
