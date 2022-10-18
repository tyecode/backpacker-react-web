import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
    return (
        <>
        <div className="testimonial">
            <div className="content-header">What our clients say</div>
            <div className="swiper-wrapper">
                <Swiper className="swiper mySwiper">
                <SwiperSlide className="swiper-slide">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                        The trip was wonderful - lots of great memories were made. All the arrangements 
                        (flights, hotels, cars, cab transfers) went as planned..... Wine country was fun - 
                        Penny even learned to enjoy good red wine. We toured Pear Harbor, the Dole plantation 
                        and the north shore on Oahu.
                    </p>
                    <i className="fa-solid fa-quote-right"></i>
                    <h3>Mike C.</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                        Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. 
                        It was perfect for not being crowded on the beach w/ Covid concerns. 
                        The beach is for guests only & beautiful!....Thanks so much for finding the perfect spot for us for spring break :)
                    </p>
                    <i className="fa-solid fa-quote-right"></i>
                    <h3>Stephanie B.</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                        thank you so much for a well organized trip. We had a wonderful time. Hard to believe it's already done and past. 
                        Weather was awesome, the hotels were nice, thank you for everything!
                    </p>
                    <i className="fa-solid fa-quote-right"></i>
                    <h3>Lori R.</h3>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
      </>
    );
}

export default Testimonial;