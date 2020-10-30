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

for (var i = 0; i < array.length; i++){
    console.log(array[i].nome , array[i].cognome);
}

var nome = prompt( 'inserisci nome' );
var cognome = prompt( 'inserisci cognome' );
var anni = parseInt ( prompt ( 'inserisci la tua età' ) );

var oggettiUser = {};

oggettiUser.nome

console.log(array);