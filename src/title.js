import React from "react";
// import { createRoot } from "react-dom/client";
import "./style.css";

class Title extends React.Component {
  render() {
    return <h1 className="title">{this.props.title}</h1>;
  }
}

export default Title;