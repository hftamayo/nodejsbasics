const eventos = require("events");
const emisor = new eventos.EventEmitter();

emisor.on("eventoPersonalizado", (mensaje, usuario) => {
    console.log(`${usuario}: ${mensaje}`);
});

emisor.emit("eventoPersonalizado", "Hola Mundo", "Computadora");
emisor.emit("eventoPersonalizado", "como estas?", "Herbert");
