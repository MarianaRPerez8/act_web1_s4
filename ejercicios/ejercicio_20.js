const calcularPromedio = (arreglo) => arreglo.reduce((a, b) => a + b, 0) / arreglo.length;

console.log(calcularPromedio([10, 20, 30, 40]));
console.log(calcularPromedio([5, 15, 25]));
