/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   let message = "";

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = "Hai più di 18 anni!";
//   }

//   return message;
// }
// checkAge();

// ESERCIZIO 1
// manca il return.
// Su message non deve essere una variabile costante ma un let.

// ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ["blue", "red", "yellow", "green", "black"];
//   console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// ESERCIZIO 2
// Era scritto in modo sbagliato "length" ( io essendo dislessica potevo starci 80 giorni )

// ESERCIZIO 3
// function addNumbers() {
//   const userNumber = parseInt(prompt("Inserisci un numero"));
//   const total = userNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();
// ESERCIZIO 3
// ci andavo messo il parseIn, altrimenti risultava come stringa.

// ESERCIZIO 4
// function checkAccess() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];
//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//     grantAccess = true;
//   }

//   if (grantAccess === true) {
//     console.log("Accesso consentito!");
//   } else {
//     console.log("Accesso negato!");
//   }
// }
// checkAccess();

// ESERCIZIO 4
// tolgo le virgolette da true e false, perchè sono booleani
