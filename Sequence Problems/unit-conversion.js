//inches to feet conversion 
console.log("1 feet = 12 inches");
feet = 42/12;
console.log("42 inches in feets is " + feet + " feets");

//rectangular plot 
let area= 60 * 40;
console.log("Area of plot (60 x 40 feets) is " + area + " square feets");
let lengthInMeters = 60*0.305;
let widthInMeter = 40*0.305;
let area1 = lengthInMeters * widthInMeter;
console.log("Area of plot (" + lengthInMeters + " x " + widthInMeter + "meters) is " + area1 +" square meters");

//area of 25 plot in acres
let areaInAcre = (lengthInMeters*widthInMeter)*0.000247;
let areaOfTotalPlots = areaInAcre*25;
console.log("Area of such 25 plots is " + areaOfTotalPlots + " acres");