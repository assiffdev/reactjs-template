import React, { Component } from 'react'
import HomeSlider from './HomeSlider';
import '../styles/Home.css';
export class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <HomeSlider />
            </div>
        )
    }
}

export default Home
