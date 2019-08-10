import React, { Component } from 'react'
import '../styles/About.css';
import '@icon/themify-icons/themify-icons.css'
import { Icon } from 'react-icons-kit';
import {deviceDesktop} from 'react-icons-kit/typicons/deviceDesktop';
import {deviceTablet} from 'react-icons-kit/typicons/deviceTablet'

export class About extends Component {
    render() {
        return (
                <div className="container">
                    <div className="about-page">
                        <div className="about-title">
                            <h3>We are Digital Agency</h3>
                            <p className="title-text">NGBS believes in offering progressive end-to-end 
                                solutions by combining our business domain experience, technical expertise, profound knowledge of the 
                                latest industry trends and quality-driven delivery model. Through our
                                 customer-centric approach, we have gained a position of trust and respect from our valued customers.</p>
                        </div>
                        <div className="about-cards">
                            <div className="about-box">
                                <div className="box-icon">
                                    <Icon icon={deviceDesktop} size={32} />
                                </div>
                                  <h4 className="box-title">Our Vision</h4>
                                  <p className="box-details">
                                  Our Vision is to p
                                  innovative and cost effective software solutions to our
                                   clients using latest and proven technologies.
                                  </p>
                            </div>
                            <div className="about-box">
                            <div className="box-icon">
                                    <Icon icon={deviceDesktop} size={32} />
                                </div>
                                 <h4 className="box-title">Quality Policy</h4>
                                 <p>
                                 Our Quality Policy is to make continuous efforts to improve our services for the
                                  entire satisfaction of our clients and end users of our products.
                                 </p>
                            </div>
                            <div className="about-box">
                            <div className="box-icon">
                                    <Icon icon={deviceTablet} size={32} />
                                </div>
                                 <h4 className="box-title">Company objectives</h4>
                                 <p>
                                 Our Company Objective is to create and main
                                  good relations with our expanding Client base, and we achieve this by proving the best quality services.
                                 </p>
                            </div>
                        </div>
                    </div>

                </div>
        
        )
    }
}

export default About
