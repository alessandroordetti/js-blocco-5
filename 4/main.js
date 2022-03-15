
/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

    const animals = [
    {   nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
        { nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
        { nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
];

const mammiferi = animals.filter((element) => {
    if (element.classe == 'mammiferi') return true;
})

/* for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
} */

document.querySelector('button').addEventListener('click', () => console.table(mammiferi));


document.querySelector('.second-button').addEventListener('click', () => console.table(animals));