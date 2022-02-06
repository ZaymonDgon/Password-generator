// Grabbing the generate button, line 28
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // line 22 the paasword ID within the textarea
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

var RandomGen = {
  lowers: Lower,
  uppers: Upper,
  numbers: Pnumber,
  specials: Special
};

function Lower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)]
};
function Upper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)]
};
function Pnumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)]
};
function Special() {
  const special = '!@#$%^&*()_+{}[]/?><~';
  return special[Math.floor(Math.random() * special.length)]
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword 
// var askLenth = prompt("how long would you like you password to be. Please choose a number between 8 and 128.")


console.log(Pnumber())
console.log(Special())