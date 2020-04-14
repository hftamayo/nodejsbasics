const collectRespuestas = require("./modulos/13ModuloPreguntas");

const preguntas = [
    "cual es tu nombre?",
    "donde vives?",
    "por que estas aprendiendo node.js?"
];

collectRespuestas(preguntas, respuestas => {
    console.log("Gracias por sus respuestas");
    console.log(respuestas);
    process.exit();
});