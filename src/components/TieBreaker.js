import React from 'react';

const TieBreaker = ({ question, onAnswer }) => {
  return (
    <div className="tie-breaker">
      <h2>{question.text}</h2>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(answer.values)}>{answer.text}</button>
        ))}
      </div>
    </div>
  );
};

export default TieBreaker;
