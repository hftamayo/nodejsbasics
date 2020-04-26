const fs = require("fs");

//renombrar un archivo
fs.renameSync("./leercontenido/colors.md", "./leercontenido/selectcolores.md");
console.log("archivo renombrado");
//mover un archivo creando un directorio
fs.rename("./leercontenido/milu.md", "./onthefly/pasoscreararchivo.md", error => {
    if(error){
        throw error;
    }
    console.log("archivo renombrado y movido a nueva carpeta");
});
//borrar un archivo
setTimeout(() => {
    fs.unlinkSync("./leercontenido/coversheet2020.pdf");
    console.log("archivo eliminado");
}, 4000);