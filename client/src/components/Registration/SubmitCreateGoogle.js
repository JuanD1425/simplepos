import React from "react";

class SubmitCreateGoogle extends React.Component {
  render() {
    return (
      <a
        className="btn btn-primary btn-block text-white btn-google btn-user"
        role="button"
      >
        <i className="fab fa-google" />
          Register with Google
      </a>
    );
  }
}

export default SubmitCreateGoogle;
