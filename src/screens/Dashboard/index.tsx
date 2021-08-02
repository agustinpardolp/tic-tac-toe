/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import Board from './components/Board';
import { squareNull, SquareProps, squareWinners } from './components/constants';
import style from './styles.module.scss';

const Dashboard = () => {
  const [turn, setTurn] = useState<string | null>('X');
  const [squares, setSquares] = useState<SquareProps[]>(squareNull);

  const checkResults = (newSquare: SquareProps[]) => {
    squareWinners.forEach(array => {
      const winnerArray = array.map((num: SquareProps) => (num = newSquare[num as number]));
      const newWinnerArray = Array.from(new Set(winnerArray));
      const isWinner = newWinnerArray.length === 1 && newWinnerArray[0] !== null;
      if (isWinner) {
        debugger;
        console.log(turn);
        return isWinner;
      }
      return array;
    });
  };
  const changeTurn = () => {
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const onClickSquare = (squareNumber: number) => {
    const newSquare = [...squares];
    newSquare.splice(squareNumber, 1, turn);
    setSquares(newSquare);
    changeTurn();
    checkResults(newSquare);
  };

  return (
    <div className={style.dashboard}>
      <Board handleSquare={onClickSquare} turn={turn} squares={squares} />
    </div>
  );
};
export default Dashboard;
