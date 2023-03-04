
export const kaCokadekaMe=(value:string):string=>{
    const encodedWord = 'ka'
    const vowels = { 'a':true, 'e':true,'i':true,'o':true,'u':true}
    let v = ''
    let curentIsVowel = vowels[value[0].toLowerCase()]
    
    for(let i=0;i<value.length; i++){
        const nextIsVowel = vowels[value[i + 1] ? value[i + 1].toLowerCase() : '-1']
        if(curentIsVowel && !nextIsVowel){
            const isLastItemVowel = i===value.length -1 
            v+=value[i] + (isLastItemVowel ? '' : encodedWord)
        }
        else{
            v+=value[i]
        }
        curentIsVowel = nextIsVowel
    }
    return encodedWord + v
}