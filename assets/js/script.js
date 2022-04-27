/* PASSWORD OBJECT */
var userInputs = {
  criteriaPasswordLength: "",
  promptQuestions: {
    criteriaLowercase: "Would you like to include lowercase letters in your custom password? (abc)",
    criteriaUppercase: "Would you like to include uppercase letters in your custom password? (ABC)",
    criteriaNumeric: "Would you like to include numbers in your custom password? (123)",
    criteriaSpecialChar: "Would you like to include special characters in your custom password? (!?*)",
  },
  promptAnswers: {
    criteriaLowercase: false,
    criteriaUppercase: false,
    criteriaNumeric: false,
    criteriaSpecialChar: false,
  },
  charTypes: {
    lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
    uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numericCharacters: "0123456789",
    specialCharacters: "~!@#$%^&*()_+=-",
    combineIntoPassword: ""
  },
  newPassword: "OUT OF ORDER",
  randomizeType: function () {
    // possible way to select a random type for each char
  },
  randomizeChar: function () {
    // possible way to select a random char from type
  },
} 
console.log(userInputs);

/* INITIALIZE GLOBAL VARIABLES */
// Property which holds user's choices (string)
var chosenChars = userInputs.charTypes.combineIntoPassword;
// Object with prompt sequence results 
var choices = userInputs.promptAnswers;

/* PASSWORD CRITERIA PROMPT */
var promptSequence = function () {
  // Prompts user for desired password length
  do {
    var passwordLength = parseInt(window.prompt("First, choose a password length between 8-128 characters.", 8));
    userInputs.criteriaPasswordLength = passwordLength;
  } while (userInputs.criteriaPasswordLength < 8 || userInputs.criteriaPasswordLength > 128);
  
  // Prompts begin with instructions alert
  window.alert("Decide which types of characters to include in your new password.");

  // Prompts user with criteria options, reiterates through object length using Object.keys
  for (var i = 0; i < Object.keys(choices).length; i++) {
    // Declares property key of each iteration through promptAnswers obj's index. (nested in obj userInputs)
    var criteriaAnswerKey = Object.keys(choices)[i];
    console.log('Prompt for property: ' + criteriaAnswerKey + '.\nExpecting a boolean response.');
    // Declares the string value of each property.
    var criteriaQuestionText = userInputs.promptQuestions[criteriaAnswerKey];

    // Declaring response as a boolean forcing a prompt to capture criteria user choice
    var promptBooleanResponse = confirm(criteriaQuestionText);

    // Save user response to promptAnswers obj.
    var userAnswer = promptBooleanResponse;
    choices[criteriaAnswerKey] = userAnswer;
    console.log('Answer given to ' + criteriaAnswerKey + ' is: ' + userAnswer + '\n');
    // Validates user input
    if (userAnswer) {
      alert('You\'ve chosen to include ' + Object.keys(choices)[i] + ' in your criteria. This will generate a stronger password.');
    } else {
      alert('You\'ve chosen NOT to include ' + Object.keys(choices)[i] + ' in your criteria. This will generate a weaker password and increases security threats.');
    }
  }

  console.log(choices.criteriaLowercase);
  console.log(choices.criteriaUppercase);
  console.log(choices.criteriaNumeric);
  console.log(choices.criteriaSpecialChar);

  // Validates if user selects at least 1 char type
  if (!choices.criteriaLowercase && !choices.criteriaUppercase && !choices.criteriaNumeric && !choices.criteriaSpecialChar) {
      alert("You're required to select at least one character type to generate a password.");
      promptSequence();
  }
}

/* COMBINES CHOSEN USER CRITERIAS TO SINGLE PROPERTY */
var combineWantedChars = function () {
  // character type object
  var charTypeKey = Object.keys(userInputs.charTypes);
  // Each character type object property, index is iterated through
  // For each obj property in charTypes except the last (wantedCharTypes) gets iterated through
  for (var i = 0; i < (charTypeKey.length - 1); i++) {
    // If property value is true concatonate to wantedCharTypes
    if (charTypeKey[i]) {
      chosenChars.concat(charTypeKey[i]);
      console.log("zzzzzzz")
    }
  }
  console.log(chosenChars);
}

/* GENERATE RANDOM CHARACTER */
var genRandomChar = function () {
  userInputs.newPassword += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
  console.log('Random Character: ' + userInputs.newPassword);
}

/* GENERATE PASSWORD */
var generatePassword = function () {
  // ask pw criteria
  promptSequence();
  // combine selected criteria into a single string
  combineWantedChars();
  // select a random character from combined string
  genRandomChar();
  
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
  console.log('Password Displayed: ' + passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
