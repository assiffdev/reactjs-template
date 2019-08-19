import React, { Component } from "react";
import "../styles/AppHeader.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/loremlogo.png";
export class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { showCorss: false };
  }
  render() {
    return (
      <header >
      <div className="container group">
        
          <div className="header-logo">
            <Link to="/">
              <img src={Logo} height="80px" alt="loremLogo" />
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="nav-list group">
              <li>
                <NavLink  exact={true} className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" activeClassName="active" to="/about/">About</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" activeClassName="active" to="/services/">Services</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" activeClassName="active" to="/whyus/">Why Us</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" activeClassName="active" to="/contact/">Contact</NavLink>
              </li>
            </ul>
          </nav>
        
      </div>
      </header>
    );
  }
}

export default AppHeader;
