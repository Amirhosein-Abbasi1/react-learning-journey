import React from "react";
// import { createRoot } from "react-dom/client";
import "./style.css";

class Title extends React.Component {
  render() {
    return (
      <p
        className="title"
        style={{ color: this.props.isLight ? "black" : "white" }}
      >
        {this.props.title}
      </p>
    );
  }
}

export default Title;
