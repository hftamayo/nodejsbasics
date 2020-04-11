const waitTime  = 7000;
console.log(`Estableciendo una pausa de  ${waitTime/1000} segundos`);
const timerFinished = () => {
    console.log("Finalizado");
}
setTimeout(timerFinished, waitTime);