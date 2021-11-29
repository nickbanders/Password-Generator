// Assignment code here
// assign variables
const charLowercase = ["abcdefghijklmnopqrstuvwxyz"];
const charUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const charNumber = ["1234567890"];
const charSymbol = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
let selectCharacters = [];
var completePassword = [];
var confirmLowercase = null;
var confirmUppercase = null;
var confirmNumbers = null;
var confirmSpecial = null;
var promptLength = null;
var tempPass = null;

//Prompt and set password length
var setLength = function () {
  promptLength = window.prompt(
    "Pick a password length between 8 and 128 characters!"
  );
  if (
    promptLength < 8 ||
    promptLength > 128 ||
    promptLength === null ||
    promptLength === ""
  ){ 
    window.alert(
      "You may not be responisible enough to control something that needs a password if you can't pick a number between 8 and 128. Try again!"
    );
    return setLength();
    }
  promptLength = parseInt(promptLength);
  if (isNaN(promptLength)){
    window.alert(
      "YOU'RE KILLING ME SMALLS! Letters are not numbers. Try again!"
    );
    return setLength();
  }
};

//Verify character type via prompt and push to selection array
var setCharacters = function () {
  // Prompt for lowercase
  while (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecial
  ) {
    confirmLowercase = confirm("Would you like to use lowercase letters?");

    // Prompt for uppercase
    confirmUppercase = confirm("Would you like to use uppercase letters?");

    // Prompt for numeric
    confirmNumbers = confirm("Would you like to use numbers?");

    // Prompt for special characters
    confirmSpecial = confirm("Would you like to use special characters?");

   //Add True values to selection array
    if (confirmLowercase) {
      selectCharacters += charLowercase;
      }
    if (confirmUppercase) {
      selectCharacters += charUppercase;
    }
    if (confirmNumbers) {
      selectCharacters += charNumber;
    }
    if (confirmSpecial) {
      selectCharacters += charSymbol;
    }
     // If none selected return warning and reloop
    if (
      !confirmLowercase &&
      !confirmUppercase &&
      !confirmNumbers &&
      !confirmSpecial
    ) {
      window.alert(
        "You must select at least one type of character for your password. Please try again."
      );
    } else {
      break;
    }
  }
  
};

//Convert array to string and push to final array
var convertPasswordString = function () {
  completePassword.toString();
  tempPass = completePassword.join("");
};

//Reset variables so that program can be used without refresh
var resetVariables = function () {
  selectCharacters = [];
  completePassword = [];
  confirmLowercase = null;
  confirmUppercase = null;
  confirmNumbers = null;
  confirmSpecial = null;
  promptLength = null;
};

//Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Copy password button function
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied Password: " + copyText.value);
}

//Main function to assemble minor functions
function generatePassword() {
  setLength();
  setCharacters();  
  //loop randomizer until password length is achieved
  for (let i = 0; i < promptLength; i++) {
    n = getRandomInt(selectCharacters.length);
    completePassword.push(selectCharacters[n]);
    convertPasswordString();
  };
  resetVariables();
  return tempPass;
}

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