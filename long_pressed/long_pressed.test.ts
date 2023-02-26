import { longPressed } from "./long_pressed";

// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



// Example 1:

// Input: name = "alex", typed = "aaleex"

// Output: true

// Explanation: 'a' and 'e' in 'alex' were long pressed.



// Example 2:

// Input: name = "saeed", typed = "ssaaedd"

// Output: false

// Explanation: 'e' must have been pressed twice, but it was not in the typed output.



// Constraints:

// 1 <= name.length, typed.length <= 1000

// name and typed consist of only lowercase English letters.

describe('Long Pressed', () => {
    
  test('aaleex should be alex', () => {
    expect(longPressed('alex', 'aaleex')).toBeTruthy()
  });

  test('saeed should be ssaaedd', () => {
    expect(longPressed('saeed', 'ssaaedd')).toBeFalsy()
  });

  test('alexander should be lexander', () => {
    expect(longPressed('alexander', 'lexander')).toBeFalsy()
  });

  test('aalleexxaannddeerr should be alexander', () => {
    expect(longPressed('alexander', 'aalleexxaannddeerr')).toBeTruthy()
  });

  test('laiden should be laiden', () => {
    expect(longPressed('laiden', 'laiden')).toBeTruthy()
  });

  test('laiden should be laid', () => {
    expect(longPressed('laiden', 'laid')).toBeFalsy()
  });

});