import React from "react";

class TownCity extends React.Component {
  render() {
    return (
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input
          className="form-control form-control-user"
          type="text"
          id="exampleBusinessCity"
          placeholder="Town/City"
          name="business_City"
        />
      </div>
    );
  }
}

export default TownCity;
