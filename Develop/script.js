// Assignment code here



// When button is clicked prompted to generate password
// Prompt criteria asks for length of password 8-128 characters
// Prompt asks for uppercase, lowercase, numeric, and special
// validated and one character type selected
// All prompts answered then password is generated and displayed in alert


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var promptLength = prompt("Select a length for your new password between 8-128 characters.")
    if (promptLength >=8 && promptLength <= 128) {
    alert("You have selected a password length of " + promptLength + " characters.");

    localStorage.setItem("length", promptLength)
  } else {
    alert("Please enter a value between 8-128!");
  } 

  var 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
