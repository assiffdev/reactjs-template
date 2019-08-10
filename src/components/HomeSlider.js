import React, { Component } from "react";
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel2";
import "../../node_modules/react-owl-carousel2/lib/styles.css";
import "../styles/HomeSlider.css";
const options = {
  items: 1,
  margin: 20
};
export default class HomeSlider extends Component {
  render() {
    return (
      <div>
        <OwlCarousel ref="car" options={options}>
          <div className="banner-item banner-item-1 img-width">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="banner-title">
                    <h1>
                      We create enterprise level
                      <br />
                      applications to build
                      <br />
                      business
                    </h1>
                  </div>
                  <div className="btn-banner">
                      <Link className="contact-btn" to="/contact/">Get in Touch</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
