import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for navigation
import { stringConcat } from "../../helper-functions/formatText";

export default function EventSection() {
  const { t } = useTranslation();
  const sliderRef = React.useRef(null);

  const events = [
    {
      id: 2,
      title: t("eventSection.1st-image-title"),
      description:t("eventSection.1st-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t1.6435-9/185310071_2598218187144057_346765608869840160_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeELhcKqbqrHIGdyL4Tq4wdRP4rjvelWyxc_iuO96VbLF6fdyCWoaI1zkcVGE-YBWYX_P8gNxONTKAAYN8dKQZA0&_nc_ohc=hFPagKnvtmgQ7kNvgE2xoUC&_nc_ht=scontent.fpew3-1.fna&_nc_gid=ASAXcypfLLS9BQufLWCARXr&oh=00_AYC3H01PVV6hvtQqqD4BMSr_zrhpRMXGfN6s50NAkM8Evg&oe=67155EA4",
    },
    {
      id: 3,
      title: t("eventSection.2nd-image-title"),
      description:t("eventSection.2nd-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2017/08/28/18/44/international-2690812_1280.jpg",
    },
    {
      id: 4,
      title: t("eventSection.3rd-image-title"),
      description:t("eventSection.3rd-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_1280.jpg",
    },
    {
      id: 5,
      title:t("eventSection.4th-image-title"),
      description:t("eventSection.4th-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2017/08/28/18/44/international-2690812_1280.jpg",
    },
    {
      id: 6,
      title:t("eventSection.5th-image-title"),
      description:t("eventSection.5th-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_1280.jpg",
    },
    {
      id: 7,
      title: t("eventSection.6th-image-title"),
      description:t("eventSection.6th-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2017/08/28/18/44/international-2690812_1280.jpg",
    },
    {
      id: 8,
      title: t("eventSection.7th-image-title"),
      description:t("eventSection.7th-image-desc"),
      image:
      "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_1280.jpg",
    },
    {
      id: 9,
      title: t("eventSection.8th-image-title"),
      description:t("eventSection.8th-image-desc"),
      image:
        "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_1280.jpg",
    },
    {
      id: 10,
      title: t("eventSection.9th-image-title"),
      description:t("eventSection.9th-image-desc"),
      image:
        "https://cdn.pixabay.com/photo/2017/08/28/18/44/international-2690812_1280.jpg",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false, // Disable default arrows to use custom ones
  };

  return (
    <div className="relative w-full md:w-[1150px] m-auto py-20">
      <h1 className="pb-5 text-3xl md:text-4xl font-semibold px-5 md:px-0">
        {t("eventSection-main-title")}
      </h1>

      <Slider ref={sliderRef} {...sliderSettings}>
        {events.map((event) => (
          <div key={event.id} className="px-4 my-4">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2 border-mstheme">
              <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900">
                  {/* {event.title.slice(0,25)}... */}
                  {stringConcat(event.title, 22)}
                </h5>
                <p className="text-base font-light leading-relaxed text-inherit">
                  {/* {event.description.slice(0, 60)}... */}
                  {stringConcat(event.description, 60)}

                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                  type="button"
                >
                  {t("eventSection-btn")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-mstheme text-white p-3 rounded-full shadow-lg hover:bg-mstheme_hover"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-mstheme text-white p-3 rounded-full shadow-lg hover:bg-mstheme_hover"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight size={20} />
      </button>
      <div className="w-full mt-14 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
    </div>
  );
}