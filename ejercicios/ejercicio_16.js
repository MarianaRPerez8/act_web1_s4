const sumar = (...numeros) => numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(10, 20, 30));
