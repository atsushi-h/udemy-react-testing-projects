import React from 'react';

import languageContext from '../contexts/languageContext';
import stringsModule, { LanguageCode } from '../helpers/strings';

export type Props = {
  success: boolean;
};

const Congrats: React.FC<Props> = ({ success }) => {
  const language = React.useContext(languageContext);

  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {stringsModule.getStringByLanguage(language as LanguageCode, 'congrats')}
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats"></div>
    );
  }
};

export default Congrats;
