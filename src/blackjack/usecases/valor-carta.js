/**
 * Obtiene el valor de la carta  (2-10, J, Q, K, A)
 * @param {string} carta 
 * @returns {number} valor de la carta
 */
export const valorCarta = (carta) => {
    if(!carta) throw new Error("La carta es necesaria");
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};