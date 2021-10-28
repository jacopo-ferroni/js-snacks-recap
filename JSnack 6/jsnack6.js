/* 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// crea due array con grandezze diverse
const size1 = Math.floor(Math.random() * 20) + 1;
const size2 = Math.floor(Math.random() * 20) + 1;

console.log(`Il primo array ha una dimensione di`, size1);
console.log(`Il secondo array ha una dimensione di`, size2);

for(let i = 0; i < size1; i++) {
    const array1 = [];
    array1[i] = Math.floor(Math.random() * 50) + 1;
    console.log(array1[i]);
}

console.log(``);

for(let i = 0; i < size2; i++) {
    const array2 = [];
    array2[i] = Math.floor(Math.random() * 50) + 1;
    console.log(array2[i]);
}

if (array1.length > array2.length) {
    const differenza = array1.length - array2.length;

    for(let i = array2.length; array2.length < (array2.length + differenza); i++) {
        array2[i] = Math.floor(Math.random() * 50) + 1;
        console.log(array2.length);
    }
}
else if (array1.length < array2.length) {
    const differenza = array2.length - array1.length;

    for(let i = array1.length; array1.length < (array1.length + differenza); i++) {
        array1[i] = Math.floor(Math.random() * 50) + 1;
        console.log(array1.length);
    }
}
else if (array1.length == array2.length) {
    console.log(`Hanno uguale dimensione`);
}



