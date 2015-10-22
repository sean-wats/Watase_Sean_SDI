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

//Cannot have duplicates
//Redraw ball 1 if it is the same number as any other ball

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
      "\nBall 5: " + whiteBalls[4])
