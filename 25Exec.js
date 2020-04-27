const cp = require("child_process");
//buscar comando para abrir terminal en linux
//cp.exec("open -a Terminal .");
cp.exec("ls", (error, datos) => {
    if(error){
        throw error;
    }
    console.log(datos);
});
