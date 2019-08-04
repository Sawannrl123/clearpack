import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Header, Footer, HomePage, NotFound } from "./components";
import { theme } from './theme'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          render={props => {
            return (
              <div>
                <Header>Labeller Analysis</Header>
                <div>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
                <Footer />
              </div>
            );
          }}
        />
      </Router>
    </ThemeProvider>
  );
};

export default withRouter(App);
