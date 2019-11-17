import React, { Component } from "react";
import { BrowserRouter as Link } from 'react-router-dom'

class CreateButton extends Component {
  render() {
    return (
      <div>
        <Link to = {{"pathname": "./Registration/RegistrationPage"}}>
        <a href="/registration">Create an Account</a>
        </Link>
      </div>
    );
  }
}

export default CreateButton;
