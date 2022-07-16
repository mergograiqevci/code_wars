// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

const eyesAreValid = (s) => {
    return s === ":" || s === ";";
}

const mouthIsValid = (s) => {
    return s === ")" || s === "D";
}

const countSmileys = (arr) => {
    let smiley = 0;
    for (let i = 0; i < arr.length; i++) {
        const face = arr[i];
        let eyesValid = false;
        let mouthValid = false;
        for (let j = 0; j < face.length; j++) {
            if (eyesAreValid(face[j])) {
                eyesValid = true;
            }
            if (mouthIsValid(face[j])) {
                mouthValid = true;
            }
        }
        if (eyesValid && mouthValid) {
            smiley++;
        }
    }
    return smiley;
}

console.log(countSmileys([]) === 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']) === 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']) === 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']) === 1);