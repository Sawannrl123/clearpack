import { connect } from "react-redux";
import { SmartFactoryWorx } from "../../components";
import { handleTableViewChange } from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.SmartFactoryWorx,
  ...state.Main
});

const mapDispatchToProps = dispatch => ({
  handleTableViewChange: view => dispatch(handleTableViewChange(view))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFactoryWorx);
