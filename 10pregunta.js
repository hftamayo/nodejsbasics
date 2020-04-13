const teclado = require("readline");

const rl = teclado.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("que tanto te agrada Node JS? ", respuesta => {
    console.log(`Tu respuesta es ${respuesta}`);
});