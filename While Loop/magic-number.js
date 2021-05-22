const prompt = require("prompt-sync")();

console.log("Think any number between 1 to 100");

let i = 1;
let start = 1;
let end = 100;
const Y = 'Y';
const G = 'G';
const N = 'N';
let mid;

while (i <= end) {
    mid = Math.floor((start+end)/2);
    let choice = prompt(mid+" is the number you thought? (Y/N): ");
    if(choice == Y){
        console.log("Magic Number is "+mid);
        break;
    } else if (choice == N) {
        let choice1 = prompt("Your number greater than or less than "+mid+"? Greater(G), Less(L) .. (G/L): ")
        if(choice1 == G){
            start = mid;
        } else{
            end = mid;
        }
    } 
    i++;
}