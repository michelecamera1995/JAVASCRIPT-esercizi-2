console.log("JS-OK")

//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


const numberlist = [];

let somma = 0;

for (let i = 0; i < 5; i++) {

    let firstnumb

    while (isNaN(firstnumb)) {
        firstnumb = parseInt(prompt('Insert a number!'));
    }
    if (firstnumb) {
        numberlist.push(firstnumb);
    }

}

/*
for (i = 0; i < numberlist.length; i++) {
    const number = numberlist[i];
    somma = somma + number;
}
*/

let listfull = false;

while (listfull) {
    let number = numberlist[i];
    somma = somma + number;
    listfull = true;
}

console.log(listfull)




console.log(numberlist)
console.log(somma)
