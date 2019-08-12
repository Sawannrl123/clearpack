import { connect } from "react-redux";
import { SmartFactoryWorx } from "../../components";
import {} from "./actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.SmartFactoryWorx
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFactoryWorx);
