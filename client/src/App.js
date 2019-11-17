import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './untitled.css'
import PageNotFound from "./components/PageNotFound";
import Registration from "./components/Registration/RegistrationPage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Index() {
  return (
    // <div className="Index">
    //   <Ind />
    // </div>

    <Router>
        <div>
          <Route path="/" exact strict render={
            () => {
              return <Login />;
            }
          }/>
          <Route path="/registration" exact strict render={
            () => {
              return <Registration />;
            }
          }/>
          <Route path="/profile" exact strict render={() => {return <Profile />;}}/>
          <Route exact strict render={
            () => {
              return <PageNotFound />;
            }
          }/>
        </div>
    </Router>
  );
}

export default Index;
