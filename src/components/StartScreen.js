import React, { useEffect, useState } from 'react';

const messages = [
  { text: "", fontSize: "12pt" },
  { text: "Wake up...", fontSize: "12pt" },
  { text: "Wake up...", fontSize: "20pt" },
  { text: "Think hard... Remember your past...", fontSize: "24pt" }
];

const StartScreen = ({ onStart, totals }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    let timer;

    if (currentMessageIndex === -1) {
      // Initial delay before the first message fades in
      timer = setTimeout(() => {
        setCurrentMessageIndex(0); // Set currentMessageIndex to 0 after the initial delay
        setFade('pause'); // Start fading out the first message after delay
      }, 3000);
    } else if (currentMessageIndex < messages.length) {
      if (fade === 'fade-in') {
        if (currentMessageIndex === 0) {
          timer = setTimeout(() => setFade('pause'), 1);
        } else {
          timer = setTimeout(() => setFade('pause'), 5000); // Pause after fade-in
        }
      } else if (fade === 'pause') {
        timer = setTimeout(() => setFade('fade-out'), 2000); // Start fade-out after pause
      } else if (fade === 'fade-out') {
        timer = setTimeout(() => {
          setFade('fade-in');
          setCurrentMessageIndex(prevIndex => prevIndex + 1);
        }, 2000); // Move to next message after fade-out and short pause
      }
    }

    return () => clearTimeout(timer);
  }, [fade, currentMessageIndex]);

  const handleSkip = () => {
    // Directly show the start button by setting currentMessageIndex to messages.length
    setCurrentMessageIndex(messages.length);
  };

  return (
    <div className="start-screen">
      {currentMessageIndex < messages.length ? (
        <div
          className={`message`}
          style={{
            opacity: fade === 'fade-in' ? 1 : fade === 'fade-out' ? 0 : 1,
            fontSize: messages[currentMessageIndex]?.fontSize
          }}
        >
          {messages[currentMessageIndex]?.text}
        </div>
      ) : (
        <>
          <button onClick={onStart}>Start</button>
          <div className="totals">
            <h2>Question Totals for Each Personality Type</h2>
            <ul>
              {totals.map(({ name, totalOnes, totalMinusOnes }) => (
                <li key={name}>
                  <strong>{name}</strong>: {totalOnes} ones, {totalMinusOnes} minus ones
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {currentMessageIndex < messages.length && (
        <button className='skip-button' onClick={handleSkip}>Skip</button>
      )}
    </div>
  );
};

export default StartScreen;
