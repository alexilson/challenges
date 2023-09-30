// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//My code

// Declare function to get user input and generate pw, used in writePassword function
function generatePassword() {

  // initalize variables for use in the function.
  // builtPw will hold the completed password.
  // choiceSet will hold the set of characters for password construction chosen by the user.
  var builtPw = "";
  var choiceSet = "";
  
  // Create object with properties that will prompt for character sets and store each choice.
  // It also contains the function that builds the password.
  var pwCriteria = {

    // Each option has a name used in the prompt, the input from the prompt (default to n), and the associated char set.
    options: {
      0: {
        name: "Lowercase",
        selected: "n",
        set: "abcdefghijklmnopqrstuvwxyz"
      },
      1: {
        name: "Uppercase",
        selected: "n",
        set: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      2: {
        name: "Numeric",
        selected: "n",
        set: "0123456789"
      },
      3: {
        name: "Special",
        selected: "n",
        set: "!@#$%^&*"
      }
    },

    // Ask for password length to display on the prompt and use in the build.
    pwLength: prompt("How long would you like the password to be? Enter a number between 8 and 128."),
    
    // Ask for each of the options and store it in this object under the appropriate property.
    // Converts input to uppercase.
    // Displays pwLength at the top of the prompt.
    pwCharsTypes() {
      for (var i = 0; i < Object.keys(this.options).length; i++) {
        this.options[i].selected = prompt("Password length selected: " + this.pwLength + 
          "\nEnter Y or N if you would like to include " + this.options[i].name + " characters.").toUpperCase();
        alert("You have chosen: " + this.options[i].selected + " for " + this.options[i].name + " characters.");
      }
    },

    // Builds the character set based on the selected options, then builds the password.
    // Selects a random number between 0 and the length of the chosen set, then adds the character at
    // that location in the chosen set string to the builtPw string. Repeats until it reaches the pwLength.
    pwCreation() {
      for (var j = 0; j < Object.keys(this.options).length; j++) {
        if (this.options[j].selected == "Y") {
          choiceSet += this.options[j].set;
        }
        else {
          continue;
        }
      }
      for (var i = 0; i < this.pwLength; i++) {
        builtPw += choiceSet[(Math.floor((Math.random() * choiceSet.length)))]
      }
    }
  };
  
  // Run the method to ask for the choices
  pwCriteria.pwCharsTypes();

  // Run the method to build the password
  pwCriteria.pwCreation();

  return builtPw;
}