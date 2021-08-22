import { UserTypes, INITIAL_STATE } from './constants';

export const actionCreators = {
  setUserData: () => ({
    type: UserTypes.SET_USER_VALUES,
    payload: INITIAL_STATE
  })
};
