// **Palindroma**

// Chiedere all’utente di inserire una parola
const userWord = prompt("Dimmi una parola");
console.log(userWord);


// Creare una funzione per capire se la parola inserita è palindroma.

const isUserWordPalindrome = isPalindrome(userWord);
let message = "";
if (isUserWordPalindrome) {
    message = "Questa è una parola PALINDROMA";
} else {
    message = "La parola che hai inserito NON è una parola palindroma";

}

document.getElementById("result").innerHTML = message;

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
/**
 * Description: La funzione che controlla se la parola è palindroma
 * @param {string} wordToCheck
 * @returns {boolean} true se palindroma, altrimenti false
 */
function isPalindrome(wordToCheck) {
    //credo una parola al contrario
    const revertWordToCheck = revertString(wordToCheck);
    //se la parola create è uguale all'originale 
    //allora è palindroma
    //altrimenti non è palindorma
    if (wordToCheck === revertWordToCheck){
        return true;
    } else {
        return false;
    }
}

/**
 * Description: inverte la parola
 * @param {string} stringToRevert
 * @returns {string} la parola al contrario
 */
function revertString(stringToRevert) {
    let invertedString = "";
    for(let i= stringToRevert.length -1; i>= 0; i--) {
        invertedString += stringToRevert[i];
    }
    return invertedString;
}

   