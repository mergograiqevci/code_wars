// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = (strng) => {
    const hasNumber = /\d/;
    const endsWithNumber = hasNumber.test(strng.slice(-1));
    if (!endsWithNumber) return strng + "1";

    for (let i = 0; i < strng.length; i++) {
        if (hasNumber.test(strng[i])) {
            const numbers = strng.slice(i, strng.length);
            let newNumber = parseInt(numbers) + 1;
            if (newNumber.toString().length !== numbers.length) {
                const diff = numbers.length - newNumber.toString().length
                newNumber = numbers.slice(0, diff) + newNumber;
            }
            return strng.slice(0, i) + newNumber;
        }
    }

}

console.log(incrementString("foobar000") === "foobar001")
console.log(incrementString("foo") === "foo1")
console.log(incrementString("foobar001") === "foobar002")
console.log(incrementString("foobar099") === "foobar100")
console.log(incrementString("") === "1")
