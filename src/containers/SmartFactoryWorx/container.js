import { connect } from "react-redux";
import { SmartFactoryWorx } from "../../components";
import { handleDialogToggle } from "../Dialog/actions";
import { loading } from "../../main/actions";
import {
  handleChartViewChange,
  handleTableViewChange,
  handleDayChange,
  handleSubmitComment,
  handleRequestVideo
} from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.SmartFactoryWorx,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  loading: value => dispatch(loading(value)),
  handleDialogToggle: (open, data) => dispatch(handleDialogToggle(open, data)),
  handleChartViewChange: view => dispatch(handleChartViewChange(view)),
  handleTableViewChange: view => dispatch(handleTableViewChange(view)),
  handleDayChange: day => dispatch(handleDayChange(day)),
  handleSubmitComment: data => dispatch(handleSubmitComment(data)),
  handleRequestVideo: data => dispatch(handleRequestVideo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFactoryWorx);
