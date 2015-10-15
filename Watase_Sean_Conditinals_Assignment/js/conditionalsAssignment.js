//Conditionals Assignment
//Budget Calculator

/**
 * Budget will consist of:
 * Bills
 * Food
 * Savings
 */

//Invalid alert
var invalid = "The information you have provided is not valid.";



//Get the paycheck amounts
var paycheck = Number(prompt("How much did you receive on your paycheck?"));

var additionalPaychecks = prompt("Do you have any additional paychecks you want to add? \n(Yes or No)");

if (additionalPaychecks == "Yes") {
    var addPaycheck = Number(prompt("What is the amount of the paycheck?"));

    //Adding both paychecks together to get total
    var paycheckTotal = paycheck + addPaycheck;
    console.log("Income total is: " + paycheckTotal);

    alert("Your total income is: $" + paycheckTotal);

    //Finding total amount of user spending budget (Bills and food)
    var totalBills = Number(prompt("What is the total amount of the bills you pay? \n(For the month)"));
    var totalFood = Number(prompt("How much do you spend on food? \n(For the month)"));

    //Total of spending budget
    var totalSpendingBudget = totalBills + totalFood;
    console.log("Your total spending amount is: " + totalSpendingBudget);

    //Finding total amount of the user savings (Remaining after the spending budget)
    var remainingAmount = paycheckTotal - totalSpendingBudget;
    console.log("Your remaining balance after spending budget is: " + remainingAmount);

    //Validating that the savings amount is greater than 0
    if (remainingAmount >= 0) {
        //Seeing if user wants to put amount away in savings
        var savingsAmount = Number(prompt("Your remianing balance is: " + remainingAmount + "\nWhat percentage would you like to put away and save? \n(Value must be between 0 - 100)"));

        //Validating to see if percentage amount is valid
        if (savingsAmount >= 0 && savingsAmount <= 100) {
            var savingsAmountPercentage = savingsAmount / 100;

            //Finding the amount that will go to savings and the remaining is for users misc purposes
            var userSavings = remainingAmount * savingsAmountPercentage;
            var userMisc = remainingAmount - userSavings;
            console.log("Your put $" + userSavings + " into savings.");
            console.log("You have $" + userMisc + " remaining for personal use");
        }
        else {
            alert(invalid);
        }
    }
    else {
        alert("You have no remaining balance after your spending budget. Your spending budget exceeds your income.");
    }


    var finalStatement = "Total Income: $" + paycheckTotal +
                        "\nBills and Food Cost: $" + totalSpendingBudget +
                        "\nSavings (" + savingsAmount + "%): $" + userSavings +
                        "\nPersonal: $" + userMisc;
}
else if (additionalPaychecks == "No") {
    console.log("Income total is: " + paycheck);

    alert("Your total income is: " + paycheck);

    //Finding total amount of user spending budget (Bills and food)
    var totalBills = Number(prompt("What is the total amount of the bills you pay? \n(For the month)"));
    var totalFood = Number(prompt("How much do you spend on food? \n(For the month)"));

    //Total of spending budget
    var totalSpendingBudget = totalBills + totalFood;
    console.log("Your total spending amount is: " + totalSpendingBudget);

    //Finding total amount of the user savings (Remaining after the spending budget)
    var remainingAmount = paycheck - totalSpendingBudget;

    //Validating that the savings amount is greater than 0
    if (remainingAmount >= 0) {
        //Seeing if user wants to put amount away in savings
        var savingsAmount = Number(prompt("Your remianing balance is: " + remainingAmount + "\nWhat percentage would you like to put away and save? \n(Value must be between 0 - 100)"));

        //Validating to see if percentage amount is valid
        if (savingsAmount >= 0 && savingsAmount <= 100) {
            var savingsAmountPercentage = savingsAmount / 100;

            //Finding the amount that will go to savings and the remaining is for users misc purposes
            var userSavings = remainingAmount * savingsAmountPercentage;
            var userMisc = remainingAmount - userSavings;
            console.log("Your put $" + userSavings + " into savings.");
            console.log("You have $" + userMisc + " remaining for personal use");
        }
        else {
            alert(invalid);
        }
    }
    else {
        alert("You have no remaining balance after your spending budget. Your spending budget exceeds your income.");
    }

    var finalStatement = "Total Income: $" + paycheck +
        "\nBills and Food Cost: $" + totalSpendingBudget +
        "\nSavings (" + savingsAmount + "%): $" + userSavings +
        "\nPersonal: $" + userMisc;
}
else {
    alert(invalid);
}

alert(finalStatement);
