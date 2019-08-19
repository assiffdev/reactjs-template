import React, { Component } from "react";
import '../styles/NotFound.css';
export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="notfound">
          <h2> Error: 404 Page Not Found </h2>
        </div>
      </div>
    );
  }
}
