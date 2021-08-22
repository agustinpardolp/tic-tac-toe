import { INITIALSTATE, NewUserAction, UserTypes } from './constants';

const reducer = (state: INITIALSTATE, action: NewUserAction) => {
  switch (action.type) {
    case UserTypes.SET_USER_VALUES: {
      return {
        ...state,
        userData: { ...action.payload }
      };
    }
    default:
      return state;
  }
};

export default reducer;
