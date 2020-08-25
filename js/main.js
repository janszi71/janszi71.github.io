function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber); //pPP és aN: paraméterek (x vagy y akár)
}

function showSumPrice(price = 1000, amountNumber = 1){ // price és amountNumber: argumentum. 
                                                       // Mindegy mit adok meg, de akkor a továbbiakban 
                                                       // is le kell cserélni pl. x y
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10){                 // amountNumber helyett y
        alert("Maximum 10 terméket vasárolhat!");
    } else if (amountNumber < 1){           // ... y
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;  // price helyett x
        showAmount.innerHTML = amount;
    }
}

// Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);

// Window events.
let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
    alert("Mifan!")
};
*/

/*
sendButton.addEventListener("click", function() {
    alert("Mifan!")
});

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth)
});
*/

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});

// Parent element kezelése.
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev) {
        this.parentElement.style.display = "none"
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

// Select elem kitöltése.
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingsSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingsSelect.appendChild(option);
    index++;
}