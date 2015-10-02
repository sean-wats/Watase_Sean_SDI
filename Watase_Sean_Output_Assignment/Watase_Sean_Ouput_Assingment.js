/**
 * Created by seanwatase on 10/1/15.
 */

// Sean Watase
// SDI 1510
// Output Assignment

// Assigning a String variable
var itemName = "Water Bottle";

var itemDescription = "This is a insulated water bottle to keep your liquid cold/hot for long period of time.";

// Assigning a Number variable
var itemPrice = 34.99;

//Assigning a Boolean variable
var itemAvailability = true;

// Creating a Sting Output
console.log("This item is called: " + itemName);

console.log("Description of item: " + itemDescription);

//Creating a Number Output
console.log("The price of the " + itemName + " is " + itemPrice);

// Creating a Boolean Output
if (itemAvailability == true) {
    console.log(itemAvailability + " " + itemName + " is in stock.");
}
else {
    console.log(itemName + " is not in stock.");
}
