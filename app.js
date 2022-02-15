const billValue = document.getElementById("bill-input");
const peopleValue = document.getElementById("people-input");
const tips = document.querySelectorAll(".tips");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const customValue = document.querySelector(".tip-custom");
const reset = document.querySelector(".reset");




tips.forEach(function (val) {
    val.addEventListener("click", handleClick);
  });

reset.addEventListener("click",resetFunc);
billValue.addEventListener("input",billInputFunc);
peopleValue.addEventListener("input",peopleValueFunc);
customValue.addEventListener("input",customTipFunc);
// console.log(billValue);

billValue.value = "0.0";
peopleValue.value = "1";

tipAmount.value = "0.00";
tipAmount.innerHTML = "$"+tipAmount.value;

totalAmount.value = "0.00";
totalAmount.innerHTML = "$"+totalAmount.value;


let billInput = 0.0
let peopleInput = 1;
let tipVal = 0.15;
let customInput = 0.0;
let tip = 0.0;

function billInputFunc(){
    billInput = parseFloat(billValue.value);
    calculateTip();
    console.log(billInput);
}

function customTipFunc(){
    customInput = parseFloat(customValue.value)/100;
    // console.log(customInput);
    tips.forEach(function(val){
        val.classList.remove("active-tip");
    });    
    tipVal = customInput;
    calculateTip();
}


function peopleValueFunc(){
    peopleInput = parseFloat(peopleValue.value);
    // console.log(peopleInput);
    if(peopleInput <= 0){
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("people-input").style.outline = "0.05em solid #FF0000";
        // document.getElementById("error").style.textAlign = "right";
    }
    else{
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("people-input").style.outline = "none";
        calculateTip();
    }
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip");
        customValue.value ="";
        // console.log(event.target.innerHTML);
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            // console.log(val.innerHTML);
            tipVal = parseFloat(val.innerHTML)/100;
            // console.log(tipVal);
        }
    });
    calculateTip();
}

function calculateTip(){
    if(peopleInput>=1){
        tip = tipVal * billInput;
        let tipPerAmount = tip / peopleInput;
        let totalPerAmount = (billInput+tip)/peopleInput;
        tipAmount.innerHTML = "$"+tipPerAmount.toFixed(2);
        totalAmount.innerHTML = "$"+totalPerAmount.toFixed(2);
        // console.log(tipAmount);
        // console.log(totalAmount);
    }
   
}

function resetFunc(){
    billValue.value = "0.0";
    billInputFunc();
    peopleValue.value = "1";
    peopleValueFunc();
    customValue.value = "";
}
