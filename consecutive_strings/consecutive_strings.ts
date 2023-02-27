const getOthers = (arr:string[],min:number,max:number)=>{
    let value = ''
    for(let i=min;i<max;i++){
      value+=arr[i]
    }
    return value
}
  
export const longestConsec=(strarr: string[], k: number): string => {
    const length = strarr.length
    if(length === 0 || k > length || k <= 0) return ''
    let consec = ''
    
    for(let i=0;i<length;i++){
      const currentLength = k+i
      if(currentLength>length) break
      const o = getOthers(strarr,i,k+i)
      if(o.length > consec.length){
        consec = o
      }
    }
    return consec
}