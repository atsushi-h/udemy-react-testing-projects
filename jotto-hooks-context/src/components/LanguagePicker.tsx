import React from 'react';

type Prop = {
  setLanguage: (code: string) => void;
};

const LanguagePicker: React.FC<Prop> = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  return (
    <div data-test="component-language-picker">
      {languages.map(({ code, symbol }, index) => (
        <span
          data-test="language-icon"
          key={index}
          onClick={() => setLanguage(code)}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
};

export default LanguagePicker;
