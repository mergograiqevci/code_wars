import { longestConsec } from "./consecutive_strings";

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript

describe('Consecutive Strings', () => {

  test('Should equal folingtrashy', () => {
    expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toEqual('abigailtheta')
  });

  test('Should equal oocccffuucccjjjkkkjyyyeehh', () => {
    expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual('oocccffuucccjjjkkkjyyyeehh')
  });

  test('Should equal ixoyx3452zzzzzzzzzzzz', () => {
    expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toEqual('ixoyx3452zzzzzzzzzzzz')
  });

});