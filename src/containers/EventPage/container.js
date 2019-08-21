import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Event } from "../../components";
import { handleDialogToggle } from "../Dialog/actions";
import { loading, fetchStopData } from "../../main/actions";
import {
  handleChartViewChange,
  handleSubmitComment,
  handleRequestVideo
} from "./actions";

class EventPage extends PureComponent {
  componentDidMount = async () => {
    this.interval = setInterval(
      async () => await this.props.fetchStopData(),
      5000
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return <Event {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.Event,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  loading: value => dispatch(loading(value)),
  handleDialogToggle: (open, data) => dispatch(handleDialogToggle(open, data)),
  handleChartViewChange: view => dispatch(handleChartViewChange(view)),
  handleSubmitComment: data => dispatch(handleSubmitComment(data)),
  handleRequestVideo: data => dispatch(handleRequestVideo(data)),
  fetchStopData: () => dispatch(fetchStopData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);
