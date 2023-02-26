export const longPressed = (name:string, typed:string):boolean => {
    let newName = "";
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] !== typed[i + 1]) {
            newName += typed[i]
        }
    }
    return newName === name
}
