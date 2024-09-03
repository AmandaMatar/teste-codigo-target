/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula 
ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode
ser previamente definida no código;
*/

function contarLetraA(str) {
    const letras = str.toLowerCase().split('')
    const contador = letras.filter(letra => letra === 'a').length

    if(contador > 0){
        console.log(`A letra 'a' ocorre ${contador} vezes na string.`);
    } else {
        console.log(`A letra 'a' não foi encontrada na string.`);
    }
}

const texto = 'Arapuca'
const texto2 = 'Abelha'
const texto3 = 'Boi'
contarLetraA(texto)
contarLetraA(texto2)
contarLetraA(texto3)