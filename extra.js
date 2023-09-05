let numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

let [primerNum, , tercerNum, , quintoNum, ...otrosNum] = numeros
console.log(primerNum);
console.log(tercerNum);
console.log(quintoNum);
console.log(otrosNum);

let miMascota = {
    nombre: 'Tayron',
    tipoDeMascota: 'perro',
    color: 'Marron',
    raza: 'Callejera'
}
let {nombre, tipoDeMascota, color, raza} = miMascota

let mensaje = `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de
color: ${color} y su raza es: ${raza}.`
console.log(mensaje);