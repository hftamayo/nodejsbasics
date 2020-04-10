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