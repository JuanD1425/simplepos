import React from "react";

class SignIn extends React.Component {
  render() {
    return (
      <div className="p-5">
        <div className="like_button_container" data-commentid={1} />
        <div className="text-center">
          <a className="small" href="forgot-password.html">
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
          <a className="small" href="register.html">
            Create an Account!
          </a>
        </div>
      </div>
    );
  }
}

export default SignIn;
