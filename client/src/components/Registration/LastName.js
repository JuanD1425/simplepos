import React from "react";

class LastName extends React.Component {
  render() {
    return (
      <div className="col-sm-6">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleFirstName"
          placeholder="Last Name"
          name="last_name"
        />
      </div>
    );
  }
}

export default LastName;
