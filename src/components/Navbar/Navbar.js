import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
        <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars"></i>
            </span>
        <a href="#" className="logo">logo</a>
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="#" className="nav-links">Home</a>
          </li>
          <li>
            <a href="#" className="nav-links">About Us</a>
          </li>
          <li>
            <a href="#" className="nav-links">Contact Us</a>
          </li>
        </ul>
      </nav>
        )
    }
}

export default Navbar;