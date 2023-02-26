export const incrementString = (strng:string): string | undefined => {
    const hasNumber = /\d/;
    const endsWithNumber = hasNumber.test(strng.slice(-1));
    if (!endsWithNumber) return strng + "1";

    for (let i = 0; i < strng.length; i++) {
        if (hasNumber.test(strng[i])) {
            const numbers = strng.slice(i, strng.length);
            let newNumber = (parseInt(numbers) + 1).toString();
            if (newNumber.toString().length !== numbers.length) {
                const diff = numbers.length - newNumber.toString().length
                newNumber = numbers.slice(0, diff) + newNumber;
            }
            return strng.slice(0, i) + newNumber;
        }
    }

}