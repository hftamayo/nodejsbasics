const waitTime  = 7000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime+= waitInterval;
    console.log(`esperando ${currentTime / 1000} segundos`);
};

console.log(`Estableciendo una pausa de  ${waitTime/1000} segundos`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("Finalizado");
};
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);