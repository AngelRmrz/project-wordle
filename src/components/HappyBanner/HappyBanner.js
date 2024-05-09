import React from 'react';

function HappyBanner({ guessTry }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${guessTry} guesses`}</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
