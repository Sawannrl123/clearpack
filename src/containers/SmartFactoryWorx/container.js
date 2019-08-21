import { connect } from "react-redux";
import { SmartFactoryWorx } from "../../components";
import { handleTableViewChange } from "./actions";
import { handleDialogToggle } from "../Dialog/actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.SmartFactoryWorx,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  handleTableViewChange: view => dispatch(handleTableViewChange(view)),
  handleDialogToggle: (open, data) => dispatch(handleDialogToggle(open, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFactoryWorx);
