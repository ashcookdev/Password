let characters = prompt('How many characters long would you like your password?');
alert('Will provide you with a password including uppercase, lowercase letters,numbers and special characters')



// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() { 

}


//let specCharacters = specialCharacters.toString();
//console.log(specCharacters);



function specialRandom() { 
  let specialRandom = specialCharacters[Math.floor(specialCharacters.length * Math.random())]
  return specialRandom
}

specialRandom()

function numberRandom() { 
  let numberRandom = numericCharacters[Math.floor(numericCharacters.length * Math.random())]
  return numberRandom
}

numberRandom()

function lowerRandom() { 
  let lowerRandom = lowerCasedCharacters[Math.floor(lowerCasedCharacters.length * Math.random())]

  return lowerRandom
}

lowerRandom()

function upperRandom() { 
  let upperRandom = upperCasedCharacters[Math.floor(upperCasedCharacters.length * Math.random())]

  return upperRandom
}
upperRandom()


var NewCharacters = [];

var array1 = upperCasedCharacters.concat(lowerCasedCharacters);
console.log(array1);
var array2 = numericCharacters.concat(specialCharacters);
array1.push(...array2);
console.log(array1);

// fisher-yates method to randomise: source- w3schools
function generatePassword() {
  for (let i = array1.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = array1[i];
    array1[i] = array1[j];
    array1[j] = k;
  }
  array1.splice(characters)
return array1.join("");
}

generatePassword()

console.log(array1.length);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = specialRandom() + numberRandom() + lowerRandom() + upperRandom() + generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);