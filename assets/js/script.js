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

  // Prompts for character types criteria
  var charTypePrompts = function () {
    // Prompts user with criteria options, reiterates through object length using Object.keys
    for (var i = 0; i < Object.keys(userInputs.promptAnswers).length; i++) {
      // Declares property key of each iteration through promptAnswers obj's index. (nested in obj userInputs)
      var criteriaAnswerKey = Object.keys(userInputs.promptAnswers)[i];
      console.log('Prompt for property: ' + criteriaAnswerKey + '. Expecting a boolean response.');
      // Declares the string value of each property.
      var criteriaQuestionText = userInputs.promptQuestions[criteriaAnswerKey];

      // Declaring response as a boolean forcing a promptto capture criteria user choice
      var promptBooleanResponse = confirm(criteriaQuestionText);

      // Save user response to promptAnswers obj.
      var userAnswer = userInputs.promptAnswers[criteriaAnswerKey];
      userAnswer = promptBooleanResponse;
      console.log('Answer given to ' + criteriaAnswerKey + ' is: ' + userAnswer + '\n');
    }

    console.log(userInputs.promptAnswers.criteriaLowercase);
    console.log(userInputs.promptAnswers.criteriaUppercase);
    console.log(userInputs.promptAnswers.criteriaNumeric);
    console.log(userInputs.promptAnswers.criteriaSpecialChar);

    
    // // Character type prompts
    // var useLowercase = confirm("Include lowercase letters in your custom password? (abc)");
    // var useUppercase = confirm("Include uppercase letters in your custom password? (ABC)");
    // var useNumeric = confirm("Include numbers in your custom password? (123)");
    // var useSpecialChar = confirm("Include special characters in your custom password? (!?*)");
    // // Save answers into prompt object property: promptAnswers
    // userInputs.promptAnswers.criteriaLowercase = useLowercase;
    // userInputs.promptAnswers.criteriaUppercase = useUppercase;
    // userInputs.promptAnswers.criteriaNumeric = useNumeric;
    // userInputs.promptAnswers.criteriaSpecialChar = useSpecialChar;

    // Checks if user didn't select a single char type
    if (!choices.criteriaLowercase && !choices.criteriaUppercase && !choices.criteriaNumeric && !choices.criteriaSpecialChar) {
        alert("You have to select at least one character type to generate a password.");
        promptSequence();
    }
    
  }

  charTypePrompts();
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
