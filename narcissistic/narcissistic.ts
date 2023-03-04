
export const narcissistic=(value:number):boolean=>{
    const valueToArr = value.toString().split('')
    const length = valueToArr.length
    let sum = 0
    valueToArr.forEach(element => {
        sum += Math.pow(parseInt(element),length)
    })
    return sum === value
}