import React from 'react';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import hookActions from './actions/hookActions';

type State = {
  secretWord: string;
  language: string;
};

type Action = {
  type: 'setSecretWord';
  payload: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: '',
    language: '',
  });

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
