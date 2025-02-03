const variable1 = 'Hola'
const variable2 = true
const variable3 = 20
const variable4 = 20.5
let variable5
const variable6 = null
const variable7 = Symbol('clave')

// Con typeof hacemos que nos devuelva por pantalla que tipo de variable es

// Tambien podemos "castear" otras variables como Number(variable1) para hacer que variable1 sea un Numero

// En JavaScript podemos separar variables con espacios con comas para que se impriman por pantalla con espacios
// Este método tambien puede ser realizado con + " " +

// También se podria hacer de la siguiente forma : console.log(`Hola a todos ${variable5} que tal estais ${variable6}`)
console.log(Number(variable1))
console.log(typeof variable2)
console.log(variable3 + ' ' + variable4)
console.log(variable4, variable3)
console.log(`Hola a todos ${variable5} que tal estais ${variable6}`)
console.log(variable6)
console.log(variable7)

const var1 = true
const var2 = 'Hola'
console.log('--------------------')
console.log(Number(var1), Number(var2))

console.log('--------------------')

// Dobles y triples ==

console.log(6 != '6') // Aqui compara el valor
console.log(6 !== '6') // Aqui compara el tipo

console.log(5 === '5') // Compara el tipo
console.log(5 == '5') // Compara el valor

console.log('--------------------')
// Esto siempre sera 1true, es decir, siempre que haya un + y un String, va a ser concatenacion
console.log('1' + true)

console.log('--------------------')
// Si le añadimos un + antes del String, este se cambia a ser un numero y dara number
const conv = +'100'

console.log(typeof conv)

// SI hay un mas y dentro de los operandos hay String lo convierte a String
// SI hay un mas y el + intenta realizar una operacion matematica
// Si hay un mas y es unario, se convierte a numero (CUALQUIER COSA)

// Unario significa +'100' por ejemplo
console.log('--------------------')

// Con otros simbolos todo es numero
// Ahora todo es matematico
console.log(true - '20') // 1 - 20
console.log(true * false)// 1 * 0
console.log(true / false)// Infinity
console.log(false / false)// NaN

console.log('--------------------')
// Como este simbolo no es '+' , simplemente lo convierte a numero
// y realiza la operacion matematica
console.log('10' > 5) // true
console.log('--------------------')

// Hace la operacion y cuando llega a el string CONCATENA
console.log(10 + 4 + 'two') // 14two
console.log('--------------------')

console.log('true' == true) // NaN == 1 / False || el NaN solo lo hace en ==

console.log('--------------------')

console.log('--------------------')
// Truthly y Falsy
// Se considera false
// - False
// - 0
// - Cadenas vacias
// - Valores especiales como null, undefined y NaN

console.log(10 * '') // AHora aqui seria 10 * 0 // 0

console.log('--------------------')

// Operador ternario
const edad = 18
const msg = edad >= 18 ? 'Mayor' : 'Menor'
console.log(msg)

// Funciones
// No hay valores de retorno al iniciar ni tampoco y se pueden poner valores por defecto
function sumar (a = 2, b = 3) { //
  return a + b
}
const sumarfunc = sumar()
console.log(sumarfunc)

// Ejercicio aparte
const vari1 = 'two'
const vari2 = true
if (vari1 > vari2) { // Esto seria NaN > 1, no los podria comparar,por lo tanto entraria por false directamente
  console.log('No se ejecuta')
} else {
  console.log('Se ejecuta')
}

// TEMA 2
console.log(Number.MIN_VALUE, Number.MAX_VALUE)

const var12 = '123'
if (!Number.isNaN(var12)) {
  console.log(typeof +var12)
}

const js1 = 'Aprendiendo JavaScript'
console.log(js1.length)
console.log(js1.toLowerCase().includes('java'.toLowerCase))
console.log(js1.toUpperCase)
console.log(js1.replace('javascript ', 'a'))
console.log(js1.slice(9)) // Corta los 10 primeros caracteres
console.log(js1.repeat(10))
console.log('-------------------------')

// MATH

console.log(Math.ceil(Math.random() * 10))
console.log(2 ** 3)// Elevado (2 elevado 3)
console.log(Math.max(10, 20, 30)) // Te devuelve el maximo
console.log(Math.min(10, 20, 30)) // Te devuelve el minimo

console.log('-------------------------')

// DATE

console.log(new Date()) // Formato fecha
console.log(Date.now()) // Formato en miliseconds

// Year / Month/ Day / Hour / Minutes / Seconds / Miliseconds
console.log(new Date(2024, 11, 31, 14, 30, 0, 0)) // Los meses empiezan a 0

const fecha = new Date(2025, 0, 12)
console.log(fecha.getDay()) // Devuelve el dia de la semana ( 0 es domingo)

const fecha2 = Date.UTC(2024)
console.log(fecha2)

const fecha3 = new Date()
console.log(fecha3.toDateString()) // El formato de fecha es mas en String
console.log(fecha3.toLocaleString('en-ES')) // El formato de fecha en local o en-ES es decir España "13/1/2025"
console.log(fecha3.toLocaleString('en-US')) // El formato de fecha en Ingles "13/1/2025"

console.log('-------------------------')
const fecha4 = new Date(2024, 0, 10, 14, 30, 0)
const fecha5 = new Date(2024, 1, 10, 14, 30, 0)

const diferencia = fecha5 - fecha4

console.log(diferencia / (1000 * 60 * 60 * 24))
