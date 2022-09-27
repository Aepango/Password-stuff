// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var output = document.getElementById("password")
var little = "abcdefghijklmnopqrstuvwxyz".split("")
var big = "ABCDEFGHIJKLMNOPQURSUVWXYZ".split("")
var number = "1234567890".split("")
var symbols = "!@#$%^&*()?/.".split("")
// Write password to the #password input
function writePassword() {
  var before = []
  var after = ""
  var passwordlength = prompt("Password need to be 8-128 characters")
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password does not meet criteria please try again.")
  } else {
    if (confirm("would you like to add symbols")) {
      before = before.comcat(symbols)
    }
    if (confirm("would you like to add lowercase")) {
      before = before.comcat(little)
    }
    if (confirm("would you like to add uppercase")) {
      before = before.comcat(big)
    }
  } if (confirm("would you like to add numbers")) {
    before = before.comcat(number)
  }
  if (before.length === 0) {
    alert("please select an option above")
  }
  else {
    for (let i = 0; i < passwordlength; i++) {
      var random = Math.floor(Math.random() * before.length)
      after += before[random]

    }
  }
  output.innerHTML = after
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
