//Discount Problem

//Get original price
//Get discount amount
//Description of item
//Sales tax amount

//Will return the original amount and amount with discount and no tax along with amount with discount and tax.

//User input for item description
var itemDescription = prompt("Please give a description of your item:");

//User input for original price
var originalPrice = prompt("What is the price of your item?");

//User input for discount amount
var discountAmount = prompt("What is the discount amount?");

//User input for sales tax
var salesTax = prompt("What is the sales tax?");



//Results

//Total with discount only (no tax)
var totalWithDiscountNoTax = (100 / (100 - discountAmount) + 1) * originalPrice;

//Total with discount and tax
var totalWithDiscountAndTax = (100 / (100 - salesTax) + 1) * totalWithDiscountNoTax;


//Output
var finalResult = "Your " + itemDescription + " was originally $" + originalPrice + ". After the " + discountAmount + "% discount, your total without tax is $" + totalWithDiscountNoTax + " and with tax it is $" + totalWithDiscountAndTax + ".";

alert(finalResult);
console.log(finalResult);