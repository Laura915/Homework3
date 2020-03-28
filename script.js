// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Turns passwordText into a value to finally spit ot 
  passwordText.value = password;


}
function generatePassword(){
  
  var generatePassword;
    //criteria Questions
    var pwLengthSelector = prompt("How long would you like your password to be");
    var pwSpecialcounterarSelector = confirm("Would you like to include special counteraracters?");
    var pwNumSelector = confirm("Would you like to include numerical counteraracters?");
    var pwLowerCaseSelector = confirm("Would you like to include lowercase counteraracters?");
    var pwUpperCaseSelector = confirm("Would you like to include uppercase counteraracters?");
  
    //creat individual arrays with all counterar the user has acess
    var specialcounterarArray = ["!", ' " ', "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", "/", ":", ";", "<", "?", "@", "[", "]", "^", "_", "~"];
    var lowercaseArray = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y"];
    var UppercaseArray = ["A","B","C"	,"D","E"	,"F",	"G","H","I","J","K","L","M","N"	,"O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
    var numArray = [0,1,2,3,4,5,6,7,8,9,];

    var numPwLength = parseInt(pwLengthSelector);
    var firstArray = [];
     var finalArray;
  
    //generates random special counteraracter
    if (pwSpecialcounterarSelector == true) {
      firstArray = firstArray.concat(specialcounterarArray);
  
    } else { 

    }
  
    //genrates random number
    if (pwNumSelector == true) {
      firstArray = firstArray.concat(numArray);
    } else {
     
    }
    //genrates random lowercase letter
    if (pwLowerCaseSelector == true) {
      firstArray = firstArray.concat(lowercaseArray);
    } else {
      
    }
    //genrates random Uppercase letter
    if (pwUpperCaseSelector == true) {
      firstArray = firstArray.concat(UppercaseArray);
    }
    else {
      
    }

    //randomize final array/
    function shuffleArray(array){
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;

    }
    shuffleArray(firstArray);

    //This loop will cut the array or maybe try to to use a if statement to cut it 
    var cutArray= [];
    for (var i = 0; i < numPwLength; i++) {
      var counter;
      counter=firstArray[i];
      cutArray.push(counter);
    }
    console.log(cutArray);
    generatePassword=cutArray;
   
    finalArray=generatePassword.join("");
    console.log(finalArray);
  return finalArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);