import React, { Component } from "react";
import "../styles/AppHeader.css";
import { Link } from "react-router-dom";
import Logo from  "../assets/images/loremlogo.png"
export class AppHeader extends Component {
  constructor(props){
    super(props);
    this.state={ showCorss: false }
  }
  render() {
    return (
        <header>
          <div className="container">
            <div id='app-logo'>
             <Link to="/"><img src={Logo} height="80px"alt="loremLogo" /></Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/services/">Serives</Link>
                </li>
                <li>
                  <Link to="/whyus/">Why Us</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>
            </div>
        </header>
    );
  }
}

export default AppHeader;
