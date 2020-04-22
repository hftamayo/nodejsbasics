const eventos = require("events");
const emisor = new eventos.EventEmitter();

emisor.on("eventoPersonalizado", (mensaje, usuario) => {
    console.log(`${usuario}: ${mensaje}`);
});

process.stdin.on("data", data => {
    const entrada = data.toString().trim();
    if(entrada == "exit"){
        emisor.emit("eventoPersonalizado", "Goodbye", "process");
        process.exit();
    }
    emisor.emit("eventoPersonalizado", entrada, "terminal");
})