const sumarArreglo = (numeros) => {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(sumarArreglo([1, 2, 3, 4, 5]));
