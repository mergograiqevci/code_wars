export const longestRepetition =(text: string): [string, number]=> {
    if(!text.trim()) return ["", 0]

    let sum = 1
    let maxSum = 1
    let value = text[0]
    
    for(let i=0;i<text.length;i++){
        if(text[i]===text[i+1]) sum ++ 
        else sum = 1
        
        if(sum>maxSum){
            value = text[i]
            maxSum = sum
        }
    }
  
  return [value,maxSum]
}
