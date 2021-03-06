//rl.question es una funcion que recibe como parametro un query y devuelve un callback
const entradaDatos = require("readline");
const rl = entradaDatos.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntas = [
    "cual es tu nombre?",
    "donde vives?",
    "por que estas aprendiendo node.js?"
];

const collectRespuestas = (preguntas, terminado) => {
    const respuestas = [];
    const [primeraPregunta] = preguntas;
    const preguntaRespondida = respuesta => {
        respuestas.push(respuesta);
        if(respuestas.length < preguntas.length) {
            rl.question(preguntas[respuestas.length], preguntaRespondida);
        }
        else{
            terminado(respuestas);
        }
    };
    rl.question(primeraPregunta, preguntaRespondida);
};

collectRespuestas(preguntas, respuestas => {
    console.log("Gracias por sus respuestas");
    console.log(respuestas);
    process.exit();
});