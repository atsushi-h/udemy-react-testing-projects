import React from 'react';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
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

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input secretWord={state.secretWord} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
