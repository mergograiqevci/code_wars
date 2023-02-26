import { incrementString } from "./string_incremental";

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

describe('String Incremental', () => {

  test('foobar000 should equal foobar001', () => {
    expect(incrementString('foobar000')).toMatch('foobar001')
  });

  test('foo should equal foo1', () => {
    expect(incrementString('foo')).toMatch('foo1')
  });

  test('foobar001 should equal foobar002', () => {
    expect(incrementString('foobar001')).toMatch('foobar002')
  });

  test('foobar099 should equal foobar100', () => {
    expect(incrementString('foobar099')).toMatch('foobar100')
  });

  test(' empty string should equal 1', () => {
    expect(incrementString('')).toMatch('1')
  });
});