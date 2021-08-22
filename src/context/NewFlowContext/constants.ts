/* eslint-disable @typescript-eslint/no-empty-function */
// import { Dispatch } from "react";

export enum UserTypes {
  SET_USER_VALUES = 'setUserValues'
}
export type NewUserAction = {
  type: UserTypes;
  payload: { playerA: PlayerType; playerB: PlayerType };
};

export type INITIALSTATE = {
  userData: { playerA: PlayerType; playerB: PlayerType };
};
export type PlayerType = {
  name: string;
  option: string;
  score: number;
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const INITIAL_STATE = {
  userData: { playerA: { name: '', option: '', score: 0 }, playerB: { name: '', option: '', score: 0 } }
};
