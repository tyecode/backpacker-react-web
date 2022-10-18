import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const WhyChooseUs = () => {
    return (
        <>
            <section className="why-choose-us">
                <div className="content-header">Why choose us</div>
                <div className="swiper-wrapper">
                    <Swiper className="swiper mySwiper">
                        <SwiperSlide className="swiper-slide">
                            <i className="fa-solid fa-hotel"></i>
                            <h3 className="">Luxury nights</h3>
                            <p>
                                A mix of hotels & resorts, we take your accommodation to the next level on Sri Lanka Experience!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <i className="fa-solid fa-person-snowboarding"></i>
                            <h3 className="">Days of epic activities</h3>
                            <p>
                                Pick tea with the locals, ride the world's most scenic train journey, experience an epic sunrise safari & more!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <i className="fa-solid fa-plane"></i>
                            <h3 className="why-title">Personal airport pickup</h3>
                            <p>
                                We'll be there to greet you at Colombo airport after your long flight and take you to the guesthouse.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <i className="fa-solid fa-user-tie"></i>
                            <h3 className="">Awesome group leader</h3>
                            <p>
                                You'll get an awesome group leader from the moment you step off the plane to provide 24/7 support during & after your trip, alongside knowledgeable local guides.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <i className="fa-solid fa-bell-concierge"></i>
                            <h3 className="">Extra Meals</h3>
                            <p>
                                Quick-Service Meals Per Night of Stay, you can redeem your meals and snacks in any order during your stay, until the number of meals and snacks associated with your package has been depleted
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs;