let num1=Math.floor(Math.random()*(999-100+1)+100);
let num2=Math.floor(Math.random()*(999-100+1)+100);
let num3=Math.floor(Math.random()*(999-100+1)+100);
let num4=Math.floor(Math.random()*(999-100+1)+100);

console.log("first number = " + num1);
console.log("second number = " + num2);
console.log("third number = " + num3);
console.log("fourth number = " + num4);

let max=0;
let min=0;

let max1, max2, min1, min2;

if (num1 > num2) {
    max1 = num1;
    min1 = num2;
} else {
    max1 = num2;
    min1 = num1;
}

if (num3 > num4) {
    max2 = num3;
    min2 = num4;
} else {
    max2 = num4;
    min2 = num3;
}

//max number
if (max1 > max2)
    max = max1;
else
    max = max2;
console.log("Maximum number: " + max);

//minimum number
if (min1 < min2)
    min = min1;
else
    min = min2;
console.log("Minimum number: " + min);