import React from "react";

class SecondPassword extends React.Component {
  render() {
    return (
      <div className="col-sm-6">
        <input
          className="form-control form-control-user"
          type="password"
          id="exampleRepeatPasswordInput"
          placeholder="Repeat Password"
          name="password_repeat"
        />
      </div>
    );
  }
}

export default SecondPassword;
