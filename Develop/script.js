// Assignment code here
// var criteriaLength
// var passwordCharacterType
// var passwordNumericType
// var passwordSpecialCharacter

function createNewPassword() {
  var createNewPassword = "";
  var passwordLength = retrievePasswordLength();
  var usedCharacterType = retrieveCharacterType();
  var pickedOtherCharacters = "";

  if (usedCharacterType.includeLowercase) {
    pickedOtherCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (usedCharacterType.includeUppercase) {
    pickedOtherCharacters += "ABCDEFGHIJLKMNOPQRSTUVWXYZ";
  }

  if (usedCharacterType.includeNumeric) {
    pickedOtherCharacters += "0123456789";
  }

  if (usedCharacterType.includeSpecial) {
    pickedOtherCharacters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i = 0; i < passwordLength; i ++) {
    createNewPassword += pickedOtherCharacters.charAt(Math.floor(Math.random() * pickedOtherCharacters.length));
  }

  return createNewPassword;
  



// When button is clicked prompted to generate password
// Prompt criteria asks for length of password 8-128 characters
// Prompt asks for uppercase, lowercase, numeric, and special
// validated and one character type selected
// All prompts answered then password is generated and displayed in alert


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {

//   criteriaLength = prompt("Select a length for your new password between 8-128 characters.");
//   if (criteriaLength >=8 && criteriaLength <=128) {
//     alert("You have selected a password of " + criteriaLength + " characters.");
//     localStorage.setItem("length", criteriaLength);
//   } else {
//     alert("Please enter a value between 8-128!");
//   }

//   passwordCharacterType = prompt("Select whether you want 'Lowercase', 'Uppercase', or 'Both' in your password. Enter 'Lowercase', 'Uppercase', or 'Both'. ");

//   passwordCharacterType = passwordCharacterType.toLowerCase();

//   if (passwordCharacterType === "lowercase") {
//     passwordCharacterType = 
//   }

//   if (passwordCharacterType === "uppercase") {

//   }

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   passwordText.value = password;
  
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
