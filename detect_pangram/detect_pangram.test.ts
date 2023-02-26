import { isPangram } from "./detect_pangram";

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

describe('Detect Pangram', () => {

  test('The quick brown fox jumps over the lazy dog. is pangram', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBeTruthy()
  });

  test('This is not a pangram.', () => {
    expect(isPangram("This is not a pangram.")).toBeFalsy()
  });

});