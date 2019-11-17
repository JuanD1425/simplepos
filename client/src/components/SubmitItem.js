import React from "react";

class SubmitItem extends React.Component {
  render() {
    return (
      <div className="btn-group" role="group">
        <div className="row">
          <div className="col d-xl-flex justify-content-xl-center">
            <div className="btn-group" role="group">
              <button
                className="btn btn-primary border rounded"
                id="add-item"
                type="button"
              >
                Add Item
              </button>
              <button
                className="btn btn-primary border rounded"
                id="update"
                type="button"
                style={{
                  margin: "0px 30px"
                }}
              >
                Edit Item
              </button>
              <button className="btn btn-primary border rounded" id="delete">
                Delete Item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitItem;
