import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";
import context from "./context";

const App = () => {
  const [title] = useState("Stopwatch");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <context.Provider
      value={{
        timeArr: timeArr,
        setTimeArr: setTimeArr,
        isLight: isLight,
      }}
    >
      <body style={{ background: isLight ? "#f1f1f1" : "#090d16" }}>
        <div className="main">
          <Title title={title} isLight={isLight} />
          <Timer handleSetIsLight={handleSetIsLight} />
        </div>
      </body>
    </context.Provider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
