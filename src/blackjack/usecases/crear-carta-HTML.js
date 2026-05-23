import {divCartasJugadores} from "./referencias-html.js";
/**
 * Añada carta al HTML
 * @param {string} carta 
 * @param {number} turno 
 */

export const crearCartaHTML = (carta, turno) => {
    const imgCarta = document.createElement("img");

    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
};