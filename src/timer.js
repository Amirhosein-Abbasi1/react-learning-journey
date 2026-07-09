import React from "react";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }
  
  startTimer = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true
      });

      interval = setInterval( () => {
        this.setState({
          second: this.state.second + 1
        })

        if (this.state.second === 59) {
        this.setState({
          second: 0,
          minute: this.state.minute + 1
        });
      }

      if (this.state.minute === 59) {
        this.setState({
          minute: 0,
          hour: this.state.hour + 1
        });
      }
      }, 1000); 

    }
  };

  stopTimer = () => {
    this.setState({
      isStart: false
    })
    clearInterval(interval);
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    })
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;

    return (
      <>
        <h1 className="timer">
          {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
        </h1>
        <br />
        <div className="button-box">
          <button className="action-btn stop-btn" onClick={this.stopTimer}>
            <p id="icon-btn">⏸</p>
            <p id="name-btn">Stop</p>
          </button>
          <button className="action-btn start-btn" onClick={this.startTimer}>
            <p id="start-icon-btn">▶</p>
          </button>
          <button className="action-btn reset-btn" onClick={this.resetTimer}>
            <p id="icon-btn">⏹</p>
            <p id="name-btn">Reset</p>
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
