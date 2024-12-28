let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash");
const purchaseBtn=document.getElementById("purchase-btn");
const priceScreenDisplay=document.getElementById("price-screen-display");
const changeDueDisplay=document.getElementById("change-due");
const cashDrawerDisplay=document.getElementById("cash-drawer-display");

const displayCurrentStatus=(status, change)=>{
  changeDueDisplay.innerHTML = `Status: ${status}`;
  changeDueDisplay.innerHTML += change.map(
    ([faceValueName,amount])=>
    `<p>${faceValueName}: $${amount}</p>`
  ).join("");
}

const updateCashDrawerDisplay=(change)=>{
  const faceValueNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  if(change){
    change.forEach(([changedFaceValueName,changedAmount])=>{
      const targetToChangeCid = cid.find(([faceValueName])=>faceValueName===changedFaceValueName);
      targetToChangeCid[1]=(Math.round(targetToChangeCid[1] * 100) - Math.round(changedAmount * 100))/100
    })
    
  }

  cash.value="";
  priceScreenDisplay.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer</strong></p>
  ${cid.map(([faceValueName, amount])=>`<p>${faceValueNameMap[faceValueName]}: $${amount}</p>`).join("")}`;
}

const compareChangeDueWithCashDrawer =(changeDue)=>{
  const reversedCid = [...cid].reverse().map(([faceValue,amount])=>[faceValue , Math.round(amount * 100)]);
  const faceValues=[10000,2000,1000,500,100,25,20,5,1];
  const totalCid = reversedCid.reduce((acc,el)=>acc+el[1],0);
  let currentStatus = {status:"OPEN", change:[]};

  if(changeDue > totalCid){
    changeDueDisplay.innerHTML=`<p>Status: INSUFFICIENT_FUNDS</p>`;
    return;
  }
  if(changeDue === totalCid){
    currentStatus.status = "CLOSED";
  }

  for(let i = 0;i < reversedCid.length;i++){
    if(changeDue >= faceValues[i] && changeDue > 0){
      const [faceValueName,totalAmount] = reversedCid[i];
      const possibleChange = Math.min(totalAmount,changeDue);
      const faceValueCount = Math.floor(possibleChange / faceValues[i]);
      const amountToChange = faceValueCount * faceValues[i];
      changeDue -= amountToChange;
      if(faceValueCount > 0){
        currentStatus.change.push([faceValueName,amountToChange/100]);
      }
    }
  }
  if(changeDue > 0){
    changeDueDisplay.innerHTML=`<p>Status: INSUFFICIENT_FUNDS</p>`;
    return;
  }

  displayCurrentStatus(currentStatus.status, currentStatus.change);
  updateCashDrawerDisplay(currentStatus.change);
}

const compareCashWithPrice=()=>{
  const cashDollarsToCents = Math.round(Number(cashInput.value) * 100);
  const priceDollarsToCents = Math.round(price * 100);
  if(cashDollarsToCents < priceDollarsToCents){
    alert("Customer does not have enough money to purchase the item");
    cashInput.value = "";
    return;
  }
  if(cashDollarsToCents === priceDollarsToCents){
    changeDueDisplay.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    cashInput.value = "";
    return;
  }

  const changeDueAmount = cashDollarsToCents - priceDollarsToCents;
  compareChangeDueWithCashDrawer(changeDueAmount);
}

const checkCashInput=()=>{
  if(!cashInput.value){
    alert("Please enter cash!");
    return;
  }else{
    compareCashWithPrice();
  }
}

purchaseBtn.addEventListener("click",checkCashInput);
cashInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    checkCashInput();
  }
})
updateCashDrawerDisplay();
