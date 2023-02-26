import { luckCheck } from "./luck_check";

// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript

describe('Luck check', () => {

  test('683179 should be true', () => {
    expect(luckCheck('683179')).toBeTruthy()
  });

  test('683000 should be false', () => {
    expect(luckCheck('683000')).toBeFalsy()
  });

});