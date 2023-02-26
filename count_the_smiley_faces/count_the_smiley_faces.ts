const eyesAreValid = (s:string) => {
    return s === ":" || s === ";";
}

const mouthIsValid = (s:string) => {
    return s === ")" || s === "D";
}

export const countSmileys = (arr:string[]):number => {
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