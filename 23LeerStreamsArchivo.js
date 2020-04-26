const fs = require("fs");

const leerStream = fs.createReadStream("./leercontenido/apuntescloud", "UTF-8");
let contenidoArchivo = "";

console.log("lectura bit por bit del archivo: ");
leerStream.on("data", data => {
    console.log(`Lectura de ${data.length - 1} caracteres de texto dentro del archivo`);
    contenidoArchivo += data;
});

console.log("lectura total del archivo: ");
leerStream.once("data", data => {
    console.log(data);
});

leerStream.on("final", () => {
    console.log("finalizacion de la lectura del archivo");
    console.log(`En total se leyeron ${contenidoArchivo.length - 1} caracteres`);
});


//lectura de consola
console.log("escriba cuaqluier cosa: ");
process.stdin.on("data", data => {
    console.log(`Lectura de ${data.length - 1} caracteres de texto`);
});