import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: 'linear',
        ltr: true,
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                <div className="banner-item banner-text">
                    <div className="banner-caption ">
                        <h1 className="text-3xl font-bold">Lorem, ipsum dolor. <span className='text-yellow-500'> Energy</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum sapiente <br /> cupiditate sit magnam non voluptates perferendis voluptatem ea voluptatibus!</p>
                    </div>
                </div>
                <div className="banner-item banner-text-1">
                <div className="banner-caption ">
                        <h1 className="text-3xl font-bold">Lorem, ipsum dolor. <span className='text-yellow-500'> Sustainable Energy</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum sapiente <br /> cupiditate sit magnam non voluptates perferendis voluptatem ea voluptatibus!</p>
                    </div>
                </div>
                <div className="banner-item banner-text-2">
                <div className="banner-caption \">
                        <h1 className="text-3xl font-bold">Lorem, ipsum dolor. <span className='text-yellow-500'>this is Just  Energy</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum sapiente <br />cupiditate sit magnam non voluptates perferendis voluptatem ea voluptatibus!</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
