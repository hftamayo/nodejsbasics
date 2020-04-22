//rl.question es una funcion que recibe como parametro un query y devuelve un callback
const entradaDatos = require("readline");
const { EventEmitter} = require("events");

const rl = entradaDatos.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (preguntas, terminado) => {
    const respuestas = [];
    const [primeraPregunta] = preguntas;
    const emisor = new EventEmitter();

    const preguntaRespondida = respuesta => {
        emisor.emit("respuesta", respuesta);
        respuestas.push(respuesta);
        if(respuestas.length < preguntas.length) {
            rl.question(preguntas[respuestas.length], preguntaRespondida);
        }
        else{
            emisor.emit("completado", respuestas);
            terminado(respuestas);
        }
    };
    rl.question(primeraPregunta, preguntaRespondida);

    return emisor;
};