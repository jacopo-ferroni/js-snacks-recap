/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const first_word = prompt(`inserisci la prima parola`);

document.querySelector(`.first`).innerHTML = `La prima parola è: ${first_word}.`;

const second_word = prompt(`inserisci la seconda parola`);

document.querySelector(`.second`).innerHTML = `La seconda parola è: ${second_word}.`;

if (first_word.length > second_word.length) {
    document.querySelector(`.result1`).innerHTML = `La parola più lunga è: ${first_word}.`;
}
else if (first_word.length < second_word.length) {
    document.querySelector(`.result2`).innerHTML = `La parola più lunga è: ${second_word}.`;
}
else if (first_word.length == second_word.length) {
    document.querySelector(`.result3`).innerHTML = `Le due parole hanno lunghezza uguale.`;
}

