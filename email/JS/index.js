// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.



// chiedere ad utente email
const emailUser = document.getElementById("dati-utente");
console.log(emailUser);
// creare variabile con pulsante 
const verificaUser= document.getElementById("verifica");


// evento per vedere se presente in lista
verificaUser.addEventListener("click", function () {
    let valoreEmail = emailUser.value;
    let risultato;
    const arrayEmail=["antonio.pesenti@gmail.com", "federico.astori@gmail.com","luca.astori@gmail.com"];
    for (let i = 0; i < arrayEmail.length; i++) {
        // controllo se email presente in lista 
        if (valoreEmail ===  arrayEmail[0] || valoreEmail ===  arrayEmail[1] || valoreEmail === arrayEmail[2] ) {
            risultato="puoi entrare"
        } else {
            risultato="non puoi entrare"
        }
    }
    document.getElementById("output").innerHTML=risultato;
})
 

