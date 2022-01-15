// Assignment code here

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
    pickedOtherCharacters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i = 0; i < passwordLength; i ++) {
    createNewPassword += pickedOtherCharacters.charAt(Math.floor(Math.random() * pickedOtherCharacters.length));
  }

  return createNewPassword;
}  

function retrievePasswordLength(valueEntered) {
  var criteriaLength = "Select a password length between 8-128 characters.";
  
  if (valueEntered) {
    criteriaLength = valueEntered + " Is not between 8-128." + criteriaLength;
  }
  // add null if statement 
  // when null if statement add remove const defaultLeng
  const defaultLength = 8;

  var length = Number(prompt(criteriaLength, defaultLength));

  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 8 || length > 128) {
    return retrievePasswordLength(length.toString());
  } else {
    return length;
  }
}

function retrieveCharacterType () {
  var selectedPasswordCharacters = {
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumeric: confirm("Include numeric characters?"),
    includeSpecial: confirm("Include special characters?")
  };
  // change selectedOptionsDictionary to selectedPasswordCharacters
 if (!selectedOptionsDictionary.includeLowercase && !selectedOptionsDictionary.includeUppercase && !selectedOptionsDictionary.includeNumeric && !selectedOptionsDictionary.includeSpecial) {
   alert ("You have not selected any character options. Please select at least one.");
   return retrieveCharacterType();
 } else {
    return selectedPasswordCharacters;
 }
}


// When button is clicked prompted to generate password
// Prompt criteria asks for length of password 8-128 characters
// Prompt asks for uppercase, lowercase, numeric, and special
// validated and one character type selected
// All prompts answered then password is generated and displayed in alert


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

 var password = createNewPassword();
 var passwordText = document.querySelector("#password");
 
 passwordText.value = password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
