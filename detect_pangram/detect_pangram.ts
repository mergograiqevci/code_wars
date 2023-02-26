const ALPHABET_LETTERS = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (string:string):boolean => {
    const punctuations = { ".": ".", ",": ",", ":": ":", "!": "!", "?": "?" }
    const letters:string[] = [];
    for (let i = 0; i < string.length; i++) {
        if (!punctuations[string[i]] && string[i] !== " ") {
            const letterInLetters = letters.find((e) => e === string[i].toLowerCase());
            if (!letterInLetters) {
                letters.push(string[i].toLowerCase())
            }
        }
    }
    return letters.length === ALPHABET_LETTERS.length
}