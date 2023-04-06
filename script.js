// Assignment Code
var generateBtn = document.querySelector("#generate");
var capital, lowerCase, specialChar, containNum= false;
var Characters = ["~", "!", "@", ":", "<", ">", "\"", "?", "$", "#", "%", " ", "&", "'", "(", ")", "*", "+", "-", ",", "\\", "/", ";", "=", "[", "]", "_", "^", "`", "{", "}"]

function options(){
  // We ask the user if they would to include said character type
  capital = confirm("Do you want Capital letters in your Password")
  lowerCase = confirm("Do you want Lower case letters in your Password")
  containNum = confirm("Do you want numbers in your Password")
  specialChar = confirm("Do you want Special Characters in your Password")

  //if all options asked are no or false ask the user again to say yesor true to one option 
  if( !capital && !lowerCase && !specialChar && !containNum){
    alert("Please pick one Option")
    options();
  }
}

//Generate a random number 0 to max number
function randomNumber(max){
  return Math.floor(Math.random() *max)
}

function fourOptions(){
  //We pick a random number to signify the type of character we are going to generate
  var pick = randomNumber(4);
  var char

  //Check to see if the type of character chosen is avalible based on options chosen by user
  //if yes return character 
  if( (pick===0) && lowerCase){
    char = String.fromCharCode( (97 + randomNumber(25)) )
    return char
  }
  else if((pick===1) && capital){
    char = String.fromCharCode( (65+ randomNumber(25)) )
    return char
  }
  else if( (pick===2) && containNum){
    char = String.fromCharCode( (48 + randomNumber(9)) )
    return char
  }
  else if( (pick===3) && specialChar){
    char = Characters[ randomNumber( (Characters.length - 1) ) ]
    return char
  }
  //else chose another avalible option
  else{
    return fourOptions()
  }
}

function randomChar(length){
  //Make a string to hold our password
  var password = ""

  //generate a random character length number of times and add it to the string to make the password
  for(var i=0; i< length; i++){
    password = password.concat(fourOptions())
  }
  
  //return password generated
  return password
}

function generatePassword(){
  var temp
  //Ask user for password length
  var length = Number(prompt("Please enter the password length you want", "Enter a number"))
  console.log("Why " +length)

  //make sure the data entered is valid
  //The user put in no input or hits cancel
  if(isNaN(length) || (length === 0)){
    return ("Canceled Process")
  }

  //if the user does not put a vaild length ask the user again for proper length
  while ( (typeof(length)  != "number")  || (length < 8) || (length > 128) ){
    length = Number(prompt("PLease enter a password length greater than 8 but less than 128", "Enter a number"))
    if(isNaN(length) || (length === 0)){
      return ("Canceled Process")
    }
  }
  
  //We ask the user what type of characters they would want in their password
  options();

  //We must produce a password based on options and length answered by the user
  temp = randomChar(length);

  //We return the password generated
  return temp
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
