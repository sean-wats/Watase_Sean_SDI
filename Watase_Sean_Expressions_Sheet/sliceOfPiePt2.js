// Slices of Pie Part 1

//Finding out how many slices of pizza each person will get

//User answer 3 prompts:
    //How many slices per pizza
    //How many people at the party
    //How many pizzas were ordered

//User will answer these prompts

//Slices per pizza
var slicesPerPizza = prompt("How many slices does the pizza have?");

//People at the party
var numberOfPeopleAtParty = prompt("How many people are at the party?");

//Number of pizzas ordered
var numberOfPizzasOrdered = prompt("How many pizzas did you order?");


//Solving how many slices each person will get
var numberOfSlicesForSparky = (numberOfPizzasOrdered * slicesPerPizza) % numberOfPeopleAtParty;
var numberOfSlicesPerPerson = (numberOfPizzasOrdered * slicesPerPizza) - numberOfSlicesForSparky / numberOfPeopleAtParty;


//Outputting result to console and user
var finalResult = "If you order " + numberOfPizzasOrdered + " pizzas and each pizza has " + slicesPerPizza + " slices. Each of the " + numberOfPeopleAtParty + " people at the party will get " + numberOfSlicesPerPerson + " slices ans Sparky would get " + numberOfSlicesForSparky + " slices.";

console.log(finalResult);
alert(finalResult);