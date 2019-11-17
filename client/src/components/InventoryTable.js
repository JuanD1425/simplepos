import React from "react";

class InventoryTable extends React.Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
            </tr>
            <tr>
              <td>Cell 3</td>
              <td>Cell 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InventoryTable;
