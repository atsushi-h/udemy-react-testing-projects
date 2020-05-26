import React from 'react';

import languageContext from '../contexts/languageContext';
import stringsModule, { LanguageCode } from '../helpers/strings';

export type Props = {
  secretWord: string;
};

const Input: React.FC<Props> = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(language as LanguageCode, 'guessInputPlaceholder')}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess('');
          }}
        >
          {stringsModule.getStringByLanguage(language as LanguageCode, 'submit')}
        </button>
      </form>
    </div>
  );
};

export default Input;
