import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <thead className="text-center justify-content-center">
          <tr>
            <th
              style={{
                width: "130.859px"
              }}
            >
              Product
            </th>
            <th
              className="category"
              style={{
                width: "130.859px"
              }}
            >
              Category
            </th>
            <th
              style={{
                width: "130.859px"
              }}
            >
              Quantity
            </th>
            <th
              style={{
                width: "130.859px"
              }}
            >
              Cost
            </th>
            <th
              style={{
                width: "130.859px"
              }}
            >
              Total Cost
            </th>
            <th
              style={{
                width: "130.859px"
              }}
            >
              Sales Price
            </th>
            <th
              style={{
                padding: "12px",
                paddingRight: "5px",
                width: "130.859px"
              }}
            >
              Potential Sales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table>
    );
  }
}

export default Table;
