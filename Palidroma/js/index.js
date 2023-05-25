// LA PAROLA CHE DOVRA' SCRIVERE L'UTENTE
let utente = prompt('Inserisci una parola');

//FUNZIONE
function palindroma(a){
    if(a === utente.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}

//VARIABILE DELLA FUNZIONE 
let finale = palindroma(utente);

//CONDIZIONE FINALE
if(finale){
    console.log('La parola è palindroma')
}else{
    console.log('La parola non è palindroma')
}