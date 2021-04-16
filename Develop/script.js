// Arrays to pull from to generate a random password
var numArray = [0,1,2,3,4,5,6,7,8,9];
var lowArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specArray = ['!','@','#','$','%','&','?','(',')','"',',','*','+','>','<','-','=','/',';',':','_','^','[',']','{','}','|','`','~','.',',',"'"]; 



// randomize arrays
// var randomLower = lowArray[Math.floor(Math.random() * lowArray.length)];
// var randomUpper = upArray[Math.floor(Math.random() * upArray.length)];
// var randomNumber = numArray[Math.floor(Math.random() * numArray.length)];
// var randomSpecial = specArray[Math.floor(Math.random() * specArray.length)];


//the entire function to generate a random password
function generatePassword(){
  //variables to hold all of the user input criteria
 


  //first prompt about length
  var inputLength = prompt('Please set the password length');
  var confirmLength = parseInt(inputLength);
  
  //check to see if the input matches the criteria
  if (confirmLength >= 8 && confirmLength <=128){
    
    //if the input criteria is met, then prompt for uppercase letters
    var confirmUp = confirm('Would you like to include uppercase letters?');
    
    //then prompt about special characters
    var confirmSpec = confirm('Would you like to include special characters?'); 
    
    // if user wants both uppercase and special characters
    if (confirmUp && confirmSpec){
      //generate a password using every array
    }
    // if user wants only uppercase and no special characters
    else if(confirmUp){

    }
    // if user only wants special characters and no uppercase
    else if(confirmSpec){

    }
    // if user wants to include neither
    else{

    }
  }
  //if the user hits cancel on the first prompt, end the function.
  else if (inputLength === null){
    return;
  }
  //alert user that the input did not match criteria
  else {
    alert('Password must be between 8 and 128 characters!')    
    writePassword();
  }  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generate.addEventListener("click", writePassword)