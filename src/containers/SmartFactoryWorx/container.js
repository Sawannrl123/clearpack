import { connect } from "react-redux";
import { SmartFactoryWorx } from "../../components";
import { handleDialogToggle } from "../Dialog/actions";
import {
  handleChartViewChange,
  handleTableViewChange,
  handleDayChange
} from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.SmartFactoryWorx,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  handleDialogToggle: (open, data) => dispatch(handleDialogToggle(open, data)),
  handleChartViewChange: view => dispatch(handleChartViewChange(view)),
  handleTableViewChange: view => dispatch(handleTableViewChange(view)),
  handleDayChange: day => dispatch(handleDayChange(day))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFactoryWorx);
