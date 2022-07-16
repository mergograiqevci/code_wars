// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

const ALPHABET_LETTERS = "abcdefghijklmnopqrstuvwxyz";


const findMissingLetter = (array) => {
    const isUpperCase = array[0] === array[0].toUpperCase();
    const alphabetArray = (isUpperCase ? ALPHABET_LETTERS.toUpperCase() : ALPHABET_LETTERS).split("");
    let letter = '';
    for (let i = 0; i < array.length; i++) {
        const currentLetterIndex = alphabetArray.findIndex((e) => e === array[i]);
        const nextLetterIndex = alphabetArray.findIndex((e) => e === array[i + 1]);
        if (currentLetterIndex + 1 !== nextLetterIndex) {
            letter = alphabetArray[currentLetterIndex + 1];
            break;
        }
    }
    return letter;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']) === "e")
console.log(findMissingLetter(['O', 'Q', 'R', 'S']) === "P")