console.log("Five random two digit numbers are: ");

let num1= Math.floor(Math.random()*100);
console.log(num1);
let num2= Math.floor(Math.random()*100);
console.log(num2);
let num3= Math.floor(Math.random()*100);
console.log(num3);
let num4= Math.floor(Math.random()*100);
console.log(num4);
let num5= Math.floor(Math.random()*100);
console.log(num5);

let sum = num1 + num2 + num3 + num4 + num5;
console.log("Sum of five two digit random numbers is: "+ sum);

let average = sum/5;
console.log("Average of five two digit random numbers is: " + average);