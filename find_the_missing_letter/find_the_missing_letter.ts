const ALPHABET_LETTERS = "abcdefghijklmnopqrstuvwxyz";

export const findMissingLetter = (array:string[]): string => {
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