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

choiceSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// declare function to get user input and generate pw, used in writePassword function
function generatePassword() {

  builtPw = "";
  
  // create object with properties that will prompt for criteria and store it
  var pwCriteria = {

    // These are the choices the user will make
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

    // Ask for length
    pwLength: prompt("How long would you like the password to be? Enter a number between 8 and 128."),
    
    // ask for each of the options and store it in this object using the option name as the key
    pwSpecialChars() {
      for (var i = 1; i < Object.keys(this.options).length; i++) {
        this[this.options[i].name] = prompt("Enter Y or N if you would like to include " + this.options[i].name + " characters.");
      }
    },

    pwCreation() {
      for (var i = 1; i < this.pwLength; i++) {
        builtPw += choiceSet[(Math.floor((Math.random() * choiceSet.length)))]
      }
    }
  };
  
  // Run the method to ask for the choices
  pwCriteria.pwSpecialChars();
  pwCriteria.pwCreation();

  return builtPw;
}