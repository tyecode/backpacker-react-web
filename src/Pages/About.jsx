import React, { useState, useEffect } from "react";
import Testimonial from "../Components/Testimonial";
import Image3 from "../assets/images/img-3.jpg";
import Image4 from "../assets/images/img-4.jpg";
import OurTeam from "../Components/OurTeam";
import { Link } from "react-router-dom";
import WhyChooseUs from "../Components/WhyChooseUs";

const About = () => {
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
            <section id="about" className="about">
                <div className="about-hero">
                    <div className="about-hero--overlay"></div>

                    <div className="container">
                        <div className="about-hero--content">
                            <div className="display-1">About us</div>
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

                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="about-content--img"><img src={Image3} alt="content" /></div>
                            </div>
                            <div className="col-5">
                                <div className="content-header">Magical memories, Bespoke experiences</div>
                                <p className="content-info">
                                    Once you have travelled the voyage never ends. 
                                    We will open a world of wonders and create magical memories that will stay with you far beyond your travels.
                                </p>
                                <p className="content-info">
                                    Diverge from the typical tourist destinations in favour of unique, 
                                    authentic experiences. Experiences designed in the most inspiring surroundings that will be yours, and yours only. 
                                    Journeys that create memorable moments and Backpacker's bespoke itineraries will make this happen. 
                                    The wonders of the world are within your reach.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <OurTeam />
            <Testimonial /> 
Link
            {/* Work with us */}

            <section className="work-with-us">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="work-with-us--img"><img src={Image4} alt="work-with-us-content" /></div>
                        </div>
                        <div className="col-5">
                            <div className="content-header flex-start">Work with us</div>
                            <p className="content-info">
                                Interested in a partnership or joining the team?    <br />
                                Enquire below or email us at                        <br />
                                contact@backpacker.com.                             <br />
                            </p>
                            <div className="work-with-us--link">
                                <div className="content-link"><Link to='/contact'>JOIN OUR TEAM</Link></div>
                            </div>
                            <div className="work-with-us--link">
                                <div className="content-link"><Link to='/contact'>INTERESTED IN PARTNERING?</Link></div>
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

export default About;