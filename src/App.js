import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import TieBreaker from './components/TieBreaker';
import Result from './components/Result';
import Snowflake from './components/Snowflake';
import ToggleSwitch from './components/ToggleSwitch';
import questions from './data/questions';
import tiebreakers from './data/tiebreakers';
import personalityDescriptions from './data/descriptions';
import './App.css';

const personalityNames = [
  'Leader', 'Thinker', 'Protagonist', 'Mediator', 
  'Protector', 'Counselor', 'Adventurer', 'Creator'
];

function App() {
  const [stage, setStage] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(8).fill(0));
  const [currentMusic, setCurrentMusic] = useState(null);
  const [currentTiebreakerIndex, setCurrentTiebreakerIndex] = useState(0);
  const [showSnowflakes, setShowSnowflakes] = useState(true);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    // Calculate totals
    const totals = personalityNames.map((name, index) => {
      let totalOnes = 0;
      let totalMinusOnes = 0;

      questions.forEach(question => {
        question.answers.forEach(answer => {
          if (answer.values[index] === 1) {
            totalOnes += 1;
          } else if (answer.values[index] === -1) {
            totalMinusOnes += 1;
          }
        });
      });

      return { name, totalOnes, totalMinusOnes };
    });

    setTotals(totals);
  }, []);

  const logScores = (scores) => {
    scores.forEach((score, index) => {
      console.log(`${personalityNames[index]}: ${score}`);
    });
  };

  const handleStart = () => {
    setStage('quiz');
    setCurrentQuestionIndex(0);
    setScores(Array(8).fill(0));
  };

  const handleAnswer = (values) => {
    const newScores = scores.map((score, index) => score + values[index]);
    setScores(newScores);
    logScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const maxScore = Math.max(...newScores);
      const topTypes = newScores.reduce((acc, score, index) => {
        if (score === maxScore) acc.push(index);
        return acc;
      }, []);

      if (topTypes.length > 1) {
        setStage('tiebreaker');
        setCurrentTiebreakerIndex(0);
      } else {
        setStage('result');
      }
    }
  };

  const handleTieBreakerAnswer = (values) => {
    const newScores = scores.map((score, index) => score + values[index]);
    setScores(newScores);
    logScores(newScores);

    const maxScore = Math.max(...newScores);
    const topTypeIndex = newScores.findIndex(score => score === maxScore);

    if (topTypeIndex === -1) {
      if (currentTiebreakerIndex < tiebreakers.length - 1) {
        setCurrentTiebreakerIndex(currentTiebreakerIndex + 1);
      } else {
        setStage('result');
      }
    } else {
      setStage('result');
    }
  };

  const handleRestart = () => {
    setStage('start');
  };

  const getResult = () => {
    const maxScore = Math.max(...scores);
    const topTypeIndex = scores.findIndex(score => score === maxScore);
    return personalityNames[topTypeIndex];
  };

  const toggleSnowflakes = () => {
    setShowSnowflakes(prevShow => !prevShow);
  };

  const handleTogglePerformance = () => {
    setShowSnowflakes(prevShow => !prevShow);
  };

  const resultPersonality = getResult();
  const resultDescription = personalityDescriptions[resultPersonality];

  return (
    <div className="App">
      {showSnowflakes && <Snowflake />}
      {stage === 'start' && <StartScreen onStart={handleStart} totals={totals} />}
      {stage === 'quiz' && (
        <div className="question-list">
          <div className="text">
            <Question
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              currentMusic={currentMusic}
              setCurrentMusic={setCurrentMusic}
            />
          </div>
          <div className="image">
            <img src={questions[currentQuestionIndex].image} alt="Question" />
          </div>
        </div>
      )}
      {stage === 'tiebreaker' && (
        <TieBreaker
          question={tiebreakers[currentTiebreakerIndex]}
          onAnswer={handleTieBreakerAnswer}
        />
      )}
      {stage === 'result' && (
        <Result
          personality={resultPersonality}
          description={resultDescription}
          onRestart={handleRestart}
        />
      )}
      <div className="toggle-snowflakes">
        <ToggleSwitch checked={showSnowflakes} onChange={handleTogglePerformance} />
        <span className="fancy-visuals-text">Fancy Visuals</span>
      </div>
    </div>
  );
}

export default App;
