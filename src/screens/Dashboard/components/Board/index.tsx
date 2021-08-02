import React from 'react';

import { squareList, SquareProps } from '../constants';
import Square from '../Square';

import style from './styles.module.scss';
// eslint-disable-next-line no-magic-numbers
interface props {
  handleSquare: (squareNumber: number) => void;
  turn: string | null;
  squares: SquareProps[];
}

const Board = ({ handleSquare, turn, squares }: props) => {
  console.log('squares', squares);

  return (
    <div className={style.board}>
      {squareList?.map((square, i) => (
        <Square
          // eslint-disable-next-line react/no-array-index-key
          key={`square-${i}`}
          handleSquare={handleSquare}
          currentValue={squares[square as number]}
          turn={turn}
          squareValue={square}
        />
      ))}
    </div>
  );
};

export default Board;
