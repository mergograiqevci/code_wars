import { checkeredBoard } from "./checkered_board";

// https://www.codewars.com/kata/5650f1a6075b3284120000c0/train/javascript

describe('Checkered Board', () => {

  test('n=2', () => {
    expect(checkeredBoard(2)).toEqual('□ ■\n■ □')
  });

  test('n=10', () => {
    expect(checkeredBoard(10)).toEqual('□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □')
  });

  test('n=3', () => {
    expect(checkeredBoard(3)).toEqual('■ □ ■\n□ ■ □\n■ □ ■')
  });

  test('n=7', () => {
    expect(checkeredBoard(7)).toEqual('■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■')
  });

});