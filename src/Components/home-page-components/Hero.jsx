import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { t } = useTranslation();

  // Data for the hero section
  const heroData = [
    {
      image: "https://images.unsplash.com/photo-1515318650024-02fe7e49c5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWV1c2V1bXxlbnwwfDB8MHx8fDA%3D",
      title: t('hero.1st-image-title'),
      description: t('hero.1st-image-desc'),
      buttonText: t('hero.1st-image-btn'),
    },
    {
      image: "https://images.unsplash.com/photo-1669413543156-d025fe5873b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ldXNldW18ZW58MHwwfDB8fHww",
      title: t('hero.2nd-image-title'),
      description: t('hero.2nd-image-desc'),
      buttonText: t('hero.2nd-image-btn'),
    },
    {
      image: "https://images.unsplash.com/photo-1669413540594-a177707fb29c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1ldXNldW18ZW58MHwwfDB8fHww",
      title: t('hero.3rd-image-title'),
      description: t('hero.3rd-image-desc'),
      buttonText: t('hero.3rd-image-btn'),
    },
    {
      image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzZXVtfGVufDB8fDB8fHww",
      title: t('hero.4th-image-title'),
      description: t('hero.4th-image-desc'),
      buttonText: t('hero.4th-image-btn'),
    },
    {
      image: "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t('hero.5th-image-title'),
      description: t('hero.5th-image-desc'),
      buttonText: t('hero.5th-image-btn'),
    },
    {
      image: "https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t('hero.6th-image-title'),
      description: t('hero.6th-image-desc'),
      buttonText: t('hero.6th-image-btn'),
    },
    {
      image: "https://images.pexels.com/photos/5845470/pexels-photo-5845470.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t('hero.7th-image-title'),
      description: t('hero.7th-image-desc'),
      buttonText: t('hero.7th-image-btn'),
    },
    {
      image: "https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: t('hero.8th-image-title'),
      description: t('hero.8th-image-desc'),
      buttonText: t('hero.8th-image-btn'),
    }
  ];
  

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Smooth transition speed
    fade: true,  // Enable fade transition
    cssEase: "ease-in-out", // Smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Slider {...settings}>
        {heroData.map((item, index) => (
          <div key={index} className="relative w-full">
            <div
              className="min-h-screen bg-cover bg-center w-full flex items-center justify-center" 
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

              {/* Responsive text content on top of the overlay */}
              <div className="relative z-10 text-center text-neutral-content px-4 md:px-6 max-w-full mx-auto flex flex-col items-center justify-center">
                <div className="max-w-lg md:max-w-2xl lg:max-w-4xl text-white">
                  <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg tracking-wide">
                    {item.title}
                  </h1>
                  <p className="mb-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </p>
                  <button className="bg-gray-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-slate-300 hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
