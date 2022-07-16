// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
const ALPHABET_LETTERS = "abcdefghijklmnopqrstuvwxyz";

const isPangram = (string) => {
    const punctuations = { ".": ".", ",": ",", ":": ":", "!": "!", "?": "?" }
    const letters = [];
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

console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("This is not a pangram.") === false);

// describe("Tests", () => {
//     it("test1", () => {
//       var string = "The quick brown fox jumps over the lazy dog."
//       assert.strictEqual(isPangram(string), true)
//     })
//     it("test2", () => {
//       var string = "This is not a pangram."
//       assert.strictEqual(isPangram(string), false)
//     });
//   });
