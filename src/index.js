import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Title from "./title";
import Input from "./input";
import Timer from "./timer";

class App extends React.Component {
  state = {
    time: "",
  };

  state2 = {
    title: "choose second??",  
  };

  handleChange = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <Title title={this.state2.title} />
        <Input value={this.state.time} onChange={this.handleChange} />
        <Timer startValue={this.state.time} handleChangeTitle={this.handleChangeTitle} />
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(<App />);
