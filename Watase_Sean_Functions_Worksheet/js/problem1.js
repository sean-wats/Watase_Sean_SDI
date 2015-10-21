//Functions Worksheet
//Problem 1

//Solving Circumference
//Circumference = 2 * (3.14) * radius

alert("Circumference Calculator");

var calculateCircumference =  function(radius){
    if (radius === "") {
        alert("Invalid Value");
    }
    else {
        var circumference = 2 * 3.14 * radius;
    }

    console.log(circumference);
    return (circumference);
};

var answer = calculateCircumference(Number(prompt("What is the radius?")));

alert("The circumference is " + answer);