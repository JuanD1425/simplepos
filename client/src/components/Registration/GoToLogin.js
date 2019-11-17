import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

class GoToLogin extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Link to={{ pathname: "../Index" }}>
        <a className="small" href="./">
          Already have an account? Login!
        </a>
        </Link>
      </div>
    );
  }
}

export default GoToLogin;
