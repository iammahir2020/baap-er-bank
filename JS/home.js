// code for handling deposit
document.getElementById('deposit-buttun').addEventListener('click',function(){
    //get amount to deposit
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = depositInput.value;
    depositAmount = parseInt(depositAmount);

    //update total deposit amount
    let depositCurrent = document.getElementById('deposit-total');
    let depTotal = depositAmount + parseFloat(depositCurrent.innerText);

    //update total balance amount
    let balanceCurrent = document.getElementById('balance-total');
    let balTotal = depositAmount + parseFloat(balanceCurrent.innerText);

    balanceCurrent.innerText = balTotal;
    depositCurrent.innerText = depTotal;

    depositInput.value = '';
})

// code for handling withdraw
document.getElementById('withdraw-buttun').addEventListener('click',function(){
    //get amount to withdraw
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmount = withdrawInput.value;
    withdrawAmount = parseInt(withdrawAmount);

    //update total withdraw amount
    let withdrawCurrent = document.getElementById('withdraw-total');
    let widTotal = withdrawAmount +  parseFloat(withdrawCurrent.innerText);

    //update total balance amount
    let balanceCurrent = document.getElementById('balance-total');
    let balTotal = parseFloat(balanceCurrent.innerText) - withdrawAmount;
    if(balTotal < 0){
        alert('You do not have sufficient fund');
        return;
    }

    balanceCurrent.innerText = balTotal;
    withdrawCurrent.innerText = widTotal;

    withdrawInput.value = '';
})