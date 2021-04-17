// Arrays to pull from to generate a random password
var numArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specArray = ['!','@','#','$','%','&','?','(',')','"',',','*','+','>','<','-','=','/',';',':','_','^','[',']','{','}','|','`','~','.',',',"'",
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
var allArray = ['!','@','#','$','%','&','?','(',')','"',',','*','+','>','<','-','=','/',';',':','_','^','[',']','{','}',
'|','`','~','.',',',"'",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
var usArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','&','?','(',')','"',
',','*','+','>','<','-','=','/',';',':','_','^','[',']','{','}','|','`','~','.',',',"'"];
var nsArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','&','?','(',')','"',',','*','+','>','<','-','=','/',';',':','_','^','[',']','{','}','|','`','~','.',',',"'"];
var unArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];






//the entire function to generate a random password
function generatePassword(){
  //variables to hold all of the user input criteria
 


  //first prompt about length
  var inputLength = prompt('Please set the password length');
  var confirmLength = parseInt(inputLength);
  console.log(confirmLength);
  //check to see if the input matches the criteria
  if (confirmLength >= 8 && confirmLength <=128){
    
    //if the input criteria is met, then prompt for uppercase letters
    var confirmUp = confirm('Would you like to include uppercase letters?');
    
    //then prompt for numbers
    var confirmNum = confirm('Would you like to include numbers?');

    //then prompt about special characters
    var confirmSpec = confirm('Would you like to include special characters?'); 
    
    // if user wants all three criteria
    if (confirmUp && confirmSpec && confirmNum){
      for (var i = 0; i < allArray; i++){
        var num = Math.floor(Math.random(allArray) * confirmLength) + 1;
        console.log(num);
      }
    }
    // if user wants only uppercase and numbers
    else if(confirmUp && confirmNum){

    }
    // upper and spec
    else if(confirmUp && confirmSpec){

    }
    // special and numbers
    else if(confirmSpec && confirmNum){

    }
    //just upper
    else if (confirmUp){

    }
    //just special
    else if(confirmSpec) {

    }
    //just numbers
    else if (confirmNum){

    }
    //just lowercase
    else {

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