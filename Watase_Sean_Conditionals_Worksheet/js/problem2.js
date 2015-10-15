//Problem 2
//Last chance for gas

//Determine if the user has enough gas to get them home
//They are passing the last gas station for 200miles

//Must get users gas efficiency, gauge reading, and cars tank capacity
var gasEfficiencyInput = prompt("What is your cars MPG(Miles Per Gallon)?");
var gaugeReadingInput = prompt("At what percent is your gas tank gauge reading?");
var carTankCapacityInput = prompt("How much gallons of gas can your tank hold?");

//Converting Stings to Numbers
var gasEfficiency = Number(gasEfficiencyInput);
var gaugeReading = Number(gaugeReadingInput);
var carTankCapacity = Number(carTankCapacityInput);

//Calculating how much gas they have left
var remainingGas = (gaugeReading / 100) * carTankCapacity;
//Calculating how much miles can be traveled with remaining gas
var travelDistanceWithRemainingGas = gasEfficiency * remainingGas;
console.log(travelDistanceWithRemainingGas);

//Finding if remainingGas is greater than 200
if (travelDistanceWithRemainingGas >= 200) {
    alert("You have enough gas to reach the next gas station")
}
else {
    alert("Fill up gas now!");
}