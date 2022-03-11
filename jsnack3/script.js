console.log("JS-OK")


//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

const lista1 = ['cane', 'gatto', 'coccodrillo', 'mucca', 'asino', 'toro', 'pecora', 'agnello']

const lista2 = ['cane', 'gatto', 'coccodrillo', 'mucca']

let listapiena = false;

while (lista2.length < lista1.length) {
    lista2.push('asino');
    lista2.push('toro');
    lista2.push('pecora');
    lista2.push('agnello');
    listapiena = true;
}


if (listapiena) {
    console.log("la lista è piena")
}

console.log(lista1)

console.log(lista2)