const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultTextElement = document.getElementById("result");

let isPalindrome = false;

const checkPalindrome = () => {
  isPalindrome = false;
  const inputText = inputField.value.trim();
  if (inputText === "") {
    alert("Please input a value");
  } else {
    const cleanedText = removeUnwantedCharacters(inputText);
    checkPalindromeChars(cleanedText);
    displayResult();
}
}
const removeUnwantedCharacters = (str) => {
  const regex = /[_().,-\/:\|\s]/gi;
  return str.replace(regex, "").toLowerCase();
}

const checkPalindromeChars = (str) => {
  if (str === str.split('').reverse().join('')) {
    isPalindrome = true;
  }
}

const displayResult = () => {
  resultTextElement.style.display = "block";
  resultTextElement.innerText = `${inputField.value}` + `${isPalindrome ? ' is' : ' is not'}` + " a palindrome";
}

checkButton.addEventListener("click", checkPalindrome);
