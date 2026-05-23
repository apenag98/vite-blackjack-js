/**
 * Determina el ganador de la partida
 * @param {number} puntosComputadora 
 * @param {number} puntosJugador 
 */

export const determinarGanador = (puntosComputadora, puntosJugador) => { 

    setTimeout(() => {
    if (puntosComputadora === puntosJugador) {
        alert("Nadie gana :(");
    } else if (puntosJugador > 21) {
        alert("Computadora gana");
    } else if (puntosComputadora > 21) {
        alert("Jugador gana");
    }
    else {
        alert("Computadora gana");
    }
        
    }, 200);
    
}