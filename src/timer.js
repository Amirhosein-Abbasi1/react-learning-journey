import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      countdown: 0,
    };
  }

  startTimer = () => {
    clearInterval(this.intervalk);

    this.setState({
      countdown: Number(this.props.startValue),
    });

    this.intervalk = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 1) {
          clearInterval(this.intervalk);
          return { countdown: 0 };
        }

        return {
          countdown: prevState.countdown - 1,
        };
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalk);
  }

  render() {
    return (
      <>
      <br/><br/>
        <button onClick={this.startTimer} type="button">
          START
        </button>
        <br/><br/>

        <h1>{this.state.countdown}</h1>
      </>
    );
  }
}

export default Timer;