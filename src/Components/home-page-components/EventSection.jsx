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
      title: "Art and History Expo",
      description:
        "Discover the rich history of art through this immersive exhibition of classic and modern art pieces.",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Ancient Egypt Showcase",
      description:
        "Explore the world of ancient Egypt, featuring artifacts, sculptures, and historical treasures.",
      image:
        "https://images.unsplash.com/photo-1650831491240-f97283df9b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Renaissance Art Exhibition",
      description:
        "A collection of stunning works from the Renaissance period, showcasing masterful art and history.",
      image:
        "https://plus.unsplash.com/premium_photo-1694475231200-13b67c9d04b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzZXVtJTIwb2YlMjBmaW5lJTIwYXJ0cyUyMGJvc3RvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Modern Art Masterpieces",
      description:
        "A diverse collection of modern art pieces from the world's top artists and innovators.",
      image:
        "https://images.unsplash.com/photo-1528217580778-96e570819666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjdWxwdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Impressionism and Beyond",
      description:
        "A breathtaking exhibition of impressionist works and their impact on the modern art world.",
      image:
        "https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2N1bHB0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      title: "Photography Through the Ages",
      description:
        "A stunning showcase of photography's evolution from its early days to the digital age.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Sculpture and Stone Art",
      description:
        "An in-depth look at stone art and sculpture from different periods of human history.",
      image:
        "https://images.unsplash.com/photo-1491249149628-28cb9a16356a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2V1bSUyMG9mJTIwZmluZSUyMGFydHMlMjBib3N0b258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 9,
      title: "Famous Portraits of the Past",
      description:
        "A collection of iconic portrait art that has shaped history and the art world as we know it.",
      image:
        "https://plus.unsplash.com/premium_photo-1678580372060-eac9c8d437ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2V1bSUyMG9mJTIwZmluZSUyMGFydHMlMjBib3N0b258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 10,
      title: "Ancient Asian Art",
      description:
        "Experience the beauty and intricacy of ancient Asian art, showcasing a rich cultural history.",
      image:
        "https://images.unsplash.com/photo-1543336414-319b2b916cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2V1bSUyMG9mJTIwZmluZSUyMGFydHMlMjBib3N0b258ZW58MHx8MHx8fDA%3D",
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
      <h1 className="pb-5 text-3xl md:text-4xl font-semibold">
        {t("Museum Events")}
      </h1>

      <Slider ref={sliderRef} {...sliderSettings}>
        {events.map((event) => (
          <div key={event.id} className="px-4 my-4">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
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
                  className="align-middle font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                  type="button"
                >
                  {t("Read More")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}