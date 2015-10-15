//Problem 6
//Movie Ticket price

//Find out which movie ticket price the customer will pay

/**
 * Ticket prices:
 * Regular          $12.00
 * Senior           $7.00
 * Under 10         $7.00
 * Between 3 - 5    $7.00
 **/

//Ticket Prices
    var ticketPrice = "Your ticket will be $12.00";
    var discountTicketPrice = "Your ticket will be $7.00";

//Find out what time the movie is at and how old the customer is
var movieTime = prompt("What tie is your movie at?");
var customerAge = prompt("How old are you?");

//Conditional to see what price they need to pay
if (movieTime <= 5 && movieTime >= 3) {
    alert(discountTicketPrice);
}
else if (customerAge >= 55 || customerAge <= 10) {
    alert(discountTicketPrice);
}
else {
    alert(ticketPrice);
}