import React from "react";
import PropTypes from "prop-types";
import { code } from "../../utils";

class AlarmScroll extends React.PureComponent {
  state = {
    index: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.scrollAlarm(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  scrollAlarm() {
    this.setState(
      prevState => ({ index: prevState.index + 1 }),
      () => {
        const { index } = this.state;
        const { alarm } = this.props;
        if (index === alarm.length) {
          this.setState({ index: 0 });
        }
      }
    );
  }
  render() {
    const { index } = this.state;
    const { alarm } = this.props;
    return (
      <React.Fragment>
        {alarm[index] ? code[alarm[index].code] : "-"}
      </React.Fragment>
    );
  }
}

AlarmScroll.propTypes = {
  alarm: PropTypes.array.isRequired
};

AlarmScroll.defaultProps = {
  alarm: []
};

export default AlarmScroll;
