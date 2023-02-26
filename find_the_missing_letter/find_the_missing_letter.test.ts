import { findMissingLetter } from "./find_the_missing_letter";

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

describe('Find the missing letter', () => {

  test('Missing letter is e', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toMatch('e')
  });

  test('Missing letter is P', () => {
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toMatch('P')
  });

});