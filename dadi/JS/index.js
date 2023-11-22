// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// generare mossa computer e persona
let mossaComputer = Math.floor(Math.random() * 6) + 1;
console.log(mossaComputer);

let mossaPersona = Math.floor(Math.random() * 6) + 1;
console.log(mossaPersona);

// creazione del codie per chi vince , perde e pareggia 
let risultato;
if (mossaComputer > mossaPersona) {
    risultato="ha vinto il computer";
} else if (mossaPersona > mossaComputer) {
    risultato="ha vinto l'utente";
} else{
    risultato="avete pareggiato";
}
// messo output dentro html
console.log(risultato);