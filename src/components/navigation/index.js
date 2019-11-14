import React from 'react';
import logo from '../../images/piscan-logo.png';
import { NavLink } from 'react-router-dom';


function Navigation() {

  return (<>

    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to=" ">
          <img src={logo} width="112" height="28" alt="logo"/>
        </NavLink>

        <span role="button"  className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            Home
      </NavLink>

          <NavLink to="/blocks" className="navbar-item">
            Blocks
      </NavLink>

          <NavLink to="/transactions" className="navbar-item">
            Transactions
        </NavLink>
        <NavLink to="/account" className="navbar-item">
          Account
        </NavLink>
        <NavLink to="/contracts" className="navbar-item">
            Contracts
        </NavLink>
        <NavLink to="/utilities" className="navbar-item">
            Utilities
        </NavLink>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <NavLink to="/transactions" className="navbar-link">
              Transactions
        </NavLink>

            <div className="navbar-dropdown">
              <NavLink to="/about" className="navbar-item">
                About
          </NavLink>
              <NavLink to="/jobs" className="navbar-item">
                Jobs
          </NavLink>
              <NavLink to="/contacts" className="navbar-item">
                Contact
          </NavLink>
              <hr className="navbar-divider" />
              <NavLink to="/reports" className="navbar-item">
                Report an issue
          </NavLink>
            </div>
          </div>
           */}
        </div>

      </div>
    </nav>



  </>)
}

export default Navigation; 
