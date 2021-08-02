/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable padded-blocks */
import React from 'react';
import clsx from 'clsx';

import { SquareProps } from '../constants';

import style from './styles.module.scss';

interface props {
  handleSquare: (squareNumber: number) => void;
  currentValue: SquareProps;
  turn: string | null;
  squareValue: number;
}
const Square = ({ handleSquare, currentValue, turn, squareValue }: props) => {

    const handleClick = ()=>{
        if (currentValue === null) {
        handleSquare(squareValue);
}
    };
  return (
    <div
      className={` ${clsx(style.square, {
      [style.squareX]: currentValue && currentValue !== 'O',
      [style.squareO]: currentValue && currentValue !== 'X' }
      )}`}
      onClick={handleClick}
    />
  );
};

export default Square;
