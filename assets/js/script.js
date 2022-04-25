// Assignment code here
var userInputs = {
  criteriaPasswordLength: "",
  promptQuestions: {
    criteriaLowercase: "Include lowercase letters in your custom password? (abc)",
    criteriaUppercase: "Include uppercase letters in your custom password? (ABC)",
    criteriaNumeric: "Include numbers in your custom password? (123)",
    criteriaSpecialChar: "Include special characters in your custom password? (!?*)",
  },
  promptAnswers: {
    criteriaLowercase: false,
    criteriaUppercase: false,
    criteriaNumeric: false,
    criteriaSpecialChar: false,
  },
  savedCriteriaArr: [],
  newPassword: "Bogus_Code",
  randomizeType: function () {
    // possible way to select a random type for each char
  },
  randomizeChar: function () {
    // possible way to select a random char from type
  },
}
console.log(userInputs);

/* PASSWORD CRITERIA PROMPT */
var promptSequence = function () {
  var choices = userInputs.promptAnswers;

  // Prompts begin with instructions alert
  window.alert("Decide which types of characters to include in your generated password.");

  // Prompts user for desired password length
  do {
    var passwordLength = parseInt(window.prompt("First, choose a password length between 8-128 characters.", 8));
    userInputs.criteriaPasswordLength = passwordLength;
  } while (userInputs.criteriaPasswordLength < 8 || userInputs.criteriaPasswordLength > 128);

  // Prompts user with criteria options, reiterates through object length using Object.keys
  for (var i = 0; i < Object.keys(userInputs.promptAnswers).length; i++) {
    // Declares property key of each iteration through promptAnswers obj's index. (nested in obj userInputs)
    var criteriaAnswerKey = Object.keys(userInputs.promptAnswers)[i];
    console.log('Prompt for property: ' + criteriaAnswerKey + '. Expecting a boolean response.');
    // Declares the string value of each property.
    var criteriaQuestionText = userInputs.promptQuestions[criteriaAnswerKey];

    // Declaring response as a boolean forcing a prompt to capture criteria user choice
    var promptBooleanResponse = confirm(criteriaQuestionText);

    // Save user response to promptAnswers obj.
    var userAnswer = promptBooleanResponse;
    userInputs.promptAnswers[criteriaAnswerKey] = userAnswer;
    console.log('Answer given to ' + criteriaAnswerKey + ' is: ' + userAnswer + '\n');
    // Validates user input
    if (userAnswer) {
      alert('You\'ve chosen to include ' + criteriaAnswerKey + ' in your criteria. This will generate a stronger password.');
    } else {
      alert('You\'ve chosen NOT to include ' + criteriaAnswerKey + ' in your criteria. This will generate a weaker password and increases security threats.');
    }
  }

  console.log(userInputs.promptAnswers.criteriaLowercase);
  console.log(userInputs.promptAnswers.criteriaUppercase);
  console.log(userInputs.promptAnswers.criteriaNumeric);
  console.log(userInputs.promptAnswers.criteriaSpecialChar);

  // Validates if user selects at least 1 char type
  if (!choices.criteriaLowercase && !choices.criteriaUppercase && !choices.criteriaNumeric && !choices.criteriaSpecialChar) {
      alert("You have to select at least one character type to generate a password.");
      promptSequence();
  }
}

/* GENERATE PASSWORD */
var generatePassword = function () {
  promptSequence();

  // Section for later use: final output to writePassword function
  var finalPassword = userInputs.newPassword;
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
