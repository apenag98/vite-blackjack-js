import { crearDeck } from "./index.js";
import { btnNuevo, btnPedir, btnDetener, puntosHTML, divCartasJugadores } from "./referencias-html.js";

/**
 * Inicializa el juego
 * @param {array<string>} deck
 * @param {array<number>} puntosJugadores
 * @param {number} numJugadores 
 * @returns {array<number>} puntosJugadores
 */

export const inicializarJuego = (deck, puntosJugadores, numJugadores = 2) => {

    console.clear();

    btnNuevo.disabled = true;
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = "");

    deck = crearDeck();
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
    return [deck, puntosJugadores];
}