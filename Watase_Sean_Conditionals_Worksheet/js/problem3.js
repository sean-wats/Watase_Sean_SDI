//Problem 3
//Letter Grade

//Show the right letter grade for the percentage they are receiving in class
/**
 * Full Sail Grading Scale
 *
 *  A+ = 95-100
 *  A = 90-94
 *  B+ = 85-89
 *  B = 80-84
 *  C+ = 76-79
 *  C = 73-75
 *  D = 70-72
 *  F = 0-69
 **/

//Get users grade in percentage
var userGradePercentageInput = prompt("What is your grade percentage?");

//Converting string to number
var userGradePercentage = Number(userGradePercentageInput);

//Letter Grades
var Aplus = "You are getting an A+ for the class.";
var A = "You are getting an A for the class.";
var Bplus = "You are getting a B+ for the class.";
var B = "You are getting a B for the class.";
var Cplus = "You are getting a C+ for the class.";
var C = "You are getting a C for the class.";
var D = "You are getting a D for the class.";
var F = "You are getting a F for the class.";

//Getting letter grade
if (userGradePercentage > 94 && userGradePercentage <= 100) {
    alert(Aplus);
}
else if (userGradePercentage > 89 && userGradePercentage <= 94) {
    alert(A);
}
else if (userGradePercentage > 84 && userGradePercentage <= 89) {
    alert(Bplus);
}
else if (userGradePercentage > 79 && userGradePercentage <=84) {
    alert(B);
}
else if (userGradePercentage > 75 && userGradePercentage <= 79) {
    alert(Cplus);
}
else if (userGradePercentage > 72 && userGradePercentage <= 75) {
    alert(C);
}
else if (userGradePercentage > 69 && userGradePercentage <=72) {
    alert(D);
}
else if (userGradePercentage <= 69) {
    alert(F);
}
else {
    alert("Please enter valid grade percentage.")
}
