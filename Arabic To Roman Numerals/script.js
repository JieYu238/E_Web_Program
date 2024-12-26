const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const outputMsg=document.getElementById("output");


convertBtn.addEventListener("click",()=>{
  startToConvert();
  numberInput.value="";
}
  );
numberInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    startToConvert();
    numberInput.value="";
  }
})

const startToConvert =()=>{
  output.classList.remove("hidden");
  outputMsg.innerText = "";
  output.classList.remove("alert");
  const inputParseToInt =parseInt(numberInput.value);
  if(isValidNumberInput(inputParseToInt)){
    output.innerText = convertToRoman(inputParseToInt);
  }
}

const isValidNumberInput =(int)=>{
  let errorMsg="";
  if(!numberInput.value){
    errorMsg = "Please enter a valid number";
  }else if(int < 1){
    errorMsg = "Please enter a number greater than or equal to 1";
  }else if(int > 3999){
    errorMsg = "Please enter a number less than or equal to 3999";
  }else{
    return true;
  }
  outputMsg.innerText = errorMsg;
  output.classList.add("alert");
  return false;
}

const convertToRoman = (num)=>{
  // if(int >= 1000) return 'M' + convertToRoman(int - 1000);
  // if(int >= 900) return 'CM' + convertToRoman(int - 900);
  // if(int >= 500) return 'D' + convertToRoman(int - 500);
  // if(int >= 400) return 'CD' + convertToRoman(int - 400);
  // if(int >= 100) return 'C' + convertToRoman(int - 100);
  // if(int >= 90) return 'XC' + convertToRoman(int - 90);
  // if(int >= 50) return 'L' + convertToRoman(int - 50);
  // if(int >= 40) return 'XL' + convertToRoman(int - 40);
  // if(int >= 10) return 'X' + convertToRoman(int - 10);
  // if(int >= 9) return 'IX' + convertToRoman(int - 9);
  // if(int >= 5) return 'V' + convertToRoman(int - 5);
  // if(int >= 4) return 'IV' + convertToRoman(int - 4);
  // if(int >= 1) return 'I' + convertToRoman(int - 1);

  const romanNumeralsTable = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  const arabicNumeralsTable = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let result='';
  for(let index = 0; num>0;index++){
    while(num >= arabicNumeralsTable[index]){
      num -= arabicNumeralsTable[index];
      result += romanNumeralsTable[index];
    }
  }
  return result;
}





