export type LanguageCode = 'en' | 'emoji' | 'mermish';

export type StringKey =
  | 'congrats'
  | 'submit'
  | 'guessPrompt'
  | 'guessInputPlaceholder'
  | 'guessedWords'
  | 'guessColumnHeader'
  | 'matchingLettersColumnHeader';

type LanguageStrings = {
  [code in LanguageCode]: {
    [key in StringKey]?: string;
  };
};

const languageStrings: LanguageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessedWords: '🤷‍🔤',
    guessColumnHeader: '🤷‍',
    matchingLettersColumnHeader: '✅',
  },
  mermish: {},
};

function getStringByLanguage(
  languageCode: LanguageCode,
  stringKey: StringKey,
  strings: LanguageStrings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey];
}

// for future mocking
export default {
  getStringByLanguage,
};
