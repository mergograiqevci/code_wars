// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



// Example 1:

// Input: name = "alex", typed = "aaleex"

// Output: true

// Explanation: 'a' and 'e' in 'alex' were long pressed.



// Example 2:

// Input: name = "saeed", typed = "ssaaedd"

// Output: false

// Explanation: 'e' must have been pressed twice, but it was not in the typed output.



// Constraints:

// 1 <= name.length, typed.length <= 1000

// name and typed consist of only lowercase English letters.

const longPressed = (name, typed) => {
    let newName = "";
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] !== typed[i + 1]) {
            newName += typed[i]
        }
    }
    return newName === name
}

console.log(longPressed('alex', 'aaleex') === true);
console.log(longPressed('saeed', 'ssaaedd') === false);
console.log(longPressed('alexander', 'lexander') === false);
console.log(longPressed('alexander', 'aalleexxaannddeerr') === true);
console.log(longPressed('laiden', 'laiden') === true);
console.log(longPressed('laiden', 'laid') === false);


