import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div className="container-fluid d-flex flex-column p-0">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="../public/index.html"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>simplePOS</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item" role="presentation" />
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="register.html">
                <i className="fas fa-window-maximize" />
                <span>Register</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="index.html">
                <i className="fas fa-window-maximize" />
                <span>Login</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="pos.html">
                <i className="fas fa-window-maximize" />
                <span>Main Screen</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link active" href="inventory.html">
                <i className="fas fa-window-maximize" />
                <span>Inventory</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="dashboard.html">
                <i className="fas fa-window-maximize" />
                <span>Sales Performance</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="profile.html">
                <i className="fas fa-window-maximize" />
                <span>Profile</span>
              </a>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
