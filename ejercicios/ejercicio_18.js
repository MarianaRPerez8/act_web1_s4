function validarCorreo(correo) {
    return correo.includes("@") && correo.endsWith(".com");
}

console.log(validarCorreo("usuario@gmail.com"));
console.log(validarCorreo("usuario@dominio"));
