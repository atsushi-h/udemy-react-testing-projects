export type Action = {
  type: string;
};

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export function correctGuess(): Action {
  return { type: actionTypes.CORRECT_GUESS };
}
