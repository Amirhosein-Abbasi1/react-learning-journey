import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Timer from "./timer";

class App extends React.Component {
  state = {
    title: "Stopwatch",
  };

  render() {
    return (
      <div className="main">
        <Title title={this.state.title} />
        <Timer />
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(<App />);
