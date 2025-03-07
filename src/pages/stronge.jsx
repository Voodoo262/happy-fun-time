import React, { useEffect, useState } from "react";
import "@fontsource/fira-mono"; // Monospace font for terminal look

const StrongETerminal = () => {
  const [lines, setLines] = useState(["> STRONGE GTFO"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => [...prevLines, "> STRONGE GTFO"]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-green-400 font-mono p-5 overflow-hidden">
      <div className="h-full w-full max-w-2xl mx-auto border border-green-500 p-4 shadow-lg" style={{ minHeight: "80vh" }}>
        <div className="h-full overflow-y-auto">
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrongETerminal;
