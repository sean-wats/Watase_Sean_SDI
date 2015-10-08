//Expression Assignment
//Sean Watase
//October 7,2015

//Finding the average of 3 numbers

//Creating an array for the 3 numbers
var numberArray = [];

//User input for 3 numbers
numberArray[0] = prompt("We will be finding the sum of 3 numbers. \nWhat is your first number?");

numberArray[1] = prompt("What is your second number?");

numberArray[2] = prompt("What is your third number?");

console.log(numberArray);

//Assigning array values to variable for easy use
var num1 = Number(numberArray[0]);
var num2 = Number(numberArray[1]);
var num3 = Number(numberArray[2]);

//Finding the average of the 3 numbers
var average = (num1 + num2 + num3) / 3;

//Outputting the average
var finalResult = "The average of " + num1 + ", " + num2 + ", and " + num3 + " is " + average + ".";

console.log(finalResult);
alert(finalResult);