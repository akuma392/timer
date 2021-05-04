import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      timer: false,
    };
  }

  handlewatch = () => {
    this.setState({ stopwatch: !this.state.stopwatch });
  };
  handleTimer = () => {
    this.setState({ stopwatch: !this.state.stopwatch });
  };
  render() {
    return (
      <>
        <h1>Timer</h1>
        <div className="block">
          {this.state.stopwatch ? (
            <Stopwatch handleTimer={this.handleTimer} />
          ) : (
            <button onClick={this.handlewatch}>stopwatch</button>
          )}
          <button>countdown</button>
        </div>
      </>
    );
  }
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timer: false,
    };

    this.watch = null;
  }

  handleStart = () => {
    this.setState({
      timer: !this.state.timer,
    });
    this.watch = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.watch);
  }
  render() {
    return (
      <div className="watch">
        <h2>Stopwatch</h2>
        <span onClick={this.props.handleTimer} className="close">
          X
        </span>
        {/* <h3>00:00:00</h3> */}
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <div className="block">
          {this.state.timer ? (
            <div>
              {/* <button>Resume</button> <button>Reset</button> */}
              <button>stop</button>
            </div>
          ) : (
            <button onClick={this.handleStart}>start</button>
          )}
        </div>
      </div>
    );
  }
}

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <></>;
  }
}
export default Timer;
