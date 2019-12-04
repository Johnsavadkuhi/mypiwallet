import React  from 'react';
import logo from '../../images/piscan-logo.png';
import { NavLink } from 'react-router-dom';


function Navigation() {

 const handlClick =()=>{
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
   
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('overlapMenu');
  
      });
    }  
  }

  const handlMenuItemClick = () =>{
    
  }
 

  return (<>

    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img src={logo} width="112" height="28" alt="logo"/>
        </NavLink>

        <span role="button"  className="navbar-burger burger  " aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample" onClick={handlClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarBasicExample" aria-expanded="false" className="navbar-menu "  role="menu" onClick={handlMenuItemClick} >
        <div className="navbar-start"  >
        <NavLink to="/" className="navbar-item " >
          Account
        </NavLink>
        <NavLink to="/wallet" className="navbar-item">
          Wallet
        </NavLink>
          <NavLink to="/blocks" className="navbar-item">
            Blocks
          </NavLink>
          <NavLink to="/transactions" className="navbar-item">
            Transactions
        </NavLink>
        </div>

      </div>
    </nav>



  </>)
}

export default Navigation; 
