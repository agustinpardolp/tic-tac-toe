/* eslint-disable no-magic-numbers */
export type SquareProps = number | string | null;

export const squareList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const squareNull = [null, null, null, null, null, null, null, null, null];
// export const squareTest = ["X", null, "Ø", "X", null, "Ø", "X", "X", "X"];
export const squareWinners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
