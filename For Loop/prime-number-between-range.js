const prompt = require("prompt-sync")();

let start = prompt("Enter starting number: ");
let end = prompt("Enter ending number: ");
let i;
let n;

console.log("Prime numbers between "+start+" and "+end+" are,");

for(n=start; n<=end; n++) {
    for(i=2; i<n; i++){
        if(n%i == 0){
            break;
        }
    }
    if(i == n) {
        console.log(n);   
    } 
}