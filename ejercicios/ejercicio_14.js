const generarID = (function() {
    let contador = 0;
    return function() {
        contador++;
        return "id_" + contador;
    };
})();

console.log(generarID());
console.log(generarID());
console.log(generarID());
