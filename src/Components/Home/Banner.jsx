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
          <div className="banner-caption">
            <h1 className="text-3xl font-bold"><span className='text-yellow-500'>Suitable Development.</span></h1>
            <p>"DISCOVER THE DRIVING FORCE BEHIND AFGHAN INVEST: OUR VISION, OUR TEAM, OUR COMMITMENT"</p>
           <button class="glow-on-hover mt-5" type="button">Read More</button>

          </div>
        </div>
        <div className="banner-item banner-text-1">
          <div className="banner-caption">
            <h1 className="text-3xl font-bold"><span className='text-yellow-500'>Mining Sector</span></h1>
            <p>“WE BUILD ON NATIONAL PRIDE & OUR EXPERTISE TO PROVIDE RELIABLE AND RESPONSIBLE MINING SERVICES“</p>
           <button class="glow-on-hover mt-5" type="button">Read More</button>

          </div>
        </div>
        <div className="banner-item banner-text-2">
          <div className="banner-caption">
            <h1 className="text-3xl font-bold"><span className='text-yellow-500'>Energy Sector</span></h1>
            <p>"POWERING AFGHANISTAN'S FUTURE WITH INNOVATIVE AND SUSTAINABLE ENERGY SOLUTIONS"</p>
           <button class="glow-on-hover mt-5" type="button">Read More</button>

          </div>
        </div>
        <div className="banner-item banner-text-3">
          <div className="banner-caption">
            <h1 className="text-3xl font-bold"><span className='text-yellow-500'>News & Media</span></h1>
            <p>"STAY INFORMED: ACCESS THE LATEST UPDATES, JOB OPPORTUNITIES, AND COMPANY INSIGHTS HERE."</p>
           <button class="glow-on-hover mt-5" type="button">Read More</button>

          </div>
        </div>
        <div className="banner-item banner-text-3">
          <div className="banner-caption">
            <h1 className="text-3xl font-bold"><span className='text-yellow-500'>Founders</span></h1>
            <p>"MEET THE VISIONARIES BEHIND AFGHAN INVEST: OUR FOUNDERS, OUR LEGACY, OUR DRIVE"</p>
           <button class="glow-on-hover mt-5" type="button">Read More</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;