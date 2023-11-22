// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.

// chiedere ad utente email
// verificare se dentro array è inserito la sua email
// far vedere output ad utente

const emailUser = document.getElementById("dati-utente");
console.log(emailUser);

const verificaUser= document.getElementById("verifica");

const arrayEmail=["antonio.laikauf00@gmail.com","marco.pesenti@gmail.com","luca.astori@gmail.com"];



verificaUser.addEventListener("click", function(){
    for (let i = 0; i < arrayEmail.length; i++) {
        // console.log(arrayEmail[i]);
        let valoreEmail = emailUser.value;
        console.log(valoreEmail);
    }
})
