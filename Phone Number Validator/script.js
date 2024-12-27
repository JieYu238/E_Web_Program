const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div")
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const clearOutputMsg=()=>{
  resultDiv.textContent = "";
}
const checkInput=()=> {
  if(userInput.value){
    isValidPhoneFormat();
    showResultText();
  }else{
    alert("Please provide a phone number");
  }
}
const isValidPhoneFormat=()=>{
  const regex1 = /^(1\s?)?(\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;
  const regex2 = /^(1\s?)?(\(\d{3}\)[-\s]?)\d{3}[-\s]?\d{4}$/;
  return regex1.test(userInput.value) || regex2.test(userInput.value);
}
const showResultText=()=>{
  resultDiv.textContent=`${isValidPhoneFormat()? 'Valid' : 'Invalid'}`+' US number: '+`${userInput.value}`;
}

checkBtn.addEventListener("click",()=>{
  checkInput();
  userInput.value="";
});
clearBtn.addEventListener("click",clearOutputMsg);
