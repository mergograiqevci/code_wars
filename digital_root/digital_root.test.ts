import { digitalRoot } from "./digital_root";

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

describe('Digital Root', () => {

  test('7', () => {
    expect(digitalRoot(16)).toEqual(7)
  });

  test('456', () => {
    expect(digitalRoot(456)).toEqual(6)
  });

  test('942', () => {
    expect(digitalRoot(942)).toEqual(6)
  });

  test('132189', () => {
    expect(digitalRoot(132189)).toEqual(6)
  });

  test('493193', () => {
    expect(digitalRoot(493193)).toEqual(2)
  });

});