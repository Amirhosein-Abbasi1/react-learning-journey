import React from "react";

var interval;

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      isStart: false,
    };
  }

  startTimer = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });

      interval = setInterval(() => {
        this.setState({
          millisecond: this.state.millisecond + 1,
        });

        if (this.state.millisecond === 99) {
          this.setState({
            millisecond: 0,
            second: this.state.second + 1,
          });
        }

        if (this.state.second === 59) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }

        if (this.state.minute === 59) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 10);
    }
  };

  stopTimer = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };

  toggleTimer = () => {
    if (this.state.isStart) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    let milli = this.state.millisecond;

    return (
      <>
        <div className="timer">
          <p
            className="timer-numbers"
            style={{ color: this.props.isLight ? "black" : "white" }}
          >
            {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} : `}
          </p>
          <p
            className="timer-milli"
            style={{ color: this.props.isLight ? "black" : "white" }}
          >
            {`${milli > 9 ? milli : "0" + milli}`}
          </p>
        </div>
        <br />
        <div className="button-box">
          <button className="action-btn reset-btn">
            <p id="icon-btn">🔘</p>
            <p id="name-btn">Lap</p>
          </button>
          <button className="action-btn start-btn" onClick={this.toggleTimer}>
            {this.state.isStart ? (
              <>
                <p id="icon-btn">⏸</p>
              </>
            ) : (
              <>
                <p id="start-icon-btn">▶</p>
              </>
            )}
          </button>
          <button className="action-btn reset-btn" onClick={this.resetTimer}>
            <p id="icon-btn">⏹</p>
            <p id="name-btn">Reset</p>
          </button>
        </div>
        <button
          className="action-btn change-title-btn"
          type="button"
          onClick={this.props.handleSetIsLight}
        >
          {this.props.isLight ? "Dark background" : "Light background"}
        </button>
      </>
    );
  }
}

export default Timer;
