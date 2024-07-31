import React, { useEffect, useState } from 'react';
import './congrats.css';

const CongratsPage: React.FC = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveText = () => {
      const newTop = Math.floor(Math.random() * (window.innerHeight - 50));
      const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));
      setPosition({ top: newTop, left: newLeft });
    };

    const intervalId = setInterval(moveText, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="congrats-page">
      <div className="annoying-text" style={{ top: position.top, left: position.left }}>
        Hi Brian
      </div>
    </div>
  );
};

export default CongratsPage;
