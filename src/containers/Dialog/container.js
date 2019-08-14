import { connect } from "react-redux";
import { Dialog } from "../../components";
import { handleDialogToggle } from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.Dialog
});

const mapDispatchToProps = dispatch => ({
  handleDialogToggle: open => dispatch(handleDialogToggle(open))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
