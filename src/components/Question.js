import React, { useEffect, useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Howl } from 'howler';

const Question = ({ question, onAnswer }) => {
  const [visible, setVisible] = useState(true); 
  const [buttonsClickable, setButtonsClickable] = useState(true); 
  const [currentMusicInstance, setCurrentMusicInstance] = useState(null);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    marginTop: visible ? 0 : -50,
    from: { opacity: 0, marginTop: -50 },
    onRest: () => {
      if (!visible) {
        setTimeout(() => {
          setVisible(true); 
          setButtonsClickable(true); 
        }, 1000);
      }
    }
  });

  const setCurrentMusicIfNeeded = useCallback((source) => {
    if (source && source !== (currentMusicInstance && currentMusicInstance._src)) {
      const sound = new Howl({
        src: [source],
        loop: question.music.loop,
        onplay: () => console.log('Music started playing'),
        onloaderror: (id, error) => console.error('Failed to load music:', error)
      });
  
      if (currentMusicInstance) {
        const fadeOutDuration = 800; // Duration of the fade-out transition in milliseconds
        const fadeInStart = fadeOutDuration * 0.5; // Start fading in the new track halfway through the fade-out
        currentMusicInstance.fade(1, 0, fadeOutDuration); // Start fading out the current track
        setTimeout(() => {
          sound.fade(0, 1, 1000).play(); // Start fading in and playing the next track
          setCurrentMusicInstance(sound); // Set the next track as the current track
        }, fadeInStart); // Start the fade-in of the next track halfway through the fade-out of the current track
      } else {
        sound.fade(0, 1, 1000).play(); // If there's no current track, start fading in and playing the next track immediately
        setCurrentMusicInstance(sound); // Set the next track as the current track
      }
    }
  }, [currentMusicInstance, question.music]);

  useEffect(() => {
    setCurrentMusicIfNeeded(question.music?.source);
  }, [question.music?.source, setCurrentMusicIfNeeded]);

  const handleAnswerClick = (values) => {
    setButtonsClickable(false); 
    setVisible(false); 
    setTimeout(() => {
      onAnswer(values); 
    }, 1000);
  };

  return (
    <animated.div style={props} className="question">
      <h2>{question.text}</h2>
      {visible && question.answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => buttonsClickable && handleAnswerClick(answer.values)} disabled={!buttonsClickable}>
          {answer.text}
        </button>
      ))}
    </animated.div>
  );
};

export default Question;
