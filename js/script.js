// Attenzione: La nostra calcolatrice deve fare dei calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.
// MILESTONE 1
// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto
// MILESTONE 2
// aggiungere event listener a tutti gli operatori
// quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
// MILESTONE 3
// aggiungere event listener al pulsante =
// quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
// MILESTONE 4
// pulsante canc: cliccando il pulsante si resetta il calcolo
// :stella2: BONUS
// verificare che non si stia cercando di dividere per 0


// Dichiaro variabile globale per il risultato
let displayResult = 0;
// Dichiaro variabile globale per il primo numero
let num = "";
// Dichiaro variabile globale di appoggio
let num2 = "";
// Dichiaro variabile globale per l'operatore
let operator = "";


// Trovo elemento result in pagina
const displayElem = document.querySelector(".display");
// Stampo il risultato in pagina
displayElem.innerHTML = displayResult;

// Aggiungo event listener a tutti i numeri
// Cerco bottone numerico in pagina e salvo in variabile
const keyElem = document.querySelectorAll(".keynum");
console.log(keyElem);

for (let i = 0; i < keyElem.length; i++) {

    // Salvo in variabile il numero corrente
    const curElem = keyElem[i];
    curElem.addEventListener("click", keyClick);
};

// Funzione keyClick
function keyClick () {
    const keyElemValue = this.innerText;
    num += keyElemValue;
    console.log(num, typeof num);

    // Stampo in display
    displayElem.innerHTML = num;
    
}

// Aggiungo event listener a tutti gli operatori
// Cerco bottone operatore in pagina e salvo in variabile
const opElem = document.querySelectorAll(".op");
console.log(opElem);


for (let i = 0; i < opElem.length; i++) {
    const curElem = opElem[i];
    curElem.addEventListener("click", opClick);
}

// Funzione opClick
function opClick() {
    operator = this.innerText;
    console.log(operator);
    displayElem.innerHTML = "";
    num2 = num;
    console.log(num2);
    num = "";
}

// Aggiungo event listener al pulsante =
// Cerco elemento in pagina
const resultElem = document.querySelector(".result");
resultElem.addEventListener("click", printResult);

// Funzione printResult
function printResult() {
    num = parseInt(num)
    num2 = parseInt(num2)
    switch (operator) {
        case "+":
            displayResult = num2 + num;
            break;
        case "-":
            displayResult = num2 - num;
            break;
        case "&#215;":
            displayResult = num2 * num;
            break;
        case "&#247;":
            displayResult = num2 / num;
            break;
    }

    // Stampo nel display il risultato
    displayElem.innerHTML = displayResult;
}