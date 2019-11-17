import React from "react";

class Address extends React.Component {
  render() {
    return (
      <div className="form-group col-sm-12">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleBusinessAddress"
          placeholder="Business Address"
          name="business_address"
        />
      </div>
    );
  }
}

export default Address;
