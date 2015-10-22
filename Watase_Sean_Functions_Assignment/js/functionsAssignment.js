//Functions Assignment
//Power Ball

/**
 * Power Ball Rules
 * 5 white balls are drawn (1-69)
 * 1 red ball is drawn (1-25)
 */

//5 whites balls must be drawn
//Cannot have duplicates
var ballNumber = 1;

do {
    var randomNumber = function() {
        return Math.round(Math.random() * (69 - 1)) + 1;
    };
    var randomBallNumber = randomNumber();
    console.log(randomBallNumber);

    ballNumber ++;
}
while (ballNumber < 6);

//1 red ball must be drawn

//Final result is 5 white balls and 1 red ball
