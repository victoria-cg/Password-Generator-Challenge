// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//need to write/define function generatePassword() for this challenge to work
function generatePassword(){
//prompt function for user to choose password legth
var length = prompt("Enter you desired password length between 8-128 characters");
//prompt function for user to select at least 1 character type: uppercase alpha, lowercase alpha, number, special characters
var charType = prompt("What types of characters do you want to include? Type 'uppercase, lowercase, numbers, symbols' to select one or more character type(s).")
//take variables created for each type of character and run function for random character selection in array
//use a for loop to generate random characters and stop at chosen length
//at end of function write var finalpassword and return final password to global scope: do I need to do this if var password already runs function generatePassword()?
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
