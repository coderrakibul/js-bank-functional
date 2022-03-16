//prothome button ke even dici
document.getElementById("deposit-button").addEventListener("click", function () {
    // tarpor input er text ke dhore anci
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // tarpor jekhane deposit jog hobe setake dhorci
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositPreviousTotal = parseFloat(depositTotalText);

    // akhon deposit total er innertext a amader input value ke pass korci
    depositTotal.innerText = depositAmount;

    // akhane deposit innertext er sathe amount ta jog korci
    depositTotal.innerText = depositPreviousTotal + depositAmount;

    //akhon balance total ke niye number a contver korte hobe
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balancePreviousTotal = parseFloat(balanceTotalText);

    //akhon balance update korte hobe
    balanceTotal.innerText = balancePreviousTotal + depositAmount;

    // akhon input er text ke khali korte hobe
    depositInput.value = "";

});

//withdraw button event handle

document.getElementById("withdraw-button").addEventListener("click", function () {
    // withdraw er input ke nici
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw er input er sathe withdraw total ke jog kore dici
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + withdrawPreviousTotal;

    // akhane withdraw er por balance update korci
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balancePreviousTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = balancePreviousTotal - withdrawAmount;

    // input theke value ta clear korci
    withdrawInput.value = "";

})