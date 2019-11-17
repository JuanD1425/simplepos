import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './untitled.css'
// import PageNotFound from "./components/PageNotFound";
import Inventory from "./components/Inventory";
import Registration from "./components/Registration/RegistrationPage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Index extends Component  {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:3001/express_backend")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  
  render(){
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          strict
          render={() => {
            return <Login />;
          }}
        />
        <Route
          path="/inventory"
          exact
          strict
          render={() => {
            return <Inventory />;
          }}
        />
        <Route
          path="/registration"
          exact
          strict
          render={() => {
            return <Registration />;
          }}
        />
        <Route
          path="/profile"
          exact
          strict
          render={() => {
            return <Profile />;
          }}
        />
        {/* <Route exact strict render={
            () => {
              return <PageNotFound />;
            }
          }/> */}
      </div>
    </Router>
  );
}
}

export default Index;
