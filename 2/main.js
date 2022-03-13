/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

    const array = [
        {
            marca: 'Fiat',
            modello: 'A',
            alimentazione: 'metano'
        },
        {
            marca: 'Bmw',
            modello: 'B',
            alimentazione: 'benzina'
        },
        {
            marca: 'Fiat',
            modello: 'C',
            alimentazione: 'gpl'
        },
        {
            marca: 'Ferrari',
            modello: 'D',
            alimentazione: 'benzina'
        },
        {
            marca: 'Mercedes',
            modello: 'E',
            alimentazione: 'benzina'
        },
        {
            marca: 'Toyota',
            modello: 'F',
            alimentazione: 'diesel'
        },
        {
            marca: 'Bmw',
            modello: 'G',
            alimentazione: 'metano'
        },
        {
            marca: 'Fiat',
            modello: 'H',
            alimentazione: 'gpl'
        },
        {
            marca: 'Ferrari',
            modello: 'I',
            alimentazione: 'diesel'
        },
        {
            marca: 'Seat',
            modello: 'L',
            alimentazione: 'benzina'
        }
    ]

const gasoline = array.filter((element) => {
    if(element.alimentazione == "benzina") return true
});

const diesel = array.filter((element) => {
    if(element.alimentazione == "diesel") return true
});

const others = array.filter((element) => {
    if(element.alimentazione !== "benzina" && element.alimentazione !== 'diesel') return true
});

console.table(gasoline);
console.table(diesel);
console.table(others);


