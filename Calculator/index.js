const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
       let expression = display.value;
       expression = expression.replace(/(\d+)%/g,"($1/100)");
       const isValid = /^[\d+\-*/().%]*$/.test(expression);
       if(isValid){
        display.value = new Function(`return ${expression}`)().tofixed(2);
       }else{
        display.value = "ERROR";
       }
    }
    catch(error){
        display.value = "ERROR";
    }
}
