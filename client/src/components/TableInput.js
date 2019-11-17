import React from "react";

class TableInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="form-row text-center">
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="new-item"
              placeholder="enter item"
            />
          </div>
          <div className="col">
            <select
              className="form-control"
              id="category"
              placeholder="select one"
              label="select one"
            >
              <optgroup label="select one">
                <option value={12} selected label="select one">
                  This is item 1
                </option>
                <option value={13} label="video game">
                  This is item 2
                </option>
                <option value={14} label="accessory">
                  This is item 3
                </option>
              </optgroup>
            </select>
          </div>
          <div
            className="col"
            style={{
              width: "175px"
            }}
          >
            <div className="form-row">
              <div
                className="col"
                style={{
                  width: "54px"
                }}
              >
                <input
                  className="form-control d-inline-flex"
                  type="text"
                  id="units"
                  placeholder="units"
                />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              width: "213px"
            }}
          >
            <input
              className="form-control"
              type="text"
              id="cost"
              placeholder="$0.00"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="total_cost"
              placeholder="$0.00"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="sales_price"
              placeholder="$0.00"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="potential_sales"
              placeholder="$0.00"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TableInput;
