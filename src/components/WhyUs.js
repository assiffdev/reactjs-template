import React, { Component } from "react";
import "../styles/WhyUs.css";
import { Link } from "react-router-dom";
export default class WhyUs extends Component {
  render() {
    return (
      <div className="why-us-page">
        <div className="container">
          <div className="why-us-contents">
            <h3 className="why-us-title">Why NGBS</h3>
            <p className="why-us-text">
              NGBS analysts, designers and developers work closely with clients
              to deliver a quality product within budget. NGBS staff have a
              wealth of experience, across diverse sectors from central
              government to investment banking sectors, and across platforms,
              from mainframes, servers, desktops, web and mobile applications.
              If you have a detailed design or just a concept for an application
              our experienced staff can assist you from any stage. For a
              callback, simply put your number and convenient time in your reply{" "}
              <Link to="/contact">email</Link>.
            </p>
            <ul className="why-us-toplist">
              <li>
                If you are looking for more resources for software development
              </li>
              <li>
                Or 24/7 technical support/maintenance services for your
                applications
              </li>
              <li>
                Or you want to create a prototype or production app within a
                tight budget
              </li>
              <li>
                Or you got legacy apps that need re-engineering without
                impacting your production teams NGBS is a perfect fit for your
                requirements.
              </li>
            </ul>
            <h4 className="why-us-title-2">
              Some key benefits of outsourcing to NGBS{" "}
            </h4>
            <ul className="why-us-toplist">
              <li>
                Allows you to focus on core business activity, with more
                emphasis on servicing clients and winning business rather than
                carrying out the development tasks.
              </li>
              <li>Helps you stay ahead of your competition.</li>
              <li>
                Improved production and output of staff as they will focus on
                higher value tasks.
              </li>
              <li>Increased profitability and shareholder wealth.</li>
              <li>Improved service quality with faster turnaround times.</li>
              <li>
                <b>Achieve significant cost reduction on:</b>
                <ul>
                  {" "}
                  <li>Wages/Salaries Employment Taxes</li>
                  <li>Insurance and other benefits</li>
                  <li> In-house systems.</li>
                </ul>
              </li>
              <li>
                <b>
                  Excellent service, driven by quality, simple fixed rates, no
                  hidden fees, no travelling costs, fast turnaround, design and
                  marketing advice for clients.
                </b>
              </li>
              <li>
                <b>
                  Building and maintaining long-term relationships and all with
                  a friendly support team.
                </b>
              </li>
            </ul>
            <p className="why-us-text">There are prerequisites if offshoring is going to work for a
            company, we would be pleased to discuss these with you.
            <Link to="/contact">Get in touch</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
