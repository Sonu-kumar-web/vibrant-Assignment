import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./assets/sass/app.css";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import EditUserData from "./components/EditUserData";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/create" component={AddUser} />
            <Route exact path="/edit" component={EditUserData} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(App);
