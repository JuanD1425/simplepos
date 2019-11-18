import React from "react";
// import { BrowserRouter as Link } from 'react-router-dom';
 

class Accordion extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav text-light" id="accordionSidebar">
        <li className="nav-item" role="presentation" />
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="./registration">
            <i className="fas fa-window-maximize" />
            <span>Register</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="./">
            <i className="fas fa-window-maximize" />
            <span>Login</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="./pos">
            <i className="fas fa-window-maximize" />
            <span>Main Screen</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="./inventory">
            <i className="fas fa-window-maximize" />
            <span>Inventory</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="./dashboard">
            <i className="fas fa-window-maximize" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link active" href="./profile">
            <i className="fas fa-window-maximize" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default Accordion;
