/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer } from 'react';

import { INITIAL_STATE, PlayerType, UserTypes } from './constants';
import reducer from './reducer';

export const UserDataContext = createContext({
  state: { ...INITIAL_STATE },
  changeUser: (player: { playerA: PlayerType; playerB: PlayerType }) => {}
});
const UserWrapper = (props: { children?: React.ReactNode }) => {
  const { Provider } = UserDataContext;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const changeUser = (data: any) => {
    dispatch({ type: UserTypes.SET_USER_VALUES, payload: data });
  };
  return <Provider value={{ changeUser, state, ...props }}>{props.children}</Provider>;
};

export default UserWrapper;
