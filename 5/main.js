/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */


const persone = [
    {
        nome: 'Alessandro',
        cognome: 'Ordetti',
        età: 27
    },
    {
        nome: 'Patrizia',
        cognome: 'Rossi',
        età: 14
    },
    {
        nome: 'Mario',
        cognome: 'Trieste',
        età: 27
    },
    {
        nome: 'Alex',
        cognome: 'Bosco',
        età: 17
    },
]

const etàPerGuidare = persone.map((persona) =>{
    if(persona.età >= 18) {
        persona.permessoPerGuidare = `${persona.nome} ${persona.cognome} può guidare`;
    } else {
        persona.permessoPerGuidare = `${persona.nome} ${persona.cognome} non può guidare`;
    }

    return persona;
})

console.log(etàPerGuidare);