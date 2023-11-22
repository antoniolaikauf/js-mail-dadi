// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.



// chiedere ad utente email
const emailUser = document.getElementById("dati-utente");
console.log(emailUser);
// creare variabile con pulsante 
const verificaUser= document.getElementById("verifica");

// inizio evento 
verificaUser.addEventListener("click", function () {
    let valoreEmail = emailUser.value;
    let risultato="non entri";
    // creazione lista 
    const arrayEmail=["antonio.pesenti@gmail.com", "federico.astori@gmail.com","luca.astori@gmail.com"];
        // controllo se email presente in lista con for loop
       for (let i = 0; i < arrayEmail.length; i++) {
        if (valoreEmail ===  arrayEmail[i] ) {
            risultato="puoi entrare"
        } 
       }
    document.getElementById("output").innerHTML=risultato;
})

 

