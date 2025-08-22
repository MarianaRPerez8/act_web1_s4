function multiplicarArreglo(arreglo) {
    return arreglo.reduce((acumulador, num) => acumulador * num, 1);
}

console.log(multiplicarArreglo([2, 3, 4]));
