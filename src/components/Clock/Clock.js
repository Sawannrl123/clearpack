import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return <React.Fragment>{this.state.time}</React.Fragment>;
  }
}

export default Clock;
