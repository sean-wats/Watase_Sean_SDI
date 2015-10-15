//Conditionals Assignment
//Budget Calculator

//Get the paycheck amounts
var paycheck = Number(prompt("How much did you receive on your paycheck?"));

var additionalPaychecks = prompt("Do you have any additional paychecks you want to add? \n(Yes or No)");

if (additionalPaychecks === "Yes") {
    var addPaycheck = Number(prompt("What is the amount of the paycheck?"));

    //Adding both paychecks together to get total
    var paycheckTotal = paycheck + addPaycheck;
    console.log("Income total is: " + paycheckTotal);

    alert("Your total income is: $" + paycheckTotal);
}
else if (additionalPaychecks === "No") {
    console.log("Income total is: " + paycheck);

    alert("Your total income is: " + paycheck);
}

/**
 * Budget will consist of:
 * Bills
 * Food
 * Savings
 */
//Finding total amount of user spending budget (Bills and food)
var totalBills = Number(prompt("What is the total amount of the bills you pay? \n(For the month)"));
var totalFood = Number(prompt("How much do you spend on food? \n(Per month)"));

var totalSpendingBudget = totalBills + totalFood;