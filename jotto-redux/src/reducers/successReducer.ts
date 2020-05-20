import { actionTypes, Action } from '../actions';

export type State = boolean;

export default (state: State = false, action: Action): State => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
