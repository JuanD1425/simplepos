import React from "react";

class LoginButton extends React.Component {
  render() {
    return (
      <div>
        <button
        className="btn btn-primary btn-block text-white btn-user"
        type="submit"
      >
        Login
      </button>
      </div>
    );
  }
}

export default LoginButton;
