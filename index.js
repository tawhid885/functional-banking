// universal function 

// input handler 
function inputHandle(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = "";
    return inputValue;
}

// text handler 
function textHandle(textId){
    const text = document.getElementById(textId);
    const textText = text.innerText;
    const textValue = parseFloat(textText);
    return textValue; 
}

// add value handler 
function addValue(input, textId){
    const previousAmount = textHandle(textId);
    const totalAmount = previousAmount + input;
    const text = document.getElementById(textId);
    text.innerText = totalAmount; 
}

//balance add or reduce
function balanceUpdate(input, textId, isAdd){
    const previousAmount = textHandle(textId);
    if(isAdd){
        const totalAmount = previousAmount + input;
        const text = document.getElementById(textId);
        text.innerText = totalAmount; 
    }
    else{  
        const totalAmount = previousAmount - input;
        const text = document.getElementById(textId);
        text.innerText = totalAmount;    
    }
}


// deposit handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // input handle 
    const depositInputValue = inputHandle('deposit-input');

    // previous amount
    // const previousAmount = textHandle(textId);
     
    // update deposit handle
    addValue(depositInputValue, 'deposit-amount');

    // balance update
    balanceUpdate(depositInputValue, 'balance-amount', true);

})


// withdraw handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // input handle 
    const withdrawInputValue = inputHandle('withdraw-input');

    // previous amount
    const previousAmount = textHandle('balance-amount');

    
    if(previousAmount >= withdrawInputValue){
        // update withdraw handle 
        const updateWithdrawAmount = addValue(withdrawInputValue, 'withdraw-amount');

    // balance update
    balanceUpdate(withdrawInputValue, 'balance-amount', false);
    }
    else{
        console.log('you have insufficient balance!');
    }
    
})