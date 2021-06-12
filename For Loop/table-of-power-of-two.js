const prompt = require("prompt-sync")();

let n = prompt("Enter a number upto which you want to print the table: ");
let table;

console.log("Table of 2,");

for(let i=1; i<=n; i++){
    table = 2*i;
    console.log(table);
}