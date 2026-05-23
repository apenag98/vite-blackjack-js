import _ from "underscore";

/**
 * Crea un deck de cartas
 * @returns {array <string>} 
 */


export const crearDeck = () => {

    let deck = [];
    
    const tipos      = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(`${i}${tipo}`);
        }
    }
    for (let especial of especiales) {
        for (let tipo of tipos) {
            deck.push(`${especial}${tipo}`);
        }
    }
    return _.shuffle(deck);
};
