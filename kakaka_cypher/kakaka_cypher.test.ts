import { kaCokadekaMe } from "./kakaka_cypher"

// https://www.codewars.com/kata/5934d648d95386bc8200010b/train/javascript

describe('Kakaka Cypher', () => {

  test('7 is narcissistic', () => {
    expect(kaCokadekaMe("a")).toEqual("kaa" )
  })

  test('7 is narcissistic', () => {
    expect(kaCokadekaMe("z")).toEqual("kaz" )    
  })

  test('153 is narcissistic', () => {
    expect(kaCokadekaMe("ka")).toEqual("kaka" )     
  })

  test('1634 is narcissistic', () => {
    expect(kaCokadekaMe("Abbaa")).toEqual("kaAkabbaa" )
  })

  test('1652 is not narcissistic', () => {
    expect(kaCokadekaMe("maintenance")).toEqual("kamaikantekanakance" )
  })

  test('1652 is not narcissistic', () => {
     expect(kaCokadekaMe("Woodie")).toEqual("kaWookadie" )
  })

  test('1652 is not narcissistic', () => {
    expect(kaCokadekaMe("Incomprehensibilities")).toEqual("kaIkancokamprekahekansikabikalikatiekas" ) 
  })

})