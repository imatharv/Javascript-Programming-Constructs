const readline = require("prompt-sync");
const prompt = readline();

let date = prompt("Enter a date: ");
let month = prompt("Enter a month: ");

let combination = ((parseInt(month)*100)+ parseInt(date));
console.log("Is date between march'20 and june'20? ");
if((combination > 320) && (combination < 620)){
    console.log("True");
}else{
    console.log("False");
}