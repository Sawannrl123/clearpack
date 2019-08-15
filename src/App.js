import React, { PureComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
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
import { fetchData } from "./main/actions";
import { Dialog } from "./containers";

class App extends PureComponent {
  state = {
    isMounted: false
  };

  componentDidMount = async () => {
    const { isMounted } = this.state;
    if (!isMounted) {
      await this.props.fetchData();
      this.setState(
        {
          isMounted: true
        },
        () => {
          this.interval = setInterval(
            async () => await this.props.fetchData(),
            6000
          );
        }
      );
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  renderHeader = () => {
    return (
      <Header>
        <Settings
          data={this.props.SmartFactoryWorx}
          handleChangeItem={this.props.handleChangeItem}
          handleDateChange={this.props.handleDateChange}
        />
      </Header>
    );
  };

  render = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <Route
              render={() => {
                return (
                  <div>
                    {this.renderHeader()}
                    <div>
                      <Switch>
                        <Route exact path="/" component={SmartFactoryWorx} />
                        <Route component={NotFound} />
                      </Switch>
                    </div>
                    <Dialog
                      title={this.props.Dialog.data.title}
                      action={this.props.Dialog.data.action}
                    >
                      {this.props.Dialog.data.body}
                    </Dialog>
                  </div>
                );
              }}
            />
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  handleChangeItem: (index, value) => dispatch(handleChangeItem(index, value)),
  handleDateChange: (key, date) => dispatch(handleDateChange(key, date)),
  fetchData: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
