const fs = require("fs");
console.log("leyendo archivos...");
//lee el contenido de manera sincronica
const archivos = fs.readdirSync("./leercontenido");
console.log("lectura finalizada");
console.log(archivos);
//otra forma de leer el contenido de manera asincrona
console.log("leyendo archivos con la funcion readdir...");
fs.readdir("./leercontenido", (error, archivos) => {
    if(error){
        throw error;
    }
    console.log("lectura finalizada");
    console.log(archivos);
});