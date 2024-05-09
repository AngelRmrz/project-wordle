import React from 'react';
import { range } from '../../utils';

function Guess({ value, result }) {
  return <p className="guess">
    {
      range(5).map((index) =>
        (<span key={index} className={`cell ${result?.[index]?.status}`}>{value ? value[index] : undefined}</span>)
      )
    }
  </p>
}

export default Guess;
