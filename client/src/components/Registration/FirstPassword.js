import React from "react";

class FirstPassword extends React.Component {
  render() {
    return (
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input
          className="form-control form-control-user"
          type="password"
          id="examplePasswordInput"
          placeholder="Password"
          name="password"
        />
      </div>
    );
  }
}

export default FirstPassword;
