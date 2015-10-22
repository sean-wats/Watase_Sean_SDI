//Functions Assignment
//Power Ball or Florida Lottery

/**
 * Power Ball Rules
 * 5 white balls are drawn (1-69)
 * 1 red ball is drawn (1-25)
 */

//5 whites balls must be drawn
//Cannot have duplicates
var ballNumber = 0;
var whiteBalls = [];

do {
    var randomNumber = function() {
        return Math.round(Math.random() * (69 - 1)) + 1;
    };
    var randomBallNumber = randomNumber();
    console.log(randomBallNumber);

    whiteBalls[ballNumber] = randomBallNumber;

    ballNumber ++;
}
while (ballNumber < 5);

//1 red ball must be drawn

//Final result is 5 white balls and 1 red ball
