import React, { Component } from "react";
import { Switch } from "react-router";

// import logo from './logo.svg';
import "./App.css";
import "./untitled.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrsageNotFound from "./components/PageNotFound";
import Inventory from "./components/Inventory";
import Registration from "./components/Registration/RegistrationPage";
import Login from "./components/Login";
import Profile from "./components/Profile";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI(input) {
    fetch("http://localhost:3000/express_backend")
      .then(res => res.text())
      .then(res =>
        this.setState({
          apiResponse: res
        })
      );
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path='/'
              exact
              strict
              render={() => {
                return <Login />;
              }}
            />
            <Route
              path='/inventory'
              exact
              strict
              render={() => {
                return <Inventory />;
              }}
            />
            <Route
              path='/registration'
              exact
              strict
              render={() => {
                return <Registration />;
              }}
            />
            <Route
              path='/profile'
              exact
              strict
              render={() => {
                return <Profile />;
              }}
            />
            <p className='App-intro'> {this.state.apiResponse} </p>;
            {/* <Route
              path="/express_backend"
              exact
              strict
              render={() => {
                return <p className="App-intro">{this.state.apiResponse}</p>;
              }}
            /> */}
            {/* <Route
              exact
              strict
              render={() => {
                return <PageNotFound />;
              }}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Index;
