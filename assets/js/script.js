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
    combinedChars: "@123"
  },
  newPassword: "",
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
var combinedChars = userInputs.charTypes.combinedChars;
// Object with prompt sequence results 
var selectedCharTypes = userInputs.promptAnswers;

/* PASSWORD CRITERIA PROMPT */
var promptSequence = function () {
  // Prompts user for desired password length
  do {
    var passwordLength = parseInt(window.prompt("First, choose a password length between 8-128 characters.", 8));
    userInputs.criteriaPasswordLength = passwordLength;
  } while (userInputs.criteriaPasswordLength < 8 || userInputs.criteriaPasswordLength > 128);
  
  // Prompts begin with instructions alert
  window.alert("Decide which types of characters to include in your new password.");

  // Prompts user with criteria options, reiterates through object keys
  for (var i = 0; i < Object.keys(selectedCharTypes).length; i++) {
    // Declares property key of each iteration through promptAnswers obj's index. (nested in obj userInputs)
    var criteriaAnswerKey = Object.keys(selectedCharTypes)[i];
    console.log('Prompt for property: ' + criteriaAnswerKey + '.\nExpecting a boolean response.');
    // Declares the value of each property.
    var criteriaQuestionText = userInputs.promptQuestions[criteriaAnswerKey];

    // Declaring response as a boolean forcing a prompt to capture criteria user choice
    var promptBooleanResponse = confirm(criteriaQuestionText);

    // Save user response to promptAnswers obj.
    var userAnswer = promptBooleanResponse;
    selectedCharTypes[criteriaAnswerKey] = userAnswer;
    console.log('Answer given to ' + criteriaAnswerKey + ' is: ' + userAnswer);
    // Validates user input
    if (userAnswer) {
      alert(criteriaAnswerKey + ' included in criteria.\nThis will generate a stronger password.');
    } else {
      alert(criteriaAnswerKey + ' NOT included in criteria.\nThis will generate a weaker password with possible security threats.');
    }
    console.log(userInputs.charTypes);
  }

  // Validates if user selected at least 1 char type
  if (!selectedCharTypes.criteriaLowercase && !selectedCharTypes.criteriaUppercase && !selectedCharTypes.criteriaNumeric && !selectedCharTypes.criteriaSpecialChar) {
      alert("You must select at least one character type to continue.");
      promptSequence();
  }
}

/* COMBINES CHOSEN CHAR TYPES TO SINGLE PROPERTY OF CRITERIA */
var combineWantedChars = function () {
  // character type keys
  var charTypeKey = Object.keys(userInputs.charTypes);
  // Iterate through property's index length minus the last property (.combinedChars)
  for (var i = 0; i < (charTypeKey.length - 1); i++) {
    // If property value is true add its string to .combinedChars
    if (charTypeKey[i]) {
      combinedChars += userInputs.charTypes[charTypeKey[i]];
    }
  }
  console.log(combinedChars);
}

/* RANDOM STRING FUNCTION */
var genRandomChar = function () {
  // Iterate by user's chosen password length.
  for (var i = 0; i < userInputs.criteriaPasswordLength; i++) {
    // random number picks a character by index using charAt() then adds it to newPassword to form random string
    userInputs.newPassword += combinedChars.charAt(Math.floor(Math.random() * combinedChars.length));
  }
  console.log('New Generated Password: ' + userInputs.newPassword);
  // return(newPassword);
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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
