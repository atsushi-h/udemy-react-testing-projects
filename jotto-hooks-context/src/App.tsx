import React from 'react';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import LanguagePicker from './components/LanguagePicker';
import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';

type State = {
  secretWord: string;
  language: string;
};

type Action = {
  type: 'setSecretWord' | 'setLanguage';
  payload: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: '',
    language: 'en',
  });

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };
  const setLanguage = (language: string) => {
    dispatch({ type: 'setLanguage', payload: language });
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
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Congrats success={false} />
        <Input secretWord={state.secretWord} />
        <GuessedWords guessedWords={[]} />
      </languageContext.Provider>
    </div>
  );
}

export default App;
