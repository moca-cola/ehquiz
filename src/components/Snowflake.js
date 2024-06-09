import React, { useState, useEffect } from 'react';
import './Snowflake.css';

const Snowflake = () => {
  const [flakes, setFlakes] = useState([]);
  const [flakeCount, setFlakeCount] = useState(0);

  const handleAnimationEnd = (id, flakeNumber) => {
    console.log(`Snowflake ${flakeNumber} was deleted`);
    setFlakes(prevFlakes => prevFlakes.filter(flake => flake.id !== id));
  };

  useEffect(() => {
    const spawnFlake = () => {
      setFlakes(prevFlakes => {
        if (prevFlakes.length >= 256) {
          return prevFlakes;
        }
        const newFlake = {
          id: Date.now() + Math.random(), // Unique identifier
          flakeNumber: flakeCount + 1, // Flake number
          left: Math.random() * 100,
          top: -10, // Start above the viewport
          size: Math.random() * 4 + 1, // Random size between 1 and 5
          animationDuration: Math.random() * 5 + 3, // Random duration between 3 and 8 seconds
          animationDelay: Math.random() * 5, // Random delay between 0 and 5 seconds
          angle: Math.random() * 360, // Random angle for diagonal movement
        };
        setFlakeCount(flakeCount + 1);
        return [...prevFlakes, newFlake];
      });
    };

    const intervalId = setInterval(spawnFlake, 300); // Spawn a new flake every 300 milliseconds

    // Cleanup
    return () => clearInterval(intervalId);
  }, [flakeCount]);

  return (
    <div className="snowflake-container">
      <div className="snowflake-counter">Current Snowflakes: {flakes.length}</div>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          onAnimationEnd={() => handleAnimationEnd(flake.id, flake.flakeNumber)}
          style={{
            left: `${flake.left}%`,
            top: `${flake.top}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            transform: `rotate(${flake.angle}deg)`, // Apply random angle
          }}
        />
      ))}
    </div>
  );
};

export default Snowflake;
