//SCELTA DELL'UTENTE
let utente = prompt('Scegli pari o dispari');
let numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));
let numeroRandom = parseInt('');

//FUNZIONE
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pariODispari(pari_dispari) {
    if(pari_dispari % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    }
}
numeroRandom = random(1 , 5);

//VARIABILI
let computer = random();
let sommaUtente = computer + numero;
let risultato = pariODispari(sommaUtente);

//CONDIZIONI
if((risultato === 'pari') || (risultato === 'dispari')){
    console.log("Hai vinto!");
}else{
    console.log("Hai perso =(");
}

if((utente === 'pari') || (utente === 'dispari')){
    console.log("Hai vinto!");
}else{
    console.log("Hai perso =(");
}
