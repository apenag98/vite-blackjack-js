import _ from "underscore";
import {inicializarJuego, pedirCarta, acumularPuntos, crearCartaHTML, turnoComputadora} from "./usecases/";
import {btnNuevo, btnPedir, btnDetener} from "./usecases/referencias-HTML";

let deck = [];
let puntosJugadores = [];

btnNuevo.addEventListener("click", () => {
    [deck, puntosJugadores] = inicializarJuego(deck, puntosJugadores);
});

btnPedir.addEventListener("click", () => {
    
    const carta = pedirCarta(deck);
    puntosJugadores[0] = acumularPuntos(carta, 0, puntosJugadores[0]);
    crearCartaHTML(carta, 0);
    if (puntosJugadores[0] > 21 || puntosJugadores[0] === 21) {            
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], 1, deck);
    }
});

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], 1, deck);
});




