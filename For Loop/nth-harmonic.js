const prompt = require("prompt-sync")();

let n = prompt("Enter number: ");

let sum = 0;
for(let i=1; i<=n; i++) {
    sum=sum+(1/i);
}
console.log("Harmonic number : "+sum);