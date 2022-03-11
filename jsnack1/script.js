console.log("JS-OK")

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const numberlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
let somma = 0;


for (let i = 0; i < numberlist.length; i++) {

    const number = numberlist[i];

    if (number % 2 !== 0) {
        somma += number;
    }
}

console.log("La somma dei numeri interi dispari è: ", somma);
















