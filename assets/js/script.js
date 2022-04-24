// Assignment code here
var userInputs = {
  criteriaLowercase: false,
  criteriaUppercase: false,
  criteriaNumeric: false,
  criteriaSpecialChar: false
}

var generatePassword = function () {
  window.alert("Choose which types of characters to include in your generated password.");
  var includeLowercase = confirm("Include lowercase letters in your custom password? (abc)");
  var includeUppercase = confirm("Include uppercase letters in your custom password? (ABC)");
  var includeNumeric = confirm("Include numbers in your custom password? (123)");
  var includeSpecialChar = confirm("Include special characters in your custom password? (!?*)");

  var finalPassword =
    userInputs.criteriaLowercase +
    userInputs.criteriaUppercase +
    userInputs.criteriaNumeric +
    userInputs.criteriaSpecialChar;
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // window.alert("Choose which types of characters to include in your generated password.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
