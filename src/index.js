import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";

const App = () => {
  const [title, setTitle] = useState("Stopwatch");

  const handleSetTitle = () => {
    setTitle("Timer");
  };

  return (
    <div className="main">
      <Title title={title} />
      <Timer handleSetTitle={handleSetTitle} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
