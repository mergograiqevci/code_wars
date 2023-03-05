import { kaCokadekaMe } from "./kakaka_cypher"

// https://www.codewars.com/kata/5934d648d95386bc8200010b/train/javascript

describe('Kakaka Cypher', () => {

  test('a should equal kaa', () => {
    expect(kaCokadekaMe("a")).toEqual("kaa" )
  })

  test('z should equal kaz', () => {
    expect(kaCokadekaMe("z")).toEqual("kaz" )    
  })

  test('ka should equal kaka', () => {
    expect(kaCokadekaMe("ka")).toEqual("kaka" )     
  })

  test('Abbaa should equal kaAkabbaa', () => {
    expect(kaCokadekaMe("Abbaa")).toEqual("kaAkabbaa" )
  })

  test('maintenance should equal kamaikantekanakance', () => {
    expect(kaCokadekaMe("maintenance")).toEqual("kamaikantekanakance" )
  })

  test('Woodie should equal kaWookadie', () => {
     expect(kaCokadekaMe("Woodie")).toEqual("kaWookadie" )
  })

  test('Incomprehensibilities should equal kaIkancokamprekahekansikabikalikatiekas', () => {
    expect(kaCokadekaMe("Incomprehensibilities")).toEqual("kaIkancokamprekahekansikabikalikatiekas" ) 
  })

})