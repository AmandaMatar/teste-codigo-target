/*
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
*/

// A
function proximoImpar(ultimo) {
    return ultimo + 2
}

console.log(proximoImpar(7)); // Resposta 9

// B
function proximoPotenciadeDois(ultimo) {
    return ultimo * 2
}

console.log(proximoPotenciadeDois(64)); // Resposta 128

// C
function proximoQuadradoPerfeito(indice) {
    return indice * indice
}

console.log(proximoQuadradoPerfeito(7)); // Resposta 49

// D
function proximoQuadradoPar(indice) {
    return (indice * 2) * (indice * 2)
}

console.log(proximoQuadradoPar(10 / 2)); // Resposta 100

// E
function proximoFibonacci(a, b) {
    return a + b
}

let fib1 = 5
let fib2 = 8

console.log(proximoFibonacci(fib1, fib2)); // Resposta 13

// F
function proximoSequenciaComplexa(ultimo) {
    if(ultimo === 19) {
        return ultimo + 1   
    }
    return ultimo + 1
}
console.log(proximoSequenciaComplexa(19)); // Resposta 20
