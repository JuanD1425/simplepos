import React, { Component } from "react";
import Table from "./Table";
import TableInput from "./TableInput";
import SubmitItem from "./SubmitItem"

class Inventory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-dark mb-1">Inventory</h3>
        <Table />
        <TableInput />
        <SubmitItem />
      </div>
    );
  }
}

export default Inventory;
