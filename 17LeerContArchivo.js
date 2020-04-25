const fs = require("fs");
//lectura en modo sincronico
const texto = fs.readFileSync("./leercontenido/apuntescloud", "UTF-8");
console.log(texto);

//lectura de un archivo binario
fs.readFile("./leercontenido/aws.png", (error, imagen) => {
    if(error){
        console.log(`Ocurrio un error:  ${error.message}`);
        process.exit();
    }
    console.log("Lectura de un archivo binario");
    console.log(imagen);

});