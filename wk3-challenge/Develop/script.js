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

// window.alert("Enter Length Of Passowrd")
// var pwLength = prompt("Enter the length of password:")
// window.alert("You have entered: " + pwLength)
// window.alert("Do you want to include special characters?")
// window.alert("What types of characters do you want to include?")
// // Types: lowercase, uppercase, numeric, and/or special characters
// window.alert("You have chosen: ")
// window.alert("Here comes the password!!")
// window.alert("password")