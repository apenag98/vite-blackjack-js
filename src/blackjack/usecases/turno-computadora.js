import { pedirCarta, acumularPuntos, crearCartaHTML, determinarGanador } from "./index.js";
/**
 * Realiza el turno de la computadora
 * @param {number} puntosMinimos 
 * @param {number} turno 
 * @param {array<string} deck 
 */

export const turnoComputadora = (puntosMinimos, turno, deck) => {
    let puntosComputadora = 0; 
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, turno, puntosComputadora);
        crearCartaHTML(carta, turno);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    determinarGanador(puntosComputadora, puntosMinimos);

    const btnNuevo = document.querySelector("#btn-nuevo-juego");
    btnNuevo.disabled = false;
};  
