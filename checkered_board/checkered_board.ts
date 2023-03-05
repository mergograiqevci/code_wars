export const checkeredBoard = (dimension:number):string=>{
    const light = '\u25A0'
    const dark = '\u25A1'
    const isOdd = dimension%2===0
    let square = isOdd ? dark : light
    let string = ''
    
    for(let i=0;i<dimension;i++){
      const isLastRow = i===dimension-1
      for(let j=0;j<dimension;j++){
          const isLastColumn = j===dimension-1
          string+=square + (isLastColumn ? '' :' ')
          if(!(isLastColumn && isOdd)) square = square === light ? dark : light
      }
      if(!isLastRow) string+='\n' 
    }
    return string
  }