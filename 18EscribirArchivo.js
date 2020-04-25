const fs =  require("fs");

const md = `
#Este es un nuevo archivo

Podemos escribir texto en un archivo usando las funciones:
*fs.readdir
*fs.readFile
*fs.writeFile

`;

fs.writeFile("./leercontenido/milu.md", md.trim(), error => {
    if(error){
        console.log(`Ocurrio un error:  ${error.message}`);
        process.exit();
    }
    console.log("Archivo guardado");
});