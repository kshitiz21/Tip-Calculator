//block +,-,e in input Bill
let inputBox = document.getElementById("billamt");
let invalidChars = [
    "-",
    "+",
    "e",
];
inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

//block +,-,e in input tip %
let inputBox1 = document.getElementById("tippercent");
let invalidChars1 = [
    "-",
    "+",
    "e",
];
inputBox1.addEventListener("keydown", function (e) {
    if (invalidChars1.includes(e.key)) {
        e.preventDefault();
    }
});

//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let tip = document.getElementById("tippercent").value;
    let numOfPeople = document.getElementById("numofpeople").value;

    //validate  bill amount input
    if (billAmt == 0 || billAmt < 0) {
        alert("Please enter valid bill amount");
        return;
    }

    //validate  tip percentage input
    if (tip < 0 || tip > 100) {
        alert("Please enter tip percent between 0 and 100");
        return;
    }

    //if input of number of people is empty or less than or equal to 1 than put 1 in number of people
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
    }

    //Calculate tip per person
    var tipPerPerson = (billAmt * tip / 100) / numOfPeople;

    //round to two decimal places
    tipPerPerson = Math.round(tipPerPerson * 100) / 100;

    //Calculate total amount per person
    var total = (billAmt / numOfPeople) + tipPerPerson;

    //round to two decimal places
    total = Math.round(total * 100) / 100;

    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("tipperperson").innerHTML = " $" + tipPerPerson;
    document.getElementById("total").innerHTML = " $" + total;

}

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();
}