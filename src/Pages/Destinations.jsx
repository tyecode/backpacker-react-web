import React, { useState, useEffect } from "react";

// Import Components

import Testimonial from "../Components/Testimonial";

// Import Assets

import CaliforniaImage from "../assets/images/packages/california.jpg";
import RomeImage from "../assets/images/packages/rome.jpg";
import SouthIslandImage from "../assets/images/packages/south-island.jpg";
import ParisImage from "../assets/images/packages/paris.jpg";
import MaldivesImage from "../assets/images/packages/milaidhoo-maldives.jpg";
import LondonImage from "../assets/images/packages/london.jpg";
import MonteverdeImage from "../assets/images/packages/monteverde.jpg";
import TokyoImage from "../assets/images/packages/tokyo.jpg";
import BaliImage from "../assets/images/packages/bali.jpg";

const Destinations = () => {
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
            <section id="destinations" className="destinations">
                <div className="destinations-hero">
                    <div className="destinations-hero--overlay"></div>

                    <div className="container">
                        <div className="destinations-hero--content">
                            <div className="display-1">Destinations</div>
                        </div>
                    </div>
                </div>

                <div className="destinations-content">
                    <div className="container">
                        <h3 className="content-header">Luxury Destinations</h3>
                        <p className="content-info text-center">
                            Let Backpacker open up a world of wonders and create magical memories that will stay with you far beyond your travels. 
                            Whatever your travel preference may be, whether you are looking for a cultural city break, a child friendly family holiday, 
                            unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while 
                            handcrafting your bespoke journey.                                                                            
                        </p>
                    </div>
                </div>

                <div className="destinations-packages">
                    <div className="container">
                        <div className="packages-wrapper">

                            <div className="package-box package-1">
                                <div className="package-img"><img src={CaliforniaImage} alt="" /></div>
                                <div className="package-price">$1490</div>
                                <div className="package-info">
                                    <div className="package-info--location">California</div>
                                    <div className="package-info--country">United state of america</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(1.2K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>5 Days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-box package-2">
                                <div className="package-img"><img src={RomeImage} alt="" /></div>
                                <div className="package-price">$1230</div>
                                <div className="package-info">
                                    <div className="package-info--location">Rome</div>
                                    <div className="package-info--country">Italy</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(1.5K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>5 Days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-box package-3">
                                <div className="package-img"><img src={SouthIslandImage} alt="" /></div>
                                <div className="package-price">$2190</div>
                                <div className="package-info">
                                    <div className="package-info--location">South Island</div>
                                    <div className="package-info--country">New Zealand</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half"></i>
                                            </div>
                                            <div className="review">(1.1K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>7 Days</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="package-box package-4">
                                <div className="package-img"><img src={ParisImage} alt="" /></div>
                                <div className="package-price">$1250</div>
                                <div className="package-info">
                                    <div className="package-info--location">Paris</div>
                                    <div className="package-info--country">France</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half"></i>
                                            </div>
                                            <div className="review">(2.3K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>5 Days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-box package-5">
                                <div className="package-img"><img src={MaldivesImage} alt="" /></div>
                                <div className="package-price">$3950</div>
                                <div className="package-info">
                                    <div className="package-info--location">Milaidhoo Maldives</div>
                                    <div className="package-info--country">Republic of Maldives</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(2.5K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>7 Days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-box package-6">
                                <div className="package-img"><img src={LondonImage} alt="" /></div>
                                <div className="package-price">$1140</div>
                                <div className="package-info">
                                    <div className="package-info--location">London</div>
                                    <div className="package-info--country">United Kingdom</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(1.9K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>5 Days</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="package-box package-7">
                                <div className="package-img"><img src={MonteverdeImage} alt="" /></div>
                                <div className="package-price">$1060</div>
                                <div className="package-info">
                                    <div className="package-info--location">Monteverde</div>
                                    <div className="package-info--country">Costa Rica</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(1.2K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>4 Days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-box package-8">
                                <div className="package-img"><img src={TokyoImage} alt="" /></div>
                                <div className="package-price">$1033</div>
                                <div className="package-info">
                                    <div className="package-info--location">Tokyo</div>
                                    <div className="package-info--country">Japan</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half"></i>
                                            </div>
                                            <div className="review">(1.7K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>7 Days</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="package-box package-9">
                                <div className="package-img"><img src={BaliImage} alt="" /></div>
                                <div className="package-price">$962</div>
                                <div className="package-info">
                                    <div className="package-info--location">Bali</div>
                                    <div className="package-info--country">Indonesia</div>
                                    <div className="package-info--rate-time">
                                        <div className="rate-review">
                                            <div className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review">(2.1K Review)</div>
                                        </div>
                                        <div className="time"><i className="fa-solid fa-clock"></i>5 Days</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="destinations-packages--view-more-btn"><button type="button">More Places</button></div>
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

export default Destinations;