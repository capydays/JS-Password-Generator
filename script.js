// Assignment code here
var numbers = "1234567890"
var lowerABC = "abcdefghijklmnopqrstuvwxyz"
var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

var userNum = window.confirm("Would you like your password to contatin numbers?")
var userLower = window.confirm("Would you like your password to contain lowercase letters?")
var userUpper = window.confirm("Would you like your password to contain uppercase letters?")
var userSpecial = window.confirm("Would you like your password to contain special characters?")
var passLength = window.prompt("How many characters would you like your password to be? (Min 8 - Max 128)")


if (!userNum && !userLower && !userUpper && !userSpecial) {
  window.alert("You have not selected any valid password character options. Please refresh and try again.")
} else if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
  window.alert("Your preferences have been saved. Please click the 'Generate Password' button below to generate your unique password.")
} else {
  window.alert("You have entered an invalid password length. Please refresh and try again.")
}





// generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
