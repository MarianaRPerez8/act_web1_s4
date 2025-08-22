const saludar = function(nombre = "Invitado") {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Mariana"));
console.log(saludar());
