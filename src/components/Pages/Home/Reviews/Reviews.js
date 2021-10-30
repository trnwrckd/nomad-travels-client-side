import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import './Reviews.css';

const Reviews = () => {

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


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json()).then(data => setReviews(data));
    },[])

    return (
        <div className="review-bg py-5">
            <h2 className="mb-4">What people are saying</h2>
            <div className="container">
                <Slider {...slickSettings} className="pt-4 mt-3">       
                    {
                        reviews.map(review => <Review key={ review.id} review= {review}/>)
                    }
                </Slider>
                
            </div>
        </div>
    );
};

export default Reviews;