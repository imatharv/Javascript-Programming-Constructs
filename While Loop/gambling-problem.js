const win = 1;
const goal = 200;
const bet = 1;
let cash = 100;

while( cash < goal && cash > bet){
    let randomNum = Math.floor(Math.random()*10)%2;
    if(randomNum == win) {
        cash = cash+(bet*4);
    } else {
        cash = cash-(bet*4);
    }
}

if(cash == goal) {
    console.log("Player won!");
} else {
    console.log("Player loose!");
}