import React from "react";

class Email extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input
          className="form-control form-control-user"
          type="email"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="Email Address"
          name="email"
        />
      </div>
    );
  }
}

export default Email;
