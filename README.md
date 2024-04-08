**Milestone 1**
1. aggiungere event listener a tutti i numeri (0-9)
    - [ ] Cerco l'elemento numbers in pagina (numbersElem)
    - [ ] creo ciclo for che scorre tutti i numeri
        - i = 1; i <= 10; i++
        - Cerco bottone in pagina (document.querySelector(".numbers button:nth-child(i)"));
2. quando si clicca su un numero, concatenarlo al numero
    - [ ] Concateno il valore del bottone corrente trasformato in stringa ad una variabile

**Milestone 2**
1. aggiungere event listener a tutti gli operatori
    - [ ] Cerco elemento operations in pagina (operationsElem)
    - [ ] Creo ciclo for che scorre tutti gli operatori
        - i = 1; i <= 5; i++
        - Cerco bottone in pagina
2. quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
    - [ ] salvo l'inner html del bottone corrente
    - [ ] imposto l'innerhtml del risultato come stringa vuota