/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import React, { useContext, useState } from 'react';

import Button from '../../components/Button';
import { UserDataContext } from '../../context/NewFlowContext';
import { values } from '../Home/constants';

import Board from './components/Board';
import { squareNull, SquareProps, squareWinners } from './components/constants';
import { title } from './constants';
import style from './styles.module.scss';

const Dashboard = () => {
  const [turn, setTurn] = useState<string | null>(values.X);
  const [squares, setSquares] = useState<SquareProps[]>(squareNull);
  const {
    state: {
      userData: { playerA, playerB }
    },
    changeUser
  } = useContext(UserDataContext);

  const checkResults = (newSquare: SquareProps[]): boolean => {
    let result = false;
    squareWinners.forEach(array => {
      const winnerArray = array.map((num: SquareProps) => (num = newSquare[num as number]));
      const newWinnerArray = Array.from(new Set(winnerArray));
      const isWinner = newWinnerArray.length === 1 && newWinnerArray[0] !== null;
      if (isWinner) {
        return (result = true);
      }
      return false;
    });
    return result;
  };
  const changeTurn = () => {
    setTurn(turn === values.X ? values.O : values.X);
  };

  const onClickSquare = (squareNumber: number) => {
    const newSquare = [...squares];
    newSquare.splice(squareNumber, 1, turn);
    setSquares(newSquare);
    changeTurn();
    if (checkResults(newSquare)) {
      playerA.score = playerA.option === turn ? (playerA.score = +1) : (playerB.score = +1);
      debugger;
      changeUser({ playerA, playerB });
    }
  };

  const handleReset = () => {
    setSquares(squareNull);
  };

  return (
    <div>
      <div className={style.dashboard}>
        <Board handleSquare={onClickSquare} turn={turn} squares={squares} />
        <div className={style.resultMain}>
          <h3>{title}</h3>
          <div className={style.container}>
            <div className={style.resultContainer}>
              <label className={style.userLabel}>{playerA.name}</label>
              <span>{playerA.score}</span>
            </div>
            <div className={style.resultContainer}>
              <label className={style.userLabel}>{playerB.name}</label>
              <span>{playerB.score}</span>
            </div>
          </div>
        </div>
      </div>
      <Button label="restart" onClick={handleReset} />
    </div>
  );
};
export default Dashboard;
