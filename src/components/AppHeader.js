import React, { Component } from "react";
import "../styles/AppHeader.css";
import { Link } from "react-router-dom";
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
             <Link to="/"><img src="assets/images/loremlogo.png" height="80px"alt="loremLogo" /></Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About Us</Link>
                </li>
              </ul>
            </nav>
            </div>
        </header>
    );
  }
}

export default AppHeader;
