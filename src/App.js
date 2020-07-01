import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      count: 1500,
      onoff: 0,
      label: "Session"
    };
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.convertSeconds = this.convertSeconds.bind(this);
  }
  decrementBreak() {
    if (this.state.break > 1) {
      this.setState((state) => ({
        break: state.break - 1
      }));
    }
  }
  incrementBreak() {
    if (this.state.break < 60) {
      this.setState((state) => ({
        break: state.break + 1
      }));
    }
  }
  decrementSession() {
    if (this.state.session > 1) {
      this.setState((state) => ({
        session: state.session - 1,
        count: state.session * 60 - 60
      }));
    }
  }
  incrementSession() {
    if (this.state.session < 60) {
      this.setState((state) => ({
        session: state.session + 1,
        count: state.session * 60 + 60
      }));
    }
  }
  reset() {
    clearInterval(this.timer);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState((state) => ({
      break: 5,
      session: 25,
      count: 1500,
      onoff: 0,
      label: "Session"
    }));
  }

  convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    function prependZero(number) {
      if (number < 10) return "0" + number;
      else return number;
    }
    return prependZero(min) + ":" + prependZero(sec);
  }

  start() {
    if (this.state.onoff === 0) {
      this.timer = setInterval(() => this.counter(), 1000);
      this.setState({
        onoff: 1
      });
    } else {
      clearInterval(this.timer);
      this.setState({
        onoff: 0
      });
    }
  }

  counter() {
    if (this.state.count >= 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
    if (this.state.count === 0) {
      document.getElementById("beep").play();
    }
    if (this.state.count < 0 && this.state.label === "Session") {
      clearInterval(this.timer);
      this.setState({
        count: this.state.break * 60,
        onoff: 0,
        label: "Break"
      });
      this.start();
    }
    if (this.state.count < 0 && this.state.label === "Break") {
      clearInterval(this.timer);
      this.setState({
        count: this.state.session * 60,
        onoff: 0,
        label: "Session"
      });
      this.start();
    }
  }

  render() {
    return (
      <div className="container h-100 bg-dark">
        <div className="row h-100 align-items-center">
          <div className="col text-center maxw">
            <div className="row">
              <div className="col">
                <h1 className="display-4">Pomodoro Clock</h1>
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <div className="session border rounded-circle p-5 m-auto">
                  <h2 id="timer-label" className="text-white-50">{this.state.label}</h2>
                  <div id="time-left" className="display-3">
                    {this.convertSeconds(this.state.count)}
                  </div>
                  <audio
                    id="beep"
                    src="http://static1.grsites.com/archive/sounds/musical/musical012.mp3"
                  ></audio>
                  <div id="start-stop">
                    <span
                      id="start_stop"
                      className="text-light action"
                      onClick={this.start}
                    >
                      <i className="fas fa-play"></i>
                      <i className="fas fa-pause"></i>
                    </span>
                    <span
                      id="reset"
                      className="text-light ml-3 action"
                      onClick={this.reset}
                    >
                      <i className="fas fa-undo-alt"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="lead" id="break-label">
                  Break Length
                </div>
                <span
                  id="break-decrement"
                  className="text-light action"
                  onClick={this.decrementBreak}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span id="break-length" className="lead mx-3">
                  {this.state.break}
                </span>
                <span
                  id="break-increment"
                  className="text-light action"
                  onClick={this.incrementBreak}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="col">
                <div className="lead" id="session-label">
                  Session Length
                </div>
                <span
                  id="session-decrement"
                  className="text-light action"
                  onClick={this.decrementSession}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span id="session-length" className="lead mx-3">
                  {this.state.session}
                </span>
                <span
                  id="session-increment"
                  className="text-light action"
                  onClick={this.incrementSession}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-white-50">
                Coded by <a href="http://www.vinweb.hu" className="text-white-50">Janos Vincze</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
