/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// ESERCIZIO 1
// Era sbagliato il sinbolo del >, difatti andava messo il simbolo del minore per poter eseguire il ciclo. Ho aggiunto il sinbolo = per comprendere il 5

// ESERCIZIO 2
// function addIfEven(num) {
//   if (num % 2 === 0) {
//     return num + 5;
//   }
//   return num;
// }
// ESERCIZIO 2
// Qui l'errore è il sinbolo = preso da solo. Bisogna mettere tre eguale ( === ) per sinbolo di uguaglianza, anche per far capire che sono entrambi due numeri.

// ESERCIZIO 3
// function loopToFive() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// ESERCIZIO 3
// Non ci vanno le virgole ma il "punto e virgola"

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const actualNumber = numbers[i];
    if (actualNumber % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

// displayEvenNumbers(); // [2,4,6,8]
console.log(displayEvenNumbers());
// ESERCIZIO 4
// 1. le virgolette dopo i++; 2.nell if sempre "=", stesso discorso esercizio due; 3. Nella condizione ci andava "numbers[i]"; 4. Rimosso -1 da numbers.length; 5. Il return dopo il ciclo for; 6. Rimosso ; dopo la parentesi della condizione; 7.Ho creato una variabile sull'actualNumber per ordinare il codice; 8. Ho invocato la condizione in un console.log per vederne il risultato
