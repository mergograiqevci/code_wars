import {countSmileys} from './count_the_smiley_faces';

// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

describe('Count Smileys', () => {
  test('should equals 0', () => {
    expect(countSmileys([])).toBe(0);
  });

  test('should equals 4', () => {
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4);
  });

  test('should equals 2', () => {
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2);
  });

  test('should equals 1', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });

});