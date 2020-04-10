process.stdout.write("Hello");
process.stdout.write(" World \n\n");
const questions = [
    "what is your name?",
    "what is your age?",
    "what is your fav programming language?"
];

const ask=(i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length ){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

process.on('exit', () => {
   const [name, age, prglang] = answers;
   console.log(`
   thank you for your answers.
   Go ${prglang} ${name} and ${age} 
   `);  
});

/* codigo para verificar captura de datos
process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    process.exit();

});
*/