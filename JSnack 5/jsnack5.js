/* 
Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.
*/

const btn = document.querySelector(`.btn`);
let array = [];
let somma = 0;
let media = 0;

// Clicca il bottone
btn.addEventListener(`click`, function() {
    // Chiedere il numero a 4 cifre
    const number = prompt(`Dammi il numero`);
    if(number.length === 4) {
        array = number;
        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);
        console.log(array[3]);
        console.log(number);
        // Se il numero è corretto fare somma e media dei numeri
        for(let i = 0; i < 4; i++) {
            somma += parseInt(array[i]);
            media = somma / 4;
        }
    }
    else {
        console.log(`troppo corto o troppo lungo`);
    }

    document.querySelector(`.sum`).innerHTML =`Questa è la somma: ${somma}`;
    document.querySelector(`.med`).innerHTML =`Questa è la media: ${media}`;
});