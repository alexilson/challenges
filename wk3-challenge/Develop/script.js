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

// declare function to get user input and generate pw, used in writePassword function
function generatePassword() {

  // create object with properties that will prompt for criteria and store it
  var pwCriteria = {

    // These are the choices the user will make
    options: ["Lowercase", "Uppercase", "Numeric", "Special"], 

    // Ask for length
    pwLength: prompt("How long would you like the password to be? Enter a number between 8 and 128."),
    
    // ask for each of the options and store it in this object using the option name as the key
    pwSpecialChars() {
      for (var i = 1; i < this.options.length; i++) {
        this[this.options[i]] = prompt("Enter Y or N if you would like to include " + this.options[i] + " characters.");
      }
    }
  };
  
  // Run the method to ask for the choices
  pwCriteria.pwSpecialChars();

  // Return the whole object i guess?
  return pwCriteria;
}