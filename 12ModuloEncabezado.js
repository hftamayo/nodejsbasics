let contador = 0;
const incrementar = () => ++contador;
const decrementar = () => --contador;

const getContador = () => contador;

module.exports = {
    incrementar,
    decrementar,
    getContador
};