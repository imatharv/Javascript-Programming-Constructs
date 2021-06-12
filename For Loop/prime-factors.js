const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
console.log("Prime factors of " + n + " are,");

for(let i=2; i<=n; i++) {
    while(n%i == 0) {
        console.log(i);
        n = n/i;
    }
}
if(n>2) {
    console.log(n);
}