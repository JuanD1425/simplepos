import React from "react";

class BusinessName extends React.Component {
  render() {
    return (
      <div className="col-sm-12 mb-3 mb-sm-0">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleBusinessName"
          placeholder="Business Name"
          name="business_name"
        />
      </div>
    );
  }
}

export default BusinessName;
