import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const isCorrect = guesses.includes(answer);
  const tryCount = guesses.length;
  return <>
    {
      isCorrect
        ? <HappyBanner guessTry={tryCount} />
        : tryCount >= NUM_OF_GUESSES_ALLOWED
          ? <SadBanner />
          : null
    }
    <Guesses guesses={guesses} answer={answer} />
    <GuessInput setGuesses={setGuesses} />
  </>;
}

export default Game;
