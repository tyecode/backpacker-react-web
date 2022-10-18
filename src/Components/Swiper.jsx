import React from "react";

const Swiper = () => {
    
    var swiper = new Swiper(".mySwiper", {
        speed: 800,
        spaceBetween: 220,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 5,
        centeredSlides: true,       
        watchSlidesProgress: false,
        watchOverflow: true,
        watchSlidesProgress: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        observer: true,  
        observeParents: true,
        longSwipes: true,
        longSwipesMs: 200,
    })
}

export default Swiper;