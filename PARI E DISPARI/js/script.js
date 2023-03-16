// **Pari e Dispari**

// L’utente sceglie pari o dispari.
const userChoise = prompt("Pari o dispari?");
console.log(userChoise);

// L’utente inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const computerNumber = randomNumber (1, 5);
console.log(computerNumber);


// Sommiamo i due numeri
const sumTwoNumber = userNumber + computerNumber;
console.log(sumTwoNumber);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const resultNumber = isOddOrEven(sumTwoNumber)
if(resultNumber === "dispari") {
    console.log("Il risultato è dispari!");
}else {
    console.log("Il risultato è pari!");
}

// Dichiariamo chi ha vinto.



// FUNCTIONS

/**
 * Description: Genera un numero random compreso tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number} numero generato random
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


/**
 * Description: Controlla se il numero è pari o dispari
 * @param {number} numberToCheck
 * @returns {string} "pari" se è pari "dispari" se è dispari
 */
function isOddOrEven(numberToCheck) {
    let result;
    if (numberToCheck % 2 === 0){
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

