function operar(a, b, callback) {
    return callback(a, b);
}

console.log(operar(5, 3, (x, y) => x + y));
console.log(operar(5, 3, (x, y) => x * y));
