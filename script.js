let billAmtInput = document.getElementById("bill-amount");
let tipPercentInput = document.getElementById("tip-percent");
let divideInput = document.getElementById("divide");
let calculate = document.getElementById("calc-btn");
let reset = document.getElementById("reset-btn");
let result = document.getElementById("result");
let info = document.getElementById("info");


calculate.addEventListener("click", function(){
    const billAmt = billAmtInput.value;
    const tipPercent = tipPercentInput.value
    const divPeople = divideInput.value

    if(!billAmt == "" || !tipPercent == "" || !divPeople == ""){
        //Calculating the tip
        const tipTotal = billAmt * (tipPercent/100)
        console.log(tipTotal);

        //Calculating the total bill
        const bill = parseFloat(billAmt);
        const tip = parseFloat(tipTotal);
        const totalBill = bill + tip;
        console.log(totalBill);

        //Calculating the share of bill
        const myShare = totalBill/divPeople
        console.log(myShare);

        //Displaying it
        result.innerHTML = "Rs." + myShare;
        result.style.boxShadow = "0 0 1rem grey";
        info.innerHTML = `The total tip is Rs. ${tipTotal} and the total bill is Rs. ${totalBill}.`

        
    }else{
        alert("Fill in the necessary information.");
    }   
});

reset.addEventListener("click", function(){
    billAmtInput.value = "";
    tipPercentInput.value="";
    divideInput.value="";
    result.innerHTML=""
});