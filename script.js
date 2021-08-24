var billAmount = document.querySelector("#bill-amount");
var cashInput = document.querySelector("#cash-input");
var btnSubmit = document.querySelector("#btn-submit");
var displayMessage = document.querySelector("#display-message");
var notes = document.querySelectorAll(".notes");
// console.log(notes);

function validateInput() {
    if (parseInt(cashInput.value) < 0 || parseInt(billAmount.value) < 0) {
        displayMessage.innerHTML = "Amount should be positive";
        return false
    }
    if (parseInt(cashInput.value) < parseInt(billAmount.value)) {
        flag = 1;
        displayMessage.innerHTML = "Cash Amount is less than Bill Amount";
        return false

    }

    displayMessage.innerHTML = "Below are the change details";
    return true
}

function initialzeTable(n) {
    for (let i = 0; i < n; i++) {
        notes[i].innerHTML = "";

    }
}

function calculateChange(amountToReturn) {
    var notesCalculated = 0;
    var availableNotes = [2000, 500, 100, 20, 10, 5, 1];
    initialzeTable(availableNotes.length);

    for (let i = 0; i < availableNotes.length; i++) {
        notesCalculated = Math.floor(amountToReturn / availableNotes[i]);
        console.log(i, notesCalculated);
        console.log(notes[i]);
        amountToReturn = amountToReturn % availableNotes[i];
        if (notesCalculated > 0) {
            notes[i].innerHTML = notesCalculated;
        }

    }

}

function submitHandler() {
    if (!validateInput()){
        return
    };

    var amountToReturn = parseInt(cashInput.value) - parseInt(billAmount.value)
    calculateChange(amountToReturn);
}



btnSubmit.addEventListener("click", submitHandler);