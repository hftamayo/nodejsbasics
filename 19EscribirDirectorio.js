const fs =  require("fs");

if(fs.existsSync("nuevodir")){
    console.log("El directorio ya existe");
}
else{
    fs.mkdir("nuevodir", error => {
        if(error){
            console.log(`Ocurrio un error:  ${error.message}`);
            process.exit();
        }
        console.log("Directorio creado");
    });
}