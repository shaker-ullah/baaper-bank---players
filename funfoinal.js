document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('deposi')
const amount = getInputValue('deposit-input');
// console.log(amount)
if(amount>0){
    updateValue('deposit-total', amount);
updateBalance(amount, true);
}
})
function getInputValue(fieldId){
 const inputField = document.getElementById(fieldId);
 const valuesInText = inputField.value; 
 const value  = parseFloat(valuesInText);
 inputField.value = '';
 return value;
}

// update 
function updateValue (fieldId, amount){
// const totalTag = document.getElementById(fieldId);
// const totalTagValueText = totalTag.innerText;
// const totalTagValue = parseFloat(totalTagValueText);
const totalTagValue =getInnetTextValue(fieldId);
const newTotal = totalTagValue + amount;
document.getElementById(fieldId).innerText = newTotal;
}

// handal withdrew
document.getElementById('withdraw-btn').addEventListener('click',function(){
const amount = document.getElementById('withdraw-btn');
const balance = getInnetTextValue('balance-total');
if(amount >0 && amount <= balance){
    updateValue('withdraw-total', amount);
updateBalance(amount, false);
}
})
function getInnetTextValue(fieldId){
const fieldIdTag = document.getElementById(fieldId);
const fieldIdText = fieldIdTag.innerText;
const value = parseFloat(fieldIdText);
return value;
}

// update balance
function updateBalance(amount, isAdding){
    // const balanceTag = c;
    // const balanceInText = balanceTag.innerText;
    // const balance = parseFloat(balanceInText);
    const balance = getInnetTextValue('balance-total');
    let newBalance;
    if(isAdding == true){
         newBalance = balance + amount;
    }
    else{
         newBalance = balance - amount;
    }
   
    document.getElementById('balance-total').innerText = newBalance;
}