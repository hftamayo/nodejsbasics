
const [, , nombres, apellidos] = process.argv;
console.log(`Mi nombre es ${nombres} ${apellidos}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const saludo = grab("--saludo");
const usuario = grab("--usuario");
