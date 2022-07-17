// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript

// In some countries of former Soviet Union there was a belief about lucky tickets.
//  A transport ticket of any sort was believed to posess luck if sum of digits on 
//  the left half of its number was equal to the sum of digits on the right half.
// Here are examples of such numbers:
// 003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
// Such tickets were either eaten after being used or collected for bragging rights.

// Your task is to write a funtion luck_check(str), which returns true/True if argument 
// is string decimal representation of a lucky ticket number, 
// or false/False for all other numbers. 
// It should throw errors for empty strings or strings which don't represent a decimal number.

const luckCheck = (ticket) => {
    const re = /^[0-9]+$/;
    let ticketString = ticket.toString()
    if (ticketString.match(re)) {
        let leftSum = 0;
        let rightSum = 0;
        const ticketIsOddNumber = ticketString.length % 2 === 0;

        if (!ticketIsOddNumber) {
            const middleLetterIndex = parseInt(ticketString.length / 2);
            const leftLetters = ticketString.slice(0, middleLetterIndex);
            const rightLetters = ticketString.slice(middleLetterIndex + 1, ticketString.length);
            const ticketWithoutMiddleNumber = leftLetters + rightLetters;;
            ticketString = ticketWithoutMiddleNumber
        }

        for (let i = 0; i < ticketString.length; i++) {
            if (i < ticketString.length / 2) {
                leftSum = leftSum + parseInt(ticketString[i]);
            }
            else {
                rightSum = rightSum + parseInt(ticketString[i]);
            }
        }
        return leftSum === rightSum;
    }
    else {
        throw "error"
    }
}

console.log(luckCheck("683179") === true);
console.log(luckCheck("683000") === false);


// it("should return the correct values", function(){
//     assert.strictEqual(luckCheck('683179'),true, "The function doesn't recognise a lucky ticket number");
//     assert.strictEqual(luckCheck('683000'),false, 'The function doesn\'t return true for a wrong number');
//   });