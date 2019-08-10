import React, { Component } from "react";
import ContactForm from './ContactForm';
import "../styles/Contact.css";
export default class Contact extends Component {
  render() {
    return (
        <div className="contact-page">
        <div className="container">
        
          <div className="title-info">
            <h3>Get in Touch</h3>
            <div className="title-details">
            <p>Got a question about what we do? Want to hire us? Then the best way to get in touch is via email using the form below. Tell us a bit about your project or what you need and we’ll get back to you as soon as we can:</p>
          </div>
          </div>
          <div className="contact-form">
              <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
