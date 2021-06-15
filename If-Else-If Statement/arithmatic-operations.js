const readline = require("prompt-sync");
const prompt = readline();

let a = prompt("Enter a: ");
let b = prompt("Enter b: ");
let c = prompt("Enter c: ");

console.log(typeof(a));

let result = 0;

console.log("1. a+b*c");
console.log("2. c+a/b");
console.log("3. a%b+c");
console.log("4. a*b+c");
let choice = prompt("Enter your choice: ");

if(choice == 1)
	result = Number(a)+Number(b)*Number(c);
else if (choice == 2)
	result = Number(c)+Number(a)/Number(b);
else if(choice == 3)
	result = Number(a)%Number(b)+Number(c);
else if(choice == 4)
	result = Number(a)*Number(b)+Number(c);
else
	console.log("Invalid choice");

console.log("Result = " + result);