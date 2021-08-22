// get input value

function getValue(inputId) {
    const inputBox = document.getElementById(inputId);
    const inputBoxText = inputBox.value;
    const inputNum = parseFloat(inputBoxText);

    inputBox.value = '';
    return inputNum;
}

// get inner Text 
function getText(amountId) {
    const amountField = document.getElementById(amountId);
    const fieldText = amountField.innerText;
    const field = parseFloat(fieldText);
    return field;
}

// get total in own field 
function getAmount(amountId, amounts) {
    const amount = getText(amountId);
    const totalAmount = amount + amounts;
    document.getElementById(amountId).innerText = totalAmount;

}

// update total balance 
function totalAmount(total, iscrease) {
    const totalBalance = getText('total-balance');
    let newBalance;
    if (iscrease == true) {
        newBalance = totalBalance + total;
    }
    else {
        newBalance = totalBalance - total;
    }
    document.getElementById('total-balance').innerText = newBalance;
}

// deposit handler 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depoAmount = getValue('deposit-input');
    if (depoAmount > 0) {
        getAmount('deposit-amount', depoAmount);
        totalAmount(depoAmount, true);
    }

})

// withdraw handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getValue('withdraw-input');
    const balance = getText('total-balance');
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        getAmount('withdraw-amount', withdrawAmount);
        totalAmount(withdrawAmount, false);
    }
})