// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//need to write/define function generatePassword().  Code on lines 4 and 7 is part of the starter code provided by the bootcamp for this assignment
function generatePassword(){
//prompt function for user to choose password legth
var length = prompt("Enter you desired password length between 8-128 characters");
//validate length meets the criteria of 8-128 characters, alerts to try again if not valid
if (length <8 || length >128 || (isNaN (length))) {
  alert("You must enter a number between 8 and 128. Refresh the page and try again.");
}
//Ask if user wants uppercase alphabet characters, confirm makes a boolean value for choice
var includeUpperAlpha = confirm("Do you want uppercase letters in your password? Hit 'OK' to include them and cancel to skip them.");
//Ask if user wants lowercares alphabet characters
var includeLowerAlpha = confirm("Do you want lowercase letters in your password? Hit 'OK' to include them and cancel to skip them.");
//Ask if user wants number characters
var includeNumbers = confirm("Do you want numbers in your password? Hit 'OK' to include them and cancel to skip them.");
//ask if user wants special characters: use special characters official list provided
var includeSpecialChar = confirm("Do you want special characters in your password? Hit 'OK' to include them and cancel to skip them.");
//if statement to alert if no character types chosen
if (!includeUpperAlpha && !includeLowerAlpha && !includeNumbers && !includeSpecialChar) {
  alert("You must select 'OK' for at least one type of character (Uppercase, lowercase, numbers, and/or special characters). Refresh the page and try again.");
  //I think I need something else here to prevent the form form valdidation if not correct: would that just be return "" empty string or also an API like preventdefault to keep the form from going through??????????
}

//define variable string for each type of character: list of letters, number, etc
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!#$%&'(+)*,-./:;<=>?@[]^_`{ | } ~";
//Make if else statements choosing character strings to concatenate based on boolean choices from prompt variables, this big string needs its own variable
var includedChar = ""; //new variable will hold the chosen character types, and it starts as an empty string, later filled in by the following 'if' statements
if (includeUpperAlpha) { 
  includedChar = includedChar.concat(upperAlpha); //this will combine the empty string in the new variable 'includedChar' with the string in the variable 'upperalpha' and make that what 'includedChar' equals
  console.log(includedChar); //adding console.log logs the result in the console so I can see my functions working
}
if (includeLowerAlpha) {
  includedChar = includedChar.concat(lowerAlpha);
  console.log(includedChar);
}
if (includeNumbers) {
  includedChar = includedChar.concat(numbers);
  console.log(includedChar);
}
if (includeSpecialChar) {
  includedChar = includedChar.concat(specialChar);
  console.log(includedChar);
}
//use .split to turn the concatenated strings end product into a new array (named arrayIncludedChar) of included characters that are possible characters for the password
var arrayIncludedChar = includedChar.split('');
console.log(arrayIncludedChar); //shows my work in the console
//use for loop and the math/random syntax to select random characters for the specified length variable, the for loop runs for length of 'length' variable
var finalPassword = "";  //finalPassword will start as an empty string until the for loop chooses some random characters to fill it in
for (var i = 0; i< length; i++) {
 var randomChar = arrayIncludedChar[Math.floor(Math.random() * arrayIncludedChar.length)]; //math.random syntax here selects 1 random character from arrayIncludedChar for randomChar variable
 finalPassword += randomChar; //concatenate the 2 variables so that finalPassword accumulates each new random character made by the loop to make the full length password
 console.log(finalPassword); 
}
return finalPassword; //returns finalPassword to global scope so that it can be used by parent functions
}

// Write password to the #password input. The code below on lines 65-74 is the starter code provided by the bootcamp
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
