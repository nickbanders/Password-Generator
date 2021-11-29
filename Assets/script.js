var charLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var charUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var charNumber = ["1234567890"];
var charSymbol = ["*;<>()[]{}#$?!^|"];
var confirmLowercase = null;
var confirmUppercase = null;
var confirmNumber = null;
var confirmSymbol = null;
let charLength = '';
let confirmPassword = [];
let randomPassword = [];
let finalPassword = '';

// ask user how many characters they'd like
var setCharLength = function() {
  charLength = prompt
  ("Please choose between 8 & 128 characters for your password");
  if (charLength < 8 || charLength > 128 || charLength === '' || charLength === null) 
  { window.alert("You must choose between 8 & 128 characters");
    return setCharLength();
  }
};

// get character types selections from user
let CharacterSelection = function() {
  confirmLowercase = confirm("Do you want lowercase letters in your password?")
  if (confirmLowercase) {
    confirmPassword += charLowercase;
  }

  confirmUppercase = confirm("Do you want uppercase letters in your password?")
  if (confirmUppercase) {
    confirmPassword += charUppercase;
  }

  confirmNumber = confirm("Do you want numbers in your password?")
  if (confirmNumber) {
    confirmPassword += charNumber;
  }

  confirmSymbol = confirm("Do you want symbols in your password?")
  if (confirmSymbol) {
    confirmPassword += charSymbol;
  }

  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSymbol)
    window.alert ("Please select at least one character type!")
};

// randomly generate the characters
function randomChar(max) {
  return Math.floor(Math.random() * max);
  
}

// convert into a string
var convertPassword = function () {
  randomPassword.toString();
  finalPassword = randomPassword.join("");
};

// password generator
function generatePassword() {
  setCharLength();
  CharacterSelection();
  for (let i = 0; i < charLength; i++) {
    n = randomChar(confirmPassword.length);
    randomPassword.push(confirmPassword[n]);
    convertPassword();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);