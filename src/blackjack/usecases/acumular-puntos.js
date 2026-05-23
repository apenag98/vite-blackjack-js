import { valorCarta } from "./index.js";
import {puntosHTML} from "./referencias-html.js"
/**
 * Acumula los puntos de cada jugador
 * @param {string} carta 
 * @param {number} turno 
 * @returns {number} PuntosJugador puntos acumulados del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugador) => {
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugador;

    return puntosJugador;
}
