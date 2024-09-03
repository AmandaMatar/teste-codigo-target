/*
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores 
quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. 
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, 
qual interruptor controla cada lâmpada?  
*/

function identificarInterruptores () {
    const lampadas = {
        lamp1: 0, // Pode estar fria e apagada
        lamp2: 1, // Pode estar acesa
        lamp3: 2  // Pode estar quente e apagada
    }

    let resultado = {}

    for(const [lampada, estado] of Object.entries(lampadas)) {
        if (estado === 2) {
            resultado['Interruptor A'] = lampada;
        } else if (estado === 1) {
            resultado['Interruptor B'] = lampada;
        } else {
            resultado['Interruptor C'] = lampada;
        }
    }

console.log('Controle dos interruptores:', resultado);

}

identificarInterruptores();
