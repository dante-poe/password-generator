// Arrays
var numArray = [0,1,2,3,4,5,6,7,8,9];
var lowArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specArray = ['!','@','#','$','%','&','?',]; 

// randomize arrays
var randomLower = lowArray[Math.floor(Math.random() * lowArray.length)];
var randomUpper = upArray[Math.floor(Math.random() * upArray.length)];
var randomNumber = numArray[Math.floor(Math.random() * numArray.length)];
var randomSpecial = specArray[Math.floor(Math.random() * specArray.length)];


function generatePassword(){
  
  //prompts
  var passLength = prompt ('How long should the password be?')
  passLength = passLength
  
  var passCritNum = confirm('Would you like to include numbers to the password?')
  passCritNum
  
  var passCritSpec = confirm('Would you like to include special characters?')
  passCritSpec
  
  var passCritUp = confirm ('Would you like to include uppercase letters?')
  passCritUp

  if (passLength >= 8 || passLength <= 128){
    
  }


  //display// 
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generate.addEventListener("click", writePassword)