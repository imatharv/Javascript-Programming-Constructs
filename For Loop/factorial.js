const prompt = require("prompt-sync")();

let n = prompt("Enter number: ");
let factorial = 1;
for(let i=1; i<=n; i++){
    factorial = factorial*i;
}

console.log("Factorial of "+n+": "+factorial)