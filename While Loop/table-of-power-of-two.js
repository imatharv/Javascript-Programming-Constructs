const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
let i = 1;
let res = 1;

console.log("Table of 2,");
while( i <= n) {
    res = res*2;
    console.log(res);
    if (res == 256) {
        break;
    }
    i++;
}