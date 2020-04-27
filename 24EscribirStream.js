const fs = require("fs");

const escribirStream = fs.createWriteStream("./leercontenido/escribir.txt", "UTF-8");

/* esribir lineas predefinidas
escribirStream.write("hello");
escribirStream.write(" world!");
*/
//escribir desde la consola
//TODO: hacer una rutina de salida y error
process.stdin.on("data", data => {
    escribirStream.write(data);
});


/*escribir el contenido de otro archivo
const leerStream = fs.ReadStream("./leercontenido/apuntescloud", "UTF-8"); 
leerStream.on("data", data => {
    escribirStream.write(data);
});
*/

//ejemplo mas simplificado para escribir desde la consola
//leerStream.pipe(escribirStream);