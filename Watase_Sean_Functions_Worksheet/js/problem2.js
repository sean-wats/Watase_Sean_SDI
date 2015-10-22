//Functions Worksheet
//Problem 2

//Bee Stings
//It takes 8.666666667 stings per pound to kill it victim

//Name of the code
alert("Bee Sting Calculator");

var beeStingCalculator = function(victimsWeight) {
  if (victimsWeight === "") {
      alert("Invalid Value");
  }
    else {
      var numberOfBeeStingsToKill = victimsWeight * 8.666666667;

      var numberVerification = isNaN(numberOfBeeStingsToKill);

      if (numberVerification === false) {
          console.log(numberOfBeeStingsToKill);
          return (numberOfBeeStingsToKill);
      }
      else {
          alert("Invalid Value");
      }
  }
};

var answer = beeStingCalculator(Number(prompt("What is the victims weight? \n(In pounds(lbs.))")));

alert("It would take " + answer + " stings to kill the victim.");
