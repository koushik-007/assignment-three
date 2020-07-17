//the function convert feet to mile 
function feetToMile(feet){
    if(feet<0){
        let message = "distance cannot be nagative, enter positive value and try again";
        return message;
    }
    else{
        let mile = feet/3333;
        mile = mile.toFixed(3);
        return mile;
    }
}
let feet = -5555;
let mile = feetToMile(feet);
console.log(feet ,' feet is = ', mile ,'mile');



// the function calculate total cft wood 
function woodCalculator(chair, table, bed){
    if (chair<0 || table<0 || bed<0) {
        let message = "Number of chair, table and bed can not be negative, enter positive value and try again";
        return message;
    } else {
        let totalCftWood = chair*1 + table*3 + bed*5;
        return totalCftWood;
    }
   
}
let chair = -5;
let table = 6;
let bed = 5;
let totalCftWood = woodCalculator(chair,table,bed)
console.log('The total amount of cubic feet wood is:',totalCftWood);



// the function calculate total amount of bricks 
function brickCalculator(NumOfFloor){
    if(NumOfFloor<=10 && NumOfFloor>0){
        let totalBrick = 15000*NumOfFloor;
        return totalBrick;
    }
    else if(NumOfFloor<=20 && NumOfFloor>10){
        let totalBrick = 150000 + (NumOfFloor-10)*12*1000;
        return totalBrick;
    }
    else if(NumOfFloor>20 && NumOfFloor>20){
        let totalBrick = 270000 +(NumOfFloor-20)*10*1000;
        return totalBrick;
    }
    else if(NumOfFloor<0){
        let message = "Number of floor can not be negative, enter positive value and try again";
        return message;
    }
}
let NumOfFloor = -11;
console.log('Number of total brick is:', brickCalculator(NumOfFloor));


// this is the function to find smallest string
function tinyFriend(friendNames){
    if(friendNames.length<1){
        let message = "Your submitted array is empty";
        return message;
    }
    else{
        let smallestWord = friendNames.sort();
        smallestWord = smallestWord[0];
        return smallestWord;
    }
}
let friendNames = [];
console.log('The smallest word in the array is:',tinyFriend(friendNames));