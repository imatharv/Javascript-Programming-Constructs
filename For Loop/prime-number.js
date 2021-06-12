const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
let i;

for(i=2; i<n; i++) {
    if(n%i == 0) {
        console.log("Not a prime number");
        break;
    }
}

if(i==n) {
    console.log("Prime number");
}