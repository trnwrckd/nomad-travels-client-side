import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sponsors.css';

import React from 'react';

const Sponsors = () => {

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };


    return (
        <div className="container-fluid sponsors py-5">
            <div className="container">
                <h1 > Our Sponsors</h1>
                <Slider {...slickSettings} className="pt-4 mt-3">
                        <div className="d-flex justify-content-center"><img src="./images/sponsors/chevron.png" alt="" height="180px" /></div>
                        <div className="d-flex justify-content-center"><img src="./images/sponsors/square.png" alt=""  height="180px" /></div>
                        <div className="d-flex justify-content-center"><img src="./images/sponsors/icddrb.png" alt=""  height="180px" /></div>            
                        <div className="d-flex justify-content-center"><img src="./images/sponsors/incepta.png" alt="" height="180px" /></div> 
                </Slider>
            </div>



            <div className="container py-3 pt-5 ">
                <div className = "row row-cols-1 row-cols-md-4">
                               
                </div>
            </div>
        </div>
    );
};

export default Sponsors;