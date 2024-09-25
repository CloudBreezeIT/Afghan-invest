import React from "react";
import { useTranslation } from "react-i18next";

const AboutDirectorates = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full">
      {/* start of Background Image */}
      <div
        className=" w-full min-h-96 mt-[64px]"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
         {t("aboutDirectorate-main-title")}
        </h1>
      </div>
      {/* ends of Background Image */}
      {/* heading start here */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto my-24">
        <h1 className="text-4xl font-bold my-8 text-mstheme">
          {t("director-msg-title")}
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-mstheme via-mstheme to-transparent"></div>
      </div>
      {/* heading ends here */}
      {/* director container starts here */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto shadow-2xl flex my-12 rounded-lg flex-col md:flex-row justify-center items-center gap-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-12  bg-gray-100 rounded-lg shadow-lg">
          {/* Image section */}
          <div className="md:w-1/3">
            <img
              className="rounded-3xl shadow-lg object-cover"
              src="https://scontent.fpew1-1.fna.fbcdn.net/v/t39.30808-6/452580147_943382421166464_7310790582880668937_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V3WYbobxYIQQ7kNvgGQcnX6&_nc_ht=scontent.fpew1-1.fna&_nc_gid=Alk_bwJrGQajB2b2si9dmuq&oh=00_AYDaQcuAr3Yzzob1fWKz30d4J9_ewd332IqKqpFLCevyyg&oe=66F32668"
              alt="Omara Khan Massoudi"
            />
          </div>

          {/* Text content section */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-mstheme text-4xl font-bold mb-2">
              {t("director-name")}
            </h1>
            <h2 className="text-mstheme text-xl mb-6">
              {t("director-name-sub-title")}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t("director-msg-desc-1")}.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("director-msg-desc-2")}
            </p>
          </div>
        </div>
      </div>
      {/* director container ends here */}
    </div>
  );
};

export default AboutDirectorates;
