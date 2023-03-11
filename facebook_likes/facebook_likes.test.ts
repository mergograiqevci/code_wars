import { likes } from "./facebook_likes";

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript

describe('Digital Root', () => {

  test('no one likes this', () => {
    expect(likes([])).toEqual('no one likes this')
  })

  test('Peter likes this', () => {
    expect(likes(['Peter'])).toEqual('Peter likes this')
  })

  test('Jacob and Alex like this', () => {
    expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
  })

  test('Max, John and Mark like this', () => {
    expect(likes(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this')
  })

  test('Alex, Jacob and 2 others like this', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this')
  })

})