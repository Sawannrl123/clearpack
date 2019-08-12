import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Header, NotFound, Settings } from "./components";
import { SmartFactoryWorx } from "./containers";
import { theme } from "./theme";
import {
  handleChangeItem,
  handleDateChange
} from "./containers/SmartFactoryWorx/actions";

const App = props => {
  const renderHeader = () => {
    return (
      <Header>
        <Settings
          data={props.SmartFactoryWorx}
          handleChangeItem={props.handleChangeItem}
          handleDateChange={props.handleDateChange}
        />
      </Header>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          render={() => {
            return (
              <div>
                {renderHeader()}
                <div>
                  <Switch>
                    <Route exact path="/" component={SmartFactoryWorx} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            );
          }}
        />
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  handleChangeItem: (index, value) => dispatch(handleChangeItem(index, value)),
  handleDateChange: (key, date) => dispatch(handleDateChange(key, date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
