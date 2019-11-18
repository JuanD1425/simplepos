import React from "react";

class SubmitCreateFacebook extends React.Component {
  render() {
    return (
      <a
        className="btn btn-primary btn-block text-white btn-facebook btn-user"
        role="button" href="/registration"
      >
        <i className="fab fa-facebook-f" />
          Register with Facebook
      </a>
    );
  }
}

export default SubmitCreateFacebook;
