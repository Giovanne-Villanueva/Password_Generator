// Assignment Code
var generateBtn = document.querySelector("#generate");
var capital, lowerCase, specialChar, containNum= false;
var Characters = ["~", "!", "@", ":", "<", ">", "\"", "?", "$", "#", "%"]

function options(){
  capital = confirm("Do you want Capital letters in your Password")
  lowerCase = confirm("Do you want Lower case letters in your Password")
  containNum = confirm("Do you want numbers in your Password")
  specialChar = confirm("Do you want Special Characters in your Password")
  if( !capital && !lowerCase && !specialChar && !containNum){
    alert("Please pick one Option")
    options();
  }
}

function randomNumber(max){
  return Math.floor(Math.random() *max)
}

function fourOptions(){
  var pick = randomNumber(4);
  var char
  if( (pick===0) && lowerCase){
    char = String.fromCharCode( (97 + randomNumber(25)) )
    console.log("I am from here " + char)
    return char
  }
  else if((pick===1) && capital){
    char = String.fromCharCode( (65+ randomNumber(25)) )
    console.log(char)
    return char
  }
  else if( (pick===2) && containNum){
    char = String.fromCharCode( (48 + randomNumber(9)) )
    console.log( char )
    return char
  }
  else if( (pick===3) && specialChar){
    char = Characters[ randomNumber( (Characters.length - 1) ) ]
    console.log( char )
    return char
  }
  else{
    return fourOptions()
  }
}

function randomChar(length){
  //Make an array to hold passward
  var password = ""
  var range, char
  //Check to see what number range we can pick from based on options function
  
  //genrate a random number length x number of times to make password
  for(var i=0; i< length; i++){
    password = password.concat(fourOptions())
    //console.log(password[i])
  }
  
  return password
}

function generatePassword(){

  var length = Number(prompt("Please enter the passward length you want", "Enter a number"))
  console.log("Why " +length)
  if(isNaN(length)){
    return ("Canceled Process")
  }
  var temp
  while ( (typeof(length)  != "number")  || (length < 8) || (length > 128) ){
    length = Number(prompt("PLease enter a number greater than 8 but less than 128", "Enter a number"))
    if(isNaN(length)){
      return ("Canceled Process")
    }
  }
  
  options();
  temp = randomChar(length);
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
