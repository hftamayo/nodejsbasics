const fs = require("fs");

//renombrar un directorio
fs.renameSync("./leercontenido", "./onthefly");

//eliminar todos los archivos dentro de un directorio
fs.readdirSync("./onthefly").forEach(nombreArchivo => {
    fs.unlinkSync(`./onthefly/${nombreArchivo}`);
});

//eliminar un directorio siempre y cuando este vacio
fs.rmdir("./onthefly", error => {
    if(error){
        throw error;
    }

    console.log("directorio eliminado");
});