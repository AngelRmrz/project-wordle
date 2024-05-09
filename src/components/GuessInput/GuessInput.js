import React, { useState } from 'react';

function GuessInput({ setGuesses }) {
  const [guess, setGuess] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setGuess(event.target.value.toUpperCase());
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 0) {
      console.error('Invalid input');
      return;
    }
    setGuess('');
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }
  return (<div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" autoComplete='off' pattern="^[a-zA-Z]*" minLength={5} maxLength={5} title="Solo se permiten palabras" value={guess} onChange={handleChange} />
    </form>
  </div>);
}

export default GuessInput;
