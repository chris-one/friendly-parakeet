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

  // min and max requirements for the password
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters"); 
    var passwordLength = prompt('You must choose password length. Minimum 8 characters, no more than 128 characters');

  }
  console.log("chris")
  // options for characters numbers and symbol for the password
  var lowerCase = confirm('Would you like LOWERCASE letters?');
  var upperCase = confirm('Would you like UPPERCASE letters?');
  var digits = confirm('Would you like NUMBERS?');
  var signs = confirm('Would you like SYMBOLS?');
  
  // input options lowercase
  if (lowerCase){
    temp += lowerCaseLetters;
  }
  // input for uppercase letters
  if (upperCase){
    temp += upperCaseLetters;
  }
  // input option for numbers 
  if (digits){
    temp += numbers;
  }
  // input options for symbols
  if (signs){
    temp += symbols
  }
  // the alert if none of the options were inputed
  if (!lowerCase && !upperCase && !digits && !signs){
    alert('Please choose atleast one!'); 
  }
  // password generator
  for (i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * temp.length);
    finalPassword += temp.charAt(randomNumber);
  }
  // password given
  return finalPassword;
  
}