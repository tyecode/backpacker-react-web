import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Components

import Testimonial from "../Components/Testimonial";

// Import Assets

import RecentTripsImage1 from "../assets/images/recent-trips/img-1.jpg"
import RecentTripsImage2 from "../assets/images/recent-trips/img-2.jpg"
import RecentTripsImage3 from "../assets/images/recent-trips/img-3.jpg"
import RecentTripsImage4 from "../assets/images/recent-trips/img-4.jpg"
import RecentTripsImage5 from "../assets/images/recent-trips/img-5.jpg"
import RecentTripsImage6 from "../assets/images/recent-trips/img-6.jpg"
import Image1 from "../assets/images/img-1.jpg"
import Image2 from "../assets/images/img-2.jpg"

const Experience = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

    return (
        <>
            <section id="experience" className="experience">
                <div className="experience-hero">
                    <div className="experience-hero--overlay"></div>

                    <div className="container">
                        <div className="experience-hero--content">
                            <div className="display-1">Our experience</div>
                            <div className="hero-btn">
                                <Link to='/destinations'>
                                    <div className="btn">
                                        <span>Plan your journey</span>
                                        <div className="btn-circle"><i className="fa-solid fa-angle-right"></i></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience-content">
                    <div className="container">
                        <h3 className="content-header">Authentic cultural travel experiences</h3>
                        <p className="content-info text-center">
                            There are endless possibilities when planning your next holiday, but we will help you
                            choose the unique property and exclusive activities that best suit your specific requirements.
                            The world is yours, just let us know what you are dreaming of and we will create a bespoke
                            journey for you.                                                                               
                        </p>
                    </div>
                </div>

                {/* Recent Trips Section */}

                <div className="recent-trips">
                    <div className="container">
                        <h3 className="content-header">Recent Trips</h3>
                        <div className="recent-trips--content">
                            <div className="recent-trips-wrapper">

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage1} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">Oct 12, 2022</div>
                                        <div className="recent-trips-info--title">Grand Canyon National Park does not have timed entry, or reservations to enter the park.</div>
                                    </div>
                                </div>

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage2} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">Jun 10, 2022</div>
                                        <div className="recent-trips-info--title ellipsis">Experience the most spectacular and dramatic landscapes in Sahara Desert, Morocco</div>
                                    </div>
                                </div>

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage3} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">May 03, 2022</div>
                                        <div className="recent-trips-info--title">Enjoying the view with a wonderful luxury resort in costa rica</div>
                                    </div>
                                </div>

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage4} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">Jan 26, 2022</div>
                                        <div className="recent-trips-info--title">Floating over nurse sharks in the Bahamas on Great Exuma. Cameras do not do the blue luminescence of the water here justice.</div>
                                    </div>
                                </div>

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage5} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">Jan 09, 2022</div>
                                        <div className="recent-trips-info--title">Sri Lanka has been a destination on the rise for the past few years, and once you travel here you'll realise why.</div>
                                    </div>
                                </div>

                                <div className="recent-trips-box">
                                    <div className="recent-trips-img"><img src={RecentTripsImage6} alt="" /></div>
                                    <div className="recent-trips-info">
                                        <div className="recent-trips-info--date">Nov 21, 2021</div>
                                        <div className="recent-trips-info--title">Most extreme experience skiing in Switzerland - One of the world's oldest and most famous winter sports resorts</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

               <Testimonial />

                {/* Spaek to us Section */}

                <div className="speak-to-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="img">
                                    <div className="img--backward"><img src={Image2} alt="" /></div>
                                    <div className="img--foreward"><img src={Image1} alt="" /></div>
                                </div>
                            </div>
                            <div className="col-5">
                                <h3 className="content-header">We are Experience Designers</h3>
                                <p className="content-info">
                                    Our team of highly experienced travel designers will guide you from beginning to end as you embark 
                                    on a tailor-made journey of distinction, enjoying truly exclusive and authentic cultural experiences. 
                                    We can fulfil your bucket-list dreams.
                                </p>
                                <div className="content-link"><Link to='/contact'>Speak to us</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {backToTopButton && (
                <button className="return-top-btn" onClick={scrollUp}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </>
    );
}

export default Experience;