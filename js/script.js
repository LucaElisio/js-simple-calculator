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
let result = 0;
// Dichiaro variabile globale per il primo numero
let num1 = "";
// Dichiaro variabile globale per il secondo numero
let num2;
// Dichiaro variabile globale per l'operatore
let operator = "";


// Inserisco il risultato in pagina
// Trovo elemento result in pagina
const resultElem = document.querySelector(".result");
// Stampo il risultato in pagina
resultElem.innerHTML = result;

// Aggiungo event listener a tutti i numeri
// Cerco elemento numbers in pagina
const numbersElem = document.querySelector(".numbers");
console.log(numbersElem);

for (let i = 1; i <= 10; i++) {

    // Cerco bottone numerico in pagina e salvo il valore in variabile
    const numElem = document.querySelector(`.numbers button:nth-child(${i})`);
    console.log(numElem);

    // Al click, concateno il valore del bottone cliccato in stringa in una variabile
    numElem.addEventListener("click", function() {
        // Salvo il valore del bottone corrente
        const numElemValue = numElem.innerHTML;
        num1 += numElemValue.toString();
        console.log(num1);
        
        // Stampo il risultato sul display
        resultElem.innerHTML = num1;
    });

};

// Aggiungo event listener a tutti gli operatori
// Cerco elemento operations in pagina
const operationsElem = document.querySelector(".operations");
console.log(operationsElem);

for (let i = 2; i <= 5; i++) {
    
    // Cerco bottone in pagina
    const opElem = document.querySelector(`.operations button:nth-child(${i})`);
    console.log(opElem);

    // Aggiungo evet listener a ogni bottone
    opElem.addEventListener("click", function() {

        // Salvo in variabile l'innerhtml del bottone cliccato
        operator = opElem.innerHTML;
        console.log(operator);

        // Imposto display vuoto
        resultElem.innerHTML = "";
    });
}
