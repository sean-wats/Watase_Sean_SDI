//Conditionals Worksheet

//Problem 1 - Temperature converter
//Converts temperature depending on the temperature user puts in

//Getting user input on what temperature they want to convert
//User will input fahrenheit of celsius temperature
var userTempertureString = prompt("What is the temperature you want to convert? \n(Enter digits only. Ex: If the temperature is 32F. Only enter 32.)");

var temperatureType = prompt("Next, enter F for fahrenheit ir C for Celsius.");

//Converting userTemperatureString to a Number from String
var userTemperatureNumber = Number(userTempertureString);

//Checking if user input is valid for temperature type
if (temperatureType === "F" || temperatureType === "C") {


}
else {
    alert("The information you have given us is not valid.");
}

