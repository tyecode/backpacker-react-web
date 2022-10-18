import React, { useState, useEffect } from "react";
import Form from "../Components/Form";
import Testimonial from "../Components/Testimonial";
import { Link } from "react-router-dom";

const Contact = () => {
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
            <section id="contact" className="contact">
                <div className="contact-hero">
                    <div className="contact-hero--overlay"></div>

                    <div className="container">
                        <div className="contact-hero--content">
                            <div className="display-1">Contact us</div>
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

                <div className="contact-content">
                    <div className="container">
                        <h3 className="content-header">Get in touch</h3>
                        <p className="content-info text-center">Use the form below to drop us an e-mail. Old fashioned phone calls work too.</p>
                        <div className="row">
                            <div className="col-4">
                                <div className="content-info">
                                    <i className="fa-solid fa-house"></i>
                                    <div className="info">
                                        <h3>Xaythany, Vientiane</h3>
                                        <p>Khamhoung, VTE 01170</p>
                                    </div>
                                </div>
                                <div className="content-info">
                                    <i className="fa-solid fa-mobile-button"></i>
                                    <div className="info">
                                        <h3>+856 20 1345 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="content-info">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="info">
                                        <h3>contact@backpacker.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>

                <Testimonial />
            </section>

            {backToTopButton && (
                <button className="return-top-btn" onClick={scrollUp}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </>
    );
}

export default Contact;