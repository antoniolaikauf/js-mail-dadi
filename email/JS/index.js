// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.



// chiedere ad utente email
const emailUser = document.getElementById("dati-utente");
console.log(emailUser);
// creare variabile con pulsante 
const verificaUser= document.getElementById("verifica");

verificaUser.addEventListener("click", function(){
    const arrayEmail=["antonio.laikauf00@gmail.com","marco.pesenti@gmail.com","luca.astori@gmail.com"];
    let valoreEmail = emailUser.value;
    for (let i = 0; i < arrayEmail.length; i++) {
        // console.log(arrayEmail[i]);
        // verificare se dentro array è inserito la sua email
        if (valoreEmail === "antonio.laikauf00@gmail.com" || valoreEmail ==="marco.pesenti@gmail.com" || valoreEmail === "luca.astori@gmail.com"  ) {
            // far vedere output ad utente
            document.getElementById("output").innerHTML="puoi entrare";
        } else {
            // far vedere output ad utente
            document.getElementById("output").innerHTML="non puoi entrare";
        }
    }

})

