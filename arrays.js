var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

console.log(listaDeCompras.length)
var elementosDelArray = listaDeCompras[1];
console.log(elementosDelArray)

//Metodos

var colores = ['amarillo', 'azul'];

//agregar un elemento al array "phus"
colores.push('rojo')
console.log(colores)

//agregar un elemento al principio del array "unshift"
colores.unshift('verde')
console.log(colores)

//para eliminar el ultimo elemento del array "pop"
colores.pop()
console.log(colores)

//para eliminar el primer elemento del array "shift"
colores.shift()
console.log(colores)

//Metodo "includes" es un metodo que verifica si el elemento se encuentra en el array
var pintores = ['Picaso', 'Velazquez', 'Van Gogh', 'Dali']
var includesDali = pintores.includes('Dali')
console.log(includesDali)

//Metodo "every" es un metodo que verifica si un numero es mayor a todos los que estan en el array
var numero = [1, 6, 8, 9]
var cumplenCondicion = numero.every((num) => {
    return num > 5;
})
console.log(cumplenCondicion)

//Metodo "split" permite convertir String en un arreglos 
var palabra = 'Henri'
var palabraSeparar = palabra.split('')
console.log(palabraSeparar) 
palabraSeparar.pop()
palabraSeparar.push('y')
console.log(palabraSeparar)

//Metodo "join" permite convertir un arreglo en un String
var palabraArreglo = palabraSeparar.join('')
console.log(palabraArreglo)

//Metodo "forEach" nos permite recorrer el array
var numeros = [1, 2, 3, 4, 5];
numeros.forEach((num) => {
    console.log(num)
})
console.log("------------------")
numeros.forEach((num) => {
    if (num === 3){
        console.log(num)
    }
})

//Metodo "map" nos permite hacer cambio al array
var masUno = numeros.map((num) => {
    return num + 1;
})
console.log(masUno)


//bucle for 

function encontrarLetraP(string) {
    var letra = string.split('');

    for (let i = 0; i < letra.length; i++){
        if (letra[i] === 'p'){
            console.log('Si contiene a P')
        }
    }
}
encontrarLetraP('JavaScript');
encontrarLetraP('Henry');

//bucle while

var arr = []

while (arr.length < 5) {
    arr.push('BOOM');
}
console.log(arr)