import React, { Component } from 'react';
import '../styles/footer.css';

export class Footer extends Component {
    
    render() {
        
        return (
            <React.Fragment>
            <footer>
                <div className="footer-section">
                    <div className="container">
                   <span> &copy; Copyright 2019, NGBS(Private) Limited All Rights Reserved</span> 
                </div>
                </div>
            </footer>
            </React.Fragment>
        )
    }
}

export default Footer
