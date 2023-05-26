//SCELTA DELL'UTENTE
let utente = prompt('Scegli pari o dispari');
let numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));

//CONTROLLI
while(utente !== 'pari' && utente !== 'dispari'){
    utente = prompt('Puoi scegliere solo pari o dispari');
}

while(isNaN(numero) || numero < 1 || numero > 5){
    numero = parseInt(prompt('Puoi inserire solo un numero da 1 a 5:'));
}


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

//VARIABILI
let computer = random(1, 5);
let sommaTot = computer + numero;
let risultato = pariODispari(sommaTot);
console.log('computer: ', computer);
console.log('utente ', numero)

//CONDIZIONI
if((risultato === 'pari' && utente === 'pari') || (utente === 'dispari' && risultato === 'dispari')){
    console.log("Hai vinto!");
}else{
    console.log("Hai perso =(");
}
