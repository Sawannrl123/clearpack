import { connect } from "react-redux";
import { Event } from "../../components";
import { handleDialogToggle } from "../Dialog/actions";
import { loading } from "../../main/actions";
import {
  handleChartViewChange,
  handleSubmitComment,
  handleRequestVideo
} from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  loading: value => dispatch(loading(value)),
  handleDialogToggle: (open, data) => dispatch(handleDialogToggle(open, data)),
  handleChartViewChange: view => dispatch(handleChartViewChange(view)),
  handleSubmitComment: data => dispatch(handleSubmitComment(data)),
  handleRequestVideo: data => dispatch(handleRequestVideo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
