import { longestRepetition } from "./longest_consecutive";

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/typescript

describe('Longest Repetition', () => {

  test('aaaabb', () => {
    expect(longestRepetition('aaaabb')).toMatchObject(['a', 4])
  });

  test('bbbaaabaaaa', () => {
    expect(longestRepetition('bbbaaabaaaa')).toMatchObject(['a', 4])
  });

  test('cbdeuuu900', () => {
    expect(longestRepetition('cbdeuuu900')).toMatchObject(['u', 3])
  });

  test('abbbbb', () => {
    expect(longestRepetition('abbbbb')).toMatchObject(['b', 5])
  });

  test('aabb', () => {
    expect(longestRepetition('aabb')).toMatchObject(['a', 2])
  });

  test('ba', () => {
    expect(longestRepetition('ba')).toMatchObject(['b', 1])
  });

  test('', () => {
    expect(longestRepetition('')).toMatchObject(['', 0])
  });
});