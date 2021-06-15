const readline = require("prompt-sync");
const prompt = readline();

let num = prompt("Enter a single digit number: ");

if(num==1)
console.log("One");
else if(num==2)
console.log("Two");
else if(num==3)
console.log("Three");
else if(num==4)
console.log("four");
else if(num==5)
console.log("Five");
else if(num==6)
console.log("Six");
else if(num==7)
console.log("Seven");
else if(num==8)
console.log("Eight");
else if(num==9)
console.log("Nine");
else
console.log("Invalid number");