import React from "react";
// import { createRoot } from "react-dom/client";
import "./style.css";

class Title extends React.Component {
  render() {
    return <p className="title">{this.props.title}</p>;
  }
}

export default Title;
