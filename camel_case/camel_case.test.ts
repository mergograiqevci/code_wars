import { camelCase } from "./camel_case";

// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/typescript

describe('CamelCased', () => {

  test('Should equal ', () => {
    expect(camelCase('')).toEqual('')
  });

  test('Should equal TestCase', () => {
    expect(camelCase('test case')).toEqual('TestCase')
  });

  test('Should equal CamelCaseMethod', () => {
    expect(camelCase('camel case method')).toEqual('CamelCaseMethod')
  });

  test('Should equal SayHello', () => {
    expect(camelCase('say hello')).toEqual('SayHello')
  });

});