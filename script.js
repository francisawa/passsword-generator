///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
var numberChars = ['0','1','2','3','4','5','6','7','8','9']
var lowerChars = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var upperChars = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var specialChars = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
function generatePassword(){

  var passLength = prompt("how many characters long do you want your password to be")
  passLength = parseInt(passLength)
  if (passLength < 8 || passLength > 128)
  {
    alert("password needs to be greater than 8 but less than 128")
  }
  //Checks for the if statements
  var addNumber =confirm("do you want to add numbers")
  var addLowercase =confirm("do you want to  lowercase Characters")
  var addUppercase =confirm("do you want to uppercharacters")
  var addSpecialcharacters = confirm("do you want to add special characters")
  var passwordArr = []
  var guranteedCharcacters = []

  //If they want numbers
  if(addNumber === true) {
    //get a random number
    var num = randomize(numberChars)
    //push to the password array
    passwordArr.push(num)
    //concat the number array into guranteedChars
    guranteedCharcacters = guranteedCharcacters.concat(numberChars)
  }
  
  //If they want lowercase
  if(addLowercase === true) {
    //get a random number
    var char = randomize(lowerChars)
    //push to the password array
    passwordArr.push(char)
    //concat the number array into guranteedChars
    guranteedCharcacters = guranteedCharcacters.concat(lowerChars)

  } 

  //If they want uppercase
  if(addUppercase === true) {
    //get a random number
    var char = randomize(upperChars)
    //push to the password array
    passwordArr.push(char)
    //concat the number array into guranteedChars
    guranteedCharcacters = guranteedCharcacters.concat(upperChars)
  }
  
  //i
  if(addSpecialcharacters === true) {
    //get a random number
    var char = randomize(specialChars)
    //push to the password array
    passwordArr.push(char)
    //concat the number array into guranteedChars
    guranteedCharcacters = guranteedCharcacters.concat(specialChars)
  } 
  console.log(passwordArr)
  //for loop passlength + randomize(guranteedCharacters)
  while(passwordArr.length < passLength){
    //get a random number
    var char = randomize(guranteedCharcacters)
    console.log(guranteedCharcacters)
    console.log(char)
    //push to the password array
    passwordArr.push(char)
  }
  
  var password = passwordArr.join("")
  return password;
}

function randomize(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}