// Deep JS Foundations - FE Masters

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question) // ---> closure
    }, 100);
}

ask("What is closure?")


for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`);
    }, i * 1000);
}

// i: 1
// i: 2
// i: 3 