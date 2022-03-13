/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const player = {
    PlayerCode: '',
    Name: '',
    Surname: '',
    Età: '',
    ScoreMedia: '',
    TripleMedia: ''
}

function playerCode(){
    return getRandomString(3) + getRandomCodeNumber(3);
}

player.playerCode = playerCode();

player.ScoreMedia = Math.floor(Math.random() * ((50 + 1) - 0 ) + 0);

player.TripleMedia = Math.floor(Math.random() * ((100 + 1) - 0 ) + 0);

function getRandomString(length) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getRandomCodeNumber(length) {
    let randomChars = '1234567890';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

console.table(player);