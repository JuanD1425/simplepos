import React from "react";

class State extends React.Component {
  render() {
    return (
      <div className="col-sm-6">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleBusinessState"
          placeholder="State Abbr."
          name="business_state"
        />
      </div>
    );
  }
}

export default State;
