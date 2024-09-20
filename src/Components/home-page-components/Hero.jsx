import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const { t } = useTranslation();

  // Data for the hero section
  const heroData = [
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/405026955_782298107274897_8069942543195540519_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGC0eKUW05cFIzaadq5shUo4yE3pcgCucvjITelyAK5y6-TwahWlgxTJbS7zBRT-aVe_dRsMB-UEjngutMpGj4c&_nc_ohc=VqhHt94wSoAQ7kNvgEvUgJJ&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AP_nes3fSRWnKxQKfWkikLN&oh=00_AYDwlr_Xbx66YO0Xs2QyrEbOykFL1I-5hxBLVGuOHMgHTQ&oe=66F3C052",
      title: t('hero.1st-image-title'),
      description: t('hero.1st-image-desc'),
      buttonText: t('hero.1st-image-btn'),
    },
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/368847194_724833366354705_5337103953886550868_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZgCvvhekbkb9pJIeetf2aljPGKaQnXE-WM8YppCdcTwwjtYoYP1M8bQHI7VWddqPRTHGjsDW6OaR3KmP2dIAe&_nc_ohc=c3GldryOJgcQ7kNvgFTgxm6&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AA4dYoyQOGwbPvMe616sinn&oh=00_AYDtFi89ReHu6Y-y2i6MKyIg71Yo3yAhadvM6FPtCvcdmA&oe=66F3BF29",
      title: t('hero.2nd-image-title'),
      description: t('hero.2nd-image-desc'),
      buttonText: t('hero.2nd-image-btn'),
    },
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/363302211_708678144636894_6323964984479790299_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZXrUCKt845hIcDeQEvVimMdotoVXQypcx2i2hVdDKl3tZ9Et6tf9RrwiRZf2gfiNsohI-i9pXmji0wKcY-NMi&_nc_ohc=EHgUVkTEFpcQ7kNvgEqKWLL&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AMQ-gSfbZBhw9RITL5fnOXU&oh=00_AYC5oSB2oQ_9v_SmZWQLZSkIL73Pkvgq4LulZ9R84LdFuQ&oe=66F3AB40",
      title: t('hero.3rd-image-title'),
      description: t('hero.3rd-image-desc'),
      buttonText: t('hero.3rd-image-btn'),
    },
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/279920486_2841224369510103_4072302488387822222_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5_52pJPH3ulccBLBrxTjygVA9PkZ4RAqBUD0-RnhECtv0Vd9fXJv7I1az-Bc1WmCw3kkNIy9kUAnqQPRtQLVd&_nc_ohc=Vnx9TowFVq8Q7kNvgGeOvJ1&_nc_ht=scontent.fpew3-1.fna&oh=00_AYAlrU3F0okc0aMFNRIzkVM3KrH3uEXMYifRInh_OT60Ow&oe=66F3B803",
      title: t('hero.4th-image-title'),
      description: t('hero.4th-image-desc'),
      buttonText: t('hero.4th-image-btn'),
    },
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/275673470_2805178579781349_4422024546661456263_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAjjPWxxAsAkKHEW6-ylUooyHDpNY2ZfWjIcOk1jZl9fxLyTCjsLFLbXIrPSslILAbZV_Echb5RjBiBrDiflQj&_nc_ohc=55B9oWkSRMoQ7kNvgHKY__8&_nc_ht=scontent.fpew3-1.fna&oh=00_AYDfdT3YowZwNGiPfyIY9ayoaYDNBBMpp9BwLB8MLKdv3Q&oe=66F3AB0F",
      title: t('hero.5th-image-title'),
      description: t('hero.5th-image-desc'),
      buttonText: t('hero.5th-image-btn'),
    },
    {
      image: "https://scontent.fpew3-1.fna.fbcdn.net/v/t1.6435-9/185356011_2598218207144055_6736339406889134223_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFbptGuLkUj5rtkBClYCtAaAFghMswpqvMAWCEyzCmq8wQ6VG1hTIMVdHimujQjaUU1csryZCW6qMXaoo_CSXBZ&_nc_ohc=17Py9Nk0x30Q7kNvgGbv8A2&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AQMvqiSn8uinxeDkfdJEPhy&oh=00_AYD11O_PUhT4ylQgmGBkuFubwbxsrc-tdGPrBJ-mAJmubQ&oe=67155DA5",
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
                  <button className="bg-mstheme hover:bg-mstheme_hover text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl">
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
