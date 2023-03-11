const sum = (n:number):number=>{
    const nr = n.toString()
    let sum:number = 0
    
    for(let i=0;i<nr.length;i++){
        sum+=parseInt(nr[i])
    }
    return sum
}


export const digitalRoot = (n:number):number => {

    while(n.toString().length!==1){
        n = sum(n)
    }

    return n
};
