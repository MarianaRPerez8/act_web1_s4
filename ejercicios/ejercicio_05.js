function contarVocales(cadena) {
    if (cadena.length === 0) return 0;
    const primera = cadena[0].toLowerCase();
    const esVocal = "aeiou".includes(primera) ? 1 : 0;
    return esVocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("Hola"));
console.log(contarVocales("Humanidad"));
