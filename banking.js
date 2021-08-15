document.getElementById('deposit-btn').addEventListener('click',function(){
    //get deposit amount in $;
    // console.log('button clicked');
    const depositInput = document.getElementById('diposit-input')
    const newDepositAmount = depositInput.value;
    // console.log(newDepositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount)  + parseFloat(newDepositAmount);
    console.log(previousDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balaceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = parseFloat(balaceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balaceTotal.innerText = newBalanceTotal;
    ///clear the deposit value
    depositInput.value = '';
})


/* withdrow button handlar */
document.getElementById('withdrow-btn').addEventListener('click', function(){
    console.log('withdrow click');
    const withdrowInput = document.getElementById('withdrow-input')
        const newWithdrowAmount = parseFloat(withdrowInput.value);
        // console.log(withdrowAmount);

    //set withdrow total
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowAmount = parseFloat(withdrowTotal.innerText);
    console.log(previousWithdrowAmount);
    const newWithdrowTotal = previousWithdrowAmount + newWithdrowAmount;
    console.log(newWithdrowTotal);
    withdrowTotal.innerText = newWithdrowTotal;
    // clear withdrow input 
    withdrowInput.value = ''

    // update balence after withdrow 
    const balaceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = parseFloat(balaceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowTotal;
    balaceTotal.innerText = newBalanceTotal;
})