const collectRespuestas = require("./modulos/15ModuloPrgEvents");

const preguntas = [
    "cual es tu nombre?",
    "donde vives?",
    "por que estas aprendiendo node.js?"
];
/* esta funcion se paso al segundo respuestaEventos para mejorar visualizacion de datos
const respuestaEventos = collectRespuestas(preguntas, respuestas => {
    console.log("Gracias por sus respuestas");
    console.log(respuestas);
    process.exit();
});
*/
const respuestaEventos = collectRespuestas(preguntas);

respuestaEventos.on("respuesta", respuesta => console.log(`pregunta respondida: ${respuesta}`));

respuestaEventos.on("completado", respuestas => {
    console.log("Gracias por sus respuestas");
    console.log(respuestas);

});

respuestaEventos.on("completado", ()=> process.exit());