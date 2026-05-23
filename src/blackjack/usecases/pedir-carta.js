/**
 * Retorna una carta del deck
 * @param {array<string>} deck 
 * @returns {string} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {
    if (deck.length === 0 || !deck) {
        throw new Error("No hay más cartas en el deck");
    }
    return deck.pop();
};