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
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/453009338_946946494143390_1176236474275516647_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEjF4mAE3M1Lt3QJXOoWNO6gXErxnLhBAuBcSvGcuEEC_Ed3BbBJ9sF7UAESKfoCbuG8pidQ_cvDFIRUSsWOovk&_nc_ohc=5ClUgN607-AQ7kNvgG4-fQ-&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AOpQ1PkiS-qeZtOunZuNqJ8&oh=00_AYDy0OYK3gp82UuZjWd-K4CLgGeGPek-LzhL6A3Yi-Nnnw&oe=66F3A754",
    },
    {
      id: 4,
      title: t("eventSection.3rd-image-title"),
      description:t("eventSection.3rd-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/452675758_943382471166459_3687239805438189526_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHByiY8SK610t0WD587ShPnUjNmxuf5nSdSM2bG5_mdJwZdFZZAqRFR8o7xHMpQCEfMERiuV-GH3DN0c1gv7431&_nc_ohc=UpcAmUMiAM0Q7kNvgFm2h7Y&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AlOpgRnwHRJPGt-HapXVCnr&oh=00_AYBQdJ-sSN1sk-VD56FQPAd1f_E1GJgalC7GPBQZJgeHUw&oe=66F38BE4",
    },
    {
      id: 5,
      title:t("eventSection.4th-image-title"),
      description:t("eventSection.4th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/452846199_943382521166454_1672306876285838024_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFNIrexdRyojmVVeKyV2P2OUAIn90GpFVtQAif3QakVW1gTb-CLcks0QM1Ybgv7s1Cp3AT1YACn-7algD4Jzkam&_nc_ohc=upEQoR_0po4Q7kNvgHd7YdZ&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AlOpgRnwHRJPGt-HapXVCnr&oh=00_AYAkYv6R4TqWF1Yn0mHyiQj-lkKKqlDM1OyBcC8eDuiAWw&oe=66F3A0EB",
    },
    {
      id: 6,
      title:t("eventSection.5th-image-title"),
      description:t("eventSection.5th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/449512495_926801962824510_2159018857527649203_n.jpg?stp=c135.0.810.810a_cp6_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeE6_2s6z5k_H1ocsruvqVOgEkDH1lHj7yESQMfWUePvIVhww_1i3UC2elOF5dHO24j7keD5jx7Y0XxSH5PoT82P&_nc_ohc=idc4xdZvtz8Q7kNvgFAVgk5&_nc_ht=scontent.fpew3-1.fna&oh=00_AYBFJIUbFbzWuJFsdKSIP1xx8jJXbhr66NpHTZFrt8H5qw&oe=66F3A005",
    },
    {
      id: 7,
      title: t("eventSection.6th-image-title"),
      description:t("eventSection.6th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/449700052_926801892824517_1461029119907882280_n.jpg?stp=c0.89.810.810a_cp6_dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFnfWYRXcFOU2z1fnYVvfeLD1nJxNJQW6EPWcnE0lBboZ9BhEbxISvDDGfWaSnAsW4z7bKNlRTdWCRTCS4Hl5we&_nc_ohc=5HTl4p9crLwQ7kNvgGknUCF&_nc_ht=scontent.fpew3-1.fna&oh=00_AYBKktInYp64XM2xBhtUZRmBcXLQJc8MaFY-5IBbIf1nDQ&oe=66F397CB",
    },
    {
      id: 8,
      title: t("eventSection.7th-image-title"),
      description:t("eventSection.7th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/444482261_903875328450507_467149759023595362_n.jpg?stp=c221.0.567.567a_dst-jpg_s206x206&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFsAafeJ1EKHiTRbmGkf2fPJS1q8Fxt2N4lLWrwXG3Y3vG908ND7ErTSb7UgVd2KI1W-3WLbvlyqrMGgTr0fD9o&_nc_ohc=EuXgoSocRVkQ7kNvgEUySWA&_nc_ht=scontent.fpew3-1.fna&oh=00_AYBByuWbOx5__FTFHKrTFJKZ-1plm-zqs0QgW_gYQfkpEQ&oe=66F391CB",
    },
    {
      id: 9,
      title: t("eventSection.8th-image-title"),
      description:t("eventSection.8th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/441175861_898229089015131_5555295881887561629_n.jpg?stp=c219.0.522.522a_dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGwHsuqCDvDajI_JFhm13mSLcYP3jRJBI0txg_eNEkEjTIxtke9BrACCRyD9zaPWA66LXjK4I898dT0_idb0H1Z&_nc_ohc=tm0pHI_COjoQ7kNvgFGkl-6&_nc_ht=scontent.fpew3-1.fna&oh=00_AYCJ82VP5r_-5oxOXDz2PLsAypby1CdZHFVimjvyHut8WQ&oe=66F38AFF",
    },
    {
      id: 10,
      title: t("eventSection.9th-image-title"),
      description:t("eventSection.9th-image-desc"),
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/438222224_883811057123601_8281141065723460926_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEcaPR9GZQspT7UJpn7rSuwmYaiA3Jt6MGZhqIDcm3owc-7IrSjueJQiUw44bxoO8YuKEl84aCs5xrn91leJwbZ&_nc_ohc=w8MVm2Uo6pkQ7kNvgHromSu&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AL3mTNOtdP1ifo2YyRLSKfB&oh=00_AYB_1UqbMYEIU387PwQeZSNNdOgEgXEkhBKprI_5vWRwqw&oe=66F39344",
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