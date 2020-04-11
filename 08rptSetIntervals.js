const waitTime  = 7000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime+= waitInterval;
    const p = Math.floor((currentTime/waitTime * 100));
    //console.log(`esperando ${currentTime / 1000} segundos`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`esperando...${p}%`);
};

console.log(`Estableciendo una pausa de  ${waitTime/1000} segundos`);
const timerFinished = () => {
    clearInterval(interval);
//    process.stdout.clearLine();
//    process.stdout.cursorTo(0);    
process.stdout.write("\n");
    console.log("Finalizado");
};
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);