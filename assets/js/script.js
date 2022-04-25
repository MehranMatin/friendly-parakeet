// Assignment code here
var userInputs = {
  criteriaPasswordLength: "",
  criteriaLowercase: false,
  criteriaUppercase: false,
  criteriaNumeric: false,
  criteriaSpecialChar: false,
  criteriaArr: function () {
    // possible way to store char chosen types
  },
  randomizeType: function () {
    // possible way to select a random type for each char
  },
  randomizeChar: function () {
    // possible way to select a random char from type
  },
  saveUserCriteria: function (answer) {
    // Possible function to pull answers from prompts into object
  }
}
console.log(userInputs);

/* GENERATE PASSWORD */
var generatePassword = function () {
  window.alert("Decide which types of characters to include in your generated password.");
  // Prompt user for desired password length
  do {
    var passwordLength = parseInt(window.prompt("First, choose a password length between 8-128 characters.", 8));
    userInputs.criteriaPasswordLength = passwordLength;
  } while (userInputs.criteriaPasswordLength < 8 || userInputs.criteriaPasswordLength > 128);

  // Prompts for character types criteria
  var includeLowercase = confirm("Include lowercase letters in your custom password? (abc)");
  var includeUppercase = confirm("Include uppercase letters in your custom password? (ABC)");
  var includeNumeric = confirm("Include numbers in your custom password? (123)");
  var includeSpecialChar = confirm("Include special characters in your custom password? (!?*)");

  userInputs.criteriaLowercase = includeLowercase;
  userInputs.criteriaUppercase = includeUppercase;
  userInputs.criteriaNumeric = includeNumeric;
  userInputs.criteriaSpecialChar = includeSpecialChar;

  // Section for later use: final output to writePassword function
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
