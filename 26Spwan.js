//ejecucion de procesos en hilos
const cp = require("child_process");

const cuestionarioApp = cp.spawn("node", ["13UsoModuloPreguntas.js"]);

//envio de repuestas a la App
cuestionarioApp.stdin.write("Herbert \n");
cuestionarioApp.stdin.write("San Salvador \n");
cuestionarioApp.stdin.write("Obtener nuevos ingresos \n");

cuestionarioApp.stdout.on("data", data => {
    console.log(`informacion desde la cuestionarioApp ${data}`);
});

cuestionarioApp.on("close", () => {
    console.log(`cuestionarioApp finalizada`);

});