const passwordResult = document.getElementById("passwordResult");
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars= "0123456789";
const symbolChars = "!@#$%^&*()_+=|?><:;~";
let totalChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;
document.getElementById("generatePassword").onclick = function(){
    passwordResult.textContent = "";
    let password = "";
    const numOfPassword = document.getElementById("numOfPassword").value;
    for(let i = 0; i < numOfPassword; i++){
        let randomIndex = Math.floor(Math.random()*totalChars.length);
        password += totalChars[randomIndex];
    }
    passwordResult.textContent = `password: ${password}`;
}
