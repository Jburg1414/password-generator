// Assignment code here

// When button is clicked prompted to generate password

// this function is to create the random password
function createNewPassword() {
  // start with variable createNewPassword set equal to a blank string
  var createNewPassword = "";
  // variable passwordLength set equal to the function retrievePasswordLength which is defined below
  var passwordLength = retrievePasswordLength();
  // variable usedCharacterType set equal to the function retrieveCharacterType which is defined below
  var usedCharacterType = retrieveCharacterType();
  // variable pickedOtherCharacters set equal to a blank string
  var pickedOtherCharacters = "";
  
  // if statements for the different character types, depending what is selected will determine what types of characters to include in the randomized characters
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
    pickedOtherCharacters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  
  // for loop to randomly select characters based on what character sets were selected and how long the password was selected to be. Each character is added behind the previous character to create the random password.
  for (var i = 0; i < passwordLength; i ++) {
    createNewPassword += pickedOtherCharacters.charAt(Math.floor(Math.random() * pickedOtherCharacters.length));
  }
  

  // return the randomly created password 
  return createNewPassword;
}  

// Prompt criteria asks for length of password 8-128 characters
function retrievePasswordLength(valueEntered) {
  var criteriaLength = "Select a password length between 8-128 characters.";
  
  // prompt value if password length is outside of 8-128 range
  if (valueEntered) {
    criteriaLength = valueEntered + " is not between 8-128. " + criteriaLength;
  }
  // constant default length of passwords 
  const defaultLength = 8;

  // password length 
  var length = Number(prompt(criteriaLength));


  // if var length is not a number return default length, else if the length is less than 8 or greater than 128 prompt, else return the selected password length
  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 8 || length > 128) {
    return retrievePasswordLength(length.toString());
  } else {
    return length;
  }
}

// this prompts the employee to select what characters to include in the password 
function retrieveCharacterType () {
  var selectedPasswordCharacters = {
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumeric: confirm("Include numeric characters?"),
    includeSpecial: confirm("Include special characters?")
  };
  
  // if statement to prompt the employee that no characters have been chosen and top select character sets, else return the selected character types  
 if (!selectedPasswordCharacters.includeLowercase && !selectedPasswordCharacters.includeUppercase && !selectedPasswordCharacters.includeNumeric && !selectedPasswordCharacters.includeSpecial) {
   alert("You have not selected any character options. Please select at least one!");
   return retrieveCharacterType();
 } else {
    return selectedPasswordCharacters;
 }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // this variable calls out the function to create the new password 
  var password = createNewPassword();
  // this variable calls out where the generated password will be displayed on the webpage
  var passwordText = document.querySelector("#password");
  
  // this sets the passwordText to the value of the variable password
  passwordText.value = password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
