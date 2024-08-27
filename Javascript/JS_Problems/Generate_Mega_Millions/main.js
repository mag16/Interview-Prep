
//MegaMillions lets GO!!!!

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];
while (numbers.length < 5) {
    let num = getRandomNumber(1, 70);
    if (!numbers.includes(num)) {
        numbers.push(num);
    }
}

let megaBall = getRandomNumber(1, 25);

console.log("Your numbers are:", numbers.sort((a, b) => a - b), "and Mega Ball:", megaBall);
