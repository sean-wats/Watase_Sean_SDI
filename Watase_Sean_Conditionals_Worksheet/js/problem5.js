//Problem 5
//Tire Pressure

//Front tires must have same tire pressure
//Back tires must have the same tire pressure
//Front set and back set can have different tire pressures

//Gathering the tire pressure of the four tires
var frontLeft = prompt("Front left tire pressure:");
var frontRight = prompt("Front right tire pressure:");

var backLeft = prompt("Back left tire pressure:");
var backRight = prompt("Back right tire pressure");

//Creating one conditional to see if car will pass test
if (frontLeft === frontRight && backLeft === backRight) {
    alert("Car passed tire test.");
}
else {
    alert("Car did not pass tire test. Must get tire checked.");
}