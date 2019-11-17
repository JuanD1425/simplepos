import React from "react";

class FirstName extends React.Component {
  render() {
    return (
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleFirstName"
          placeholder="First Name"
          name="first_name"
        />
      </div>
    );
  }
}

export default FirstName;
