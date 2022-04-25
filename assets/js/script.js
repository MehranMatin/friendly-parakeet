// Assignment code here
var userInputs = {
  criteriaPasswordLength: "",
  promptAnswers: {
    criteriaLowercase: false,
    criteriaUppercase: false,
    criteriaNumeric: false,
    criteriaSpecialChar: false,
  },
  criteriaArr: [],
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

/* PASSWORD CRITERIA PROMPT */
var promptSequence = function () {
  var userChoices = userInputs.promptAnswers;

  // Prompts begin with instructions alert
  window.alert("Decide which types of characters to include in your generated password.");

  // Prompts user for desired password length
  do {
    var passwordLength = parseInt(window.prompt("First, choose a password length between 8-128 characters.", 8));
    userInputs.criteriaPasswordLength = passwordLength;
  } while (userInputs.criteriaPasswordLength < 8 || userInputs.criteriaPasswordLength > 128);

  // Prompts user with various criteria 
  for (var i = 0; i < userInputs.promptAnswers.length; i++) {
    console.log(hello);
  }

  if (!userChoices.criteriaLowercase && !userChoices.criteriaUppercase && !userChoices.criteriaNumeric && !userChoices.criteriaSpecialChar) {
      alert("You have to select at least one character type to generate a password.");
      promptSequence;
  }



  // Prompts for character types criteria
  var includeLowercase = confirm("Include lowercase letters in your custom password? (abc)");
  var includeUppercase = confirm("Include uppercase letters in your custom password? (ABC)");
  var includeNumeric = confirm("Include numbers in your custom password? (123)");
  var includeSpecialChar = confirm("Include special characters in your custom password? (!?*)");

  userInputs.promptAnswers.criteriaLowercase = includeLowercase;
  userInputs.promptAnswers.criteriaUppercase = includeUppercase;
  userInputs.promptAnswers.criteriaNumeric = includeNumeric;
  userInputs.promptAnswers.criteriaSpecialChar = includeSpecialChar;
}

/* GENERATE PASSWORD */
var generatePassword = function () {
  promptSequence();

  // Section for later use: final output to writePassword function
  var finalPassword = "Still Testing";
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
