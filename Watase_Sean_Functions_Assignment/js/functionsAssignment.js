//Functions Assignment


//Power Ball or Florida Lottery
var userGameSelection = prompt("Which of the following games would you like to see?\nPower Ball\nFlorida Lottery");
var userGameSelectionLowerCase = userGameSelection.toLowerCase();

//Random number function
var randomNumber = function(max, min) {
  return Math.round(Math.random() * (max - min)) + 1;
};

if (userGameSelectionLowerCase === "power ball") {
    /**
     * Power Ball Rules
     * 5 white balls are drawn (1-69)
     * 1 red ball is drawn (1-25)
     */

    //5 whites balls must be drawn
    var ballNumber = 0;
    var whiteBalls = [];

    do {
        whiteBalls[ballNumber] = randomNumber(69, 1);
        ballNumber++;
    }
    while (ballNumber < 5);

    /**
     * Outputting the final draw
     * All 5 white balls should be different numbers
     */
    console.log("The white balls are " + whiteBalls);

    //1 red ball must be drawn
    var drawingRedBall = randomNumber(25, 1);

    /**
     * Outputting the final Power Ball
     * 1 Power Ball from 1-25
     */
    console.log("The Power Ball is " + drawingRedBall);

    //Final result is 5 white balls and 1 red ball
    alert("Power Ball Numbers:\n" +
        "Ball 1: " + whiteBalls[0] +
        "\nBall 2: " + whiteBalls[1] +
        "\nBall 3: " + whiteBalls[2] +
        "\nBall 4: " + whiteBalls[3] +
        "\nBall 5: " + whiteBalls[4] +
        "\n\nPower Ball: " + drawingRedBall);

    taskFinish = true;
}
else if (userGameSelectionLowerCase === "florida lottery") {
    /**
     * Florida Lottery Rules
     * Produce 6 numbers (1-53)
     */

    //6 Random Numbers
    var floridaLotteryNumber = 0;
    var floridaLottery = [];

    //Randomly selecting 6 numbers from 1-53
    do {
        floridaLottery[floridaLotteryNumber] = randomNumber(53, 1);
        floridaLotteryNumber ++;
    }
    while(floridaLotteryNumber < 6);

    //Output the Florida Lottery Numbers
    console.log("The 6 numbers for the Florida Lottery are: " + floridaLottery);
    alert("Florida Lottery Numbers:\n" +
        "Number 1: " + floridaLottery[0] +
        "\nNumber 2: " + floridaLottery[1] +
        "\nNumber 3: " + floridaLottery[2] +
        "\nNumber 4: " + floridaLottery[3] +
        "\nNumber 5: " + floridaLottery[4] +
        "\nNumber 6: " + floridaLottery[5]);

    taskFinish = true;
}
else {
    alert("Invalid Input");
}




