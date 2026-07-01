import React, { Component } from "react";

/*
  Class Component Example

  A class component is an ES6 class that extends React.Component.
  It must include a render() method that returns JSX.
  Class components can have state and lifecycle methods.
*/

class Welcome extends Component {

  // Constructor initializes the component's state
  constructor(props) {
    super(props);

    this.state = {
      name: "Amir"
    };
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    console.log("Component has been mounted.");
  }

  // Method to update the state
  changeName = () => {
    this.setState({
      name: "Amirhosein"
    });
  };

  // The render method is required in every class component
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>

        {/* Calls the method to update state */}
        <button onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

// Exporting the component for use in other files
export default Welcome;
