import React from "react";
import { Link } from "react-router-dom";

// Import Assets

import VideoHover from "../assets/videos/video-hero.mp4";

const Home = () => {
    return (
        <header id="home" className="home">
        <div className="home-hero">
            <div className="home-hero--overlay"></div>

            {/* Video footage */}

            <div className="home-hero--video">
            <video autoPlay loop muted playsInline>
                <source src={VideoHover} />
            </video>
            </div>

            <div className="container">
            <div className="home-hero--content">
                <div className="display-1">Explore the world</div>
                <div className="display-2">One's destination is never a place, but always a new way of seeing things</div>
                <div className="hero-btn">

                <Link to='/experience'>
                    <div className="btn">
                        <span>Our experience</span>
                        <div className="btn-circle"><i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>

                <Link to='/destinations'>
                    <div className="btn">
                        <span>Plan your journey</span>
                        <div className="btn-circle"><i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>

                <Link to='/contact'>
                    <div className="btn">
                        <span>Contact us</span>
                        <div className="btn-circle"><i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Link>
                
                </div>
            </div>
            </div>
        </div>
        </header>
    );
}

export default Home;