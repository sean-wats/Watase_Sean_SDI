//Problem 4
//User name and password

//User inputs user name and password

/**
 * For this code example:
 * user name will be seanwatase
 * and password will be password
 */
var userName = "seanwatase";
var password = "password";


//User will input user name and password
var userNameEntered = prompt("Username:");
var passwordEntered = prompt("Passowrd:");

console.log(userNameEntered);
console.log(passwordEntered);

//Validate if user name and password match
if (userNameEntered === userName && passwordEntered === password) {
    alert("Welcome " + userName + "!");
}
else if (userNameEntered === userName && passwordEntered != password) {
    alert("Password does not match what we have on record.");
}
else {
    alert("User not found. Try again");
}