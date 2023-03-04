import { narcissistic } from "./narcissistic";

// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript

describe('Narcissisticd', () => {

  test('7 is narcissistic', () => {
    expect(narcissistic(7)).toBeTruthy()
  });

  test('153 is narcissistic', () => {
    expect(narcissistic(153)).toBeTruthy()
  });

  test('1634 is narcissistic', () => {
    expect(narcissistic(1634)).toBeTruthy()
  });

  test('1652 is not narcissistic', () => {
    expect(narcissistic(1652)).toBeFalsy()
  });

});