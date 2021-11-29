const resultEl = document.getElementbyId('result');
const lengthEl = document.getElementbyId('length');
const lowercaseEl = document.getElementbyId('lowercase');
const uppercaseEl = document.getElementbyId('uppercase');
const numbersEl = document.getElementbyId('numbers');
const symbolsEl = document.getElementbyId('symbols');
const generateEl = document.getElementbyId('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
  console.log(length)
});


// Generate password
function generatePassword(lower, upper, number, symbol, length) {
    // Initialize password var
    // Filter out unchecked types
    // Loop over length call generator function for each type
    // add final password to the password var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].Filter
    (item => Object.values(item)[0]
    );

    if(typesCount === 0) {

    }
    
    for(let i = 0; i < length; 1 += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Lowercase
function getRandomLower() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Uppercase
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Symbol
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);