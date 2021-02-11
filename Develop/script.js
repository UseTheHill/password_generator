// Assignment Code
var generateBtn = document.querySelector("#generate");

let alphabetSmall = "abcdefghijklmnopqrstuvqxyz";
let alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()_+-=[]{}|\?><,/;':";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log (password);
  passwordText.value = password;
}

function generatePassword() {
  //setting variables that will generate the password

  let strength = prompt("How strong do you want your password to be? Please choose the number of characters, between 8-128 characters.");

  if (strength >= 8 && strength <= 128) {
    let alpha = confirm ("Do you want lowercase letters? Click OK for yes, Cancel for no.");
    let alphaResult = "";

    let upper = confirm("Do you want uppercase letters? Click OK for yes, Cancel for no.");
    let upperResult = "";

    let int = confirm("Do you want to include a number in your password? Click OK for yes, Cancel for no.");
    let intResult = "";

    let char = confirm("Do you want a special character included? Click OK for yes, Cancel for no.");
    let charResult = "";

    let genPassword = alphaResult + upperResult + intResult + charResult;

    for (let i = 0; i < parseInt(strength); i++) {
      // console.log(alphaResult) 
      if(alpha) {
        alphaResult += alphabetSmall.charAt(Math.floor(Math.random() * alphabetSmall.length));
      }
      //console.log(upperResult)
      if(upper) {
        upperResult += alphabetCaps.charAt(Math.floor(Math.random() * alphabetCaps.length));
      }
      //console.log(intresult)
      if (int) {
        intResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
     //console.log (charResult)
      if (char) {
        charResult += special.charAt(Math.floor(Math.random() * special.length));
      }
      

      if (alpha) { genPassword += alphaResult.charAt(i); }
      if (upper) { genPassword += upperResult.charAt(i); }
      if (int) { genPassword += intResult.charAt(i); }
      if (char) { genPassword += charResult.charAt(i); };
    }
  
    if (!alpha && !upper && !int && !char) {
      alert("You must choose an option.");
    } 
    // log results of these options
    // genPassword witll scramble to give finalPassword
    // resize finalPassword to the size that the user indicated.
    console.log(alphaResult, upperResult, intResult, charResult);

    let userPassword = genPassword.substring(0, strength);
    let finalPassword = userPassword.split('').sort(function() {return 0.5 - Math.random() }).join('');

    console.log(genPassword);
    console.log(userPassword);

    return finalPassword;

  } else {
    alert("Please input a number from 8 - 128."); // Will alert if conditions are outside the 8 - 128 strength of password
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
