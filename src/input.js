import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        type="number"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
