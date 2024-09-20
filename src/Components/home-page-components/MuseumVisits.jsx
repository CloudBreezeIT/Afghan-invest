import React from "react";
import { useTranslation } from "react-i18next";
import { stringConcat } from "../../helper-functions/formatText";

const MuseumVisits = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1544213456-bc37cb97df74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-1st-image-title"),
      desc: t("museumVisits-1st-image-desc"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-2nd-image-title"),
      desc: t("museumVisits-2nd-image-desc"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-3rd-image-title"),
      desc: t("museumVisits-3rd-image-desc"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-4th-image-title"),
      desc: t("museumVisits-4th-image-desc"),
    },
  ];
  return (
    <>
      <div className="w-full md:w-[1150px] m-auto ">
        <div className="py-20">
          <h1 className="pb-5 md:pl-0 pl-8 text-3xl md:text-4xl font-semibold">
            {t("museumVisits-main-title")}
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-6 ">
            {cardData.map((item, index) => (
              <div
                key={index}
                className=" shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer p-2"
              >
                <div className="w-[250px] m-auto">
                  <img src={item.image} alt="" />
                </div>
                <div className="px-5 py-3">
                  <h1 className="text-xl font-semibold hover:underline ">
                    {/* {item.title} */}
                    {stringConcat(item.title, 15)}

                  </h1>
                  <p className="pt-3 pb-6">
                    {/* {item.desc.slice(0,70)}... */}
                    {stringConcat(item.desc, 45)}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 border-2"></div>
      </div>
    </>
  );
};

export default MuseumVisits;
