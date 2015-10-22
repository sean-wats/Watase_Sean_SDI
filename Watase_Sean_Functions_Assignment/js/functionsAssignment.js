//Functions Assignment
//Power Ball or Florida Lottery

/**
 * Power Ball Rules
 * 5 white balls are drawn (1-69)
 * 1 red ball is drawn (1-25)
 */

//5 whites balls must be drawn
var ballNumber = 0;
var whiteBalls = [];

//Random Number function
var randomNumber = function() {
    return Math.round(Math.random() * (69 - 1)) + 1;
};

var drawingWhiteBalls = function() {
    do {
        whiteBalls[ballNumber] = randomNumber();

        ballNumber++;
    }
    while (ballNumber < 5);
};
drawingWhiteBalls();

/**
 * Outputting the final draw
 * All 5 white balls should be different numbers
 */
console.log("The white balls are " + whiteBalls);


//1 red ball must be drawn
var randomRedBall = function() {
    return Math.round(Math.random() * (25-1) + 1);
};

var drawingRedBall = randomRedBall();

/**
 * Outputting the final Power Ball
 * 1 Power Ball from 1-25
 */
console.log("The Power Ball is " + drawingRedBall);

//Final result is 5 white balls and 1 red ball
alert("Ball 1: " + whiteBalls[0] +
      "\nBall 2: " + whiteBalls[1] +
      "\nBall 3: " + whiteBalls[2] +
      "\nBall 4: " + whiteBalls[3] +
      "\nBall 5: " + whiteBalls[4] +
      "\n\nPower Ball: " + drawingRedBall);


/**
 * Florida Lottery Rules
 * User selects 6 numbers between 1-53
 * XTRA: A user can multiply their winnings (2,3,4, or 5)
 *
 * Winnings:
 *      2 matches = N/A
 *          XTRA 2 = Free Ticket
 *          XTRA 3 = Free Ticket
 *          XTRA 4 = Free Ticket
 *          XTRA 5 = Free Ticket
 *      3 matches = $5.00
 *          XTRA 2 = $25.00
 *          XTRA 3 = $25.00
 *          XTRA 4 = $25.00
 *          XTRA 5 = $25.00
 *      4 matches = $70.00
 *          XTRA 2 = $140.00
 *          XTRA 3 = $210.00
 *          XTRA 4 = $280.00
 *          XTRA 5 = $350.00
 *      5 matches = $5,000.00
 *          XTRA 2 = $10,000.00
 *          XTRA 3 = $15,000.00
 *          XTRA 4 = $20,000.00
 *          XTRA 5 = $25,000.00
 */

//User selects 6 numbers from 1-53
var userNumbers = [];

userNumbers[0] = Number(prompt("Select your first number:"));
userNumbers[1] = Number(prompt("Select your second number:"));
userNumbers[2] = Number(prompt("Select your third number:"));
userNumbers[3] = Number(prompt("Select your fourth number:"));
userNumbers[4] = Number(prompt("Select your fifth number:"));
userNumbers[5] = Number(prompt("Select your sixth number:"));

console.log(userNumbers);

//User chooses if they want to do XTRA
prompt("Would you like to participate in XTRA? \n(XTRA allows you to multiply your winnings. You select 2x, 3x, 4x, or 5x)");


//Florida Lottery randomly produces 6 numbers
var lotteryNumber = 0;
var floridaLotteryNumbers = [];
var floridaLotteryRandomNumbersFunction = function() {
    return Math.round(Math.random() * (53 - 1) + 1);
};
var floridaLotteryRandomNumbers = function() {
  do {
      floridaLotteryNumbers[lotteryNumber] = floridaLotteryRandomNumbersFunction();

      lotteryNumber ++;
  }
  while(lotteryNumber < 6);
};
floridaLotteryRandomNumbers();
console.log(floridaLotteryNumbers);

//Check to see how much numbers match

//Output the result

//Output if the user won any prizes