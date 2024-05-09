import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ guesses, answer }) {

  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((index) => {
          const guess = guesses[index];
          const result = checkGuess(guess, answer);
          return <Guess key={index} value={guess} result={result} />;
        }
        )
      }
    </div>
  )

}

export default Guesses;