import React, { Component } from "react";
import "../styles/Services.css";
import { Icon } from 'react-icons-kit';
import {deviceLaptop} from 'react-icons-kit/typicons/deviceLaptop';
import {deviceDesktop} from 'react-icons-kit/typicons/deviceDesktop';
import {vendorApple} from 'react-icons-kit/typicons/vendorApple';
import {worldOutline} from 'react-icons-kit/typicons/worldOutline';
import {spannerOutline} from 'react-icons-kit/typicons/spannerOutline';
import {userOutline} from 'react-icons-kit/typicons/userOutline'
export default class Services extends Component {
  render() {
    return (
      
      <div className="container">
          <div className="services-page">
        <div className="services-top">
          <h2>How We Serve Our Clients Better</h2>
          <p className="services-top-details">
            NGBS believes in providing the best services to our clients. We
            cater for small, medium and enterprises level businesses. We follow
            proper processes and standards to provide end-to-end services and
            software solutions, which are stable, highly scalable and
            customizable for future growth. Our business analysts, software
            architects, marketing and strategy experts work closely with our
            clients and guide them in the right direction as our main goal is to
            make each and every platform that we deliver highly successful.
          </p>
        </div>
        <div className="services-boxes">
          <div className="service-box">
              <Icon className="service-icon" icon={deviceLaptop} size={32} />
            <h4 className="service-title">Web Development</h4>
            <p className="service-text">
              We have vast experience in developing web applications using
              Microsoft stack and Mean stack besides responsive technologies.
            </p>
          </div>
          <div className="service-box">
          <Icon className="service-icon" icon={deviceDesktop} size={32} />
            <h4 className="service-title">Software Development</h4>
            <p className="service-text">
              We have a team of developers skilled in developing Custom Software
              Solution to automate your business processes.
            </p>
          </div>
          <div className="service-box">
          <Icon className="service-icon" icon={vendorApple} size={32} />
            <h4 className="service-title">Mobile Apps Development</h4>
            <p className="service-text">
              A proven process to deliver high quality apps is what works for
              us, so you can be sure that a quality app in the best possible
              time will be delivered to you.
            </p>
          </div>
          <div className="service-box">
          <Icon className="service-icon" icon={worldOutline} size={32} />
            <h4 className="service-title">Web & Graphics Design</h4>
            <p className="service-text">
              We provide web designing services like logo design, brochures,
              banners, responsive web templates suited for handheld devices like
              mobile phones, tablets and phablets etc.
            </p>
          </div>
          <div className="service-box">
          <Icon className="service-icon" icon={spannerOutline} size={32} />
            <h4 className="service-title">Support & Maintenance</h4>
            <p className="service-text">
              We provide 24/7 support and maintenance services for applications.
              We have a dedicated team of professionals who work in shifts and
              provide round the clock support and maintenance services.
            </p>
          </div>
          <div className="service-box">
          <Icon className="service-icon" icon={userOutline} size={32} />
            <h4 className="service-title">Dedicated Teams</h4>
            <p className="service-text">
              Dedicated teams is the key to delivering projects within the
              specified timeline with the utmost quality and then helping in the
              growth and success of a business.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
