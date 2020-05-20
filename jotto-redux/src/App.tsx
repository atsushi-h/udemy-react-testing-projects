import React from 'react';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
