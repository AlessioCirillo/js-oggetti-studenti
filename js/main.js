//CREAZIONE E STAMPA OGGETTO
// var oggetto = {
//     nome : 'alessio',
//     cognome : 'cirillo',
//     anni : 25
// };

// for (var key in oggetto){
//     console.log(oggetto[key]);
// };


//ARRAY OGGETTI
var array = [
    {
        nome : 'alessio',
        cognome : 'cirillo',
        anni : 25
    },
    {
        nome : 'paolo',
        cognome : 'duzioni',
        anni : 30
    }
]


var nome = prompt( 'inserisci nome' );
var cognome = prompt( 'inserisci cognome' );
var anni = parseInt ( prompt ( 'inserisci la tua età' ) );

var oggettiUser = {};

console.log(array);