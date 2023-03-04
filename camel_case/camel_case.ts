const capitalizeFirstLetter = (str:string)=> {
    return str[0].toUpperCase() + str.slice(1);
}

export const camelCase=(str: string):string=>{
   if(!str.trim()) return ''
   return str.split(' ').map((s)=>capitalizeFirstLetter(s)).join('')
}