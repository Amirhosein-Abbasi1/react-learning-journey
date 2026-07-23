import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";
import TimeList from "./timeList";

const App = () => {
  const [title] = useState("Stopwatch");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([
    "00 : 05 : 23",
    "00 : 05 : 23",
    "00 : 05 : 23",
  ]);

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <body style={{ background: isLight ? "#f1f1f1" : "#090d16" }}>
      <div className="main">
        <Title title={title} isLight={isLight} />
        <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
        <TimeList isLight={isLight}>{timeArr}</TimeList>
      </div>
    </body>
  );
};

createRoot(document.getElementById("root")).render(<App />);
