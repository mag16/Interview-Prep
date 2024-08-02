// https://javascript.info/ifelse

let JavaScript = prompt("what is the official name of javascript?", "");

if (JavaScript == "ECMAScript"){
  alert("Right!");
} else {
  alert("You Don't know? ECMAScript@!!!");
}


let Number_Prompt = prompt("Choose a number", 0)

if (Number_Prompt > 0){
    alert(1)
} else if (Number_Prompt < 0){
    alert(-1)
} else {
    alert(0)
}

/*
 Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

*/

let result = (a + b < 4) ? "Below" : "Over";




/*
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

*/

let message = (login == "Employee") ? "Hello" :
                (login == "Director") ? "Greetings" : 
                (login == "") ? "No login" : "";

