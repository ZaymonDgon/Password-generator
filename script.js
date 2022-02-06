// Grabbing the generate button, line 28
var generate = document.querySelector("#generate");

// Add event listener to generate button
generate.addEventListener("click", function () {
  securePassword = createPassword();
  document.getElementById('password').placeholder = securePassword

};
// Write password to the #password input
// make sure you do the promt for the numbers
// then use the random the criteria to make sure that it is being confirm
//make an empty array for criteria
// make an empty array fpor securePassword
// join what the criteria is to the opasss word
// look at jon & joses stuff to make sure ivt works
 
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
   
}

// generatePassword 
// var askLenth = prompt("how long would you like you password to be. Please choose a number between 8 and 128.")


// console.log(Pnumber())
// console.log(Special())