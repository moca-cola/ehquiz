import React from 'react';

const Result = ({ personality, description, onRestart }) => {
  return (
    <div className="result">
      <h2>Your personality type: {personality}</h2>
      <p className="result-desc">{description}</p>
      <br></br><br></br>
      <h3>Does this sound like you?</h3>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
