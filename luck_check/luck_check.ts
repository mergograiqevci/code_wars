export const luckCheck = (ticketString:string):boolean => {
    const re = /^[0-9]+$/;
    if (ticketString.match(re)) {
        let leftSum = 0;
        let rightSum = 0;
        const ticketIsOddNumber = ticketString.length % 2 === 0;

        if (!ticketIsOddNumber) {
            const middleLetterIndex = ticketString.length / 2;
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
    return false
}