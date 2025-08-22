const contador = (function() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
})();

console.log(contador());
console.log(contador());
console.log(contador());
