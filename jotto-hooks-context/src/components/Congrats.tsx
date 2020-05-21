import React from 'react';

export type Props = {
  success: boolean;
};

const Congrats: React.FC<Props> = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
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
