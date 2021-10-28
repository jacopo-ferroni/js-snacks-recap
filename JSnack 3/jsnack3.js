/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited)
*/
const array = [];
let somma = 0;
const btn = document.querySelector(`.start`);

btn.addEventListener(`click`, function() {

    for(let i = 0; i < 5; i++) {
        array[i] = parseInt(prompt(`Inserisci un numero`));
        somma += array[i];
    }

    document.querySelector(`.result`).innerHTML = `La somma è: ${somma}`;


});