// Assignment code here

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

// input functions for password
function generatePassword() {
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = upperCaseLetters.toLowerCase();
  var numbers = '0123456789';
  var symbols = '!@#$%^&*';
  let finalPassword = '';
  let temp = ''; 
  var passwordLength = prompt('You must choose password length. Minimum 8 characters, no more than 128 characters');


  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters"); 
  }
  
  // options for characters numbers and symbol for the password
  var lowerCase = confirm('Would you like lower case letters?');
  var upperCase = confirm('Would you like upper case letters?');
  var digits = confirm('Would you like numbers?');
  var signs = confirm('Would you like symbols?');
  
  // the input options
  if (lowerCase){
    temp += lowerCaseLetters;
  }

  if (upperCase){
    temp += upperCaseLetters;
  }

  if (digits){
    temp += numbers;
  }

  if (signs){
    temp += symbols
  }

  if (!lowerCase && !upperCase && !digits && !signs){
    alert('Please choose atleast one!'); 
  }

  for (i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * temp.length);
    finalPassword += temp.charAt(randomNumber);
  }

  return finalPassword;
} 

  











