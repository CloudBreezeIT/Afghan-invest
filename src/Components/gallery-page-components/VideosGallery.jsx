import React from "react";
import { useTranslation } from "react-i18next";

const VideosGallery = () => {
  const { t } = useTranslation();
    // Array of video links from National Museum of Afghanistan
    const videos = [
      "https://www.youtube.com/embed/QaEZVrI2DF8?si=r8URkQN9SCzFLfH5",
      "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
      "https://www.youtube.com/embed/QaEZVrI2DF8?si=r8URkQN9SCzFLfH5",
      "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
      "https://www.youtube.com/embed/VU9q3nSYidc?si=0jhKv_EyTYo8fZBc",
      "https://www.youtube.com/embed/QVRiLZ-PUsk?si=KWWhsxIHS3VApEyv",
      "https://www.youtube.com/embed/MOKjj_MMUi4?si=k62tu44gtJ_qTE58",
      "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
      "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
      "https://www.youtube.com/embed/VU9q3nSYidc?si=0jhKv_EyTYo8fZBc",
      "https://www.youtube.com/embed/QVRiLZ-PUsk?si=KWWhsxIHS3VApEyv",
    ];
  return (
    <>
      <div className="min-h-screen w-full">
        {/* Start of Background Image (Same as Photos) */}
        <div
          className="w-full min-h-96 mt-[64px]"
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1505027014503-e6de34d28116?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
            {t("galleryVideos-main-title")}
          </h1>
        </div>
        {/* End of Background Image */}

        {/* Section with Description */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("galleryVideos-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <p className="text-xl my-8">
            {t("galleryVideos-desc")}
          </p>
        </div>

        {/* Video Gallery */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
           {t("galleryVideos-featured-main-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

          {/* Video Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16">
            {/* Video 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <div className="relative w-full h-[250px]">
                <iframe
                  className="w-full h-full rounded-t-lg"
                  src="https://www.youtube.com/embed/iyb2nCc2fHg?si=bTiD7yIcIDHnrZ91"
                  title="Creative Journey"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{t("galleryVideos-featured-1st-video-title")}</h1>
                <p className="text-sm text-gray-600">
                {t("galleryVideos-featured-2nd-video-desc")}
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <div className="relative w-full h-[250px]">
                <iframe
                  className="w-full h-full rounded-t-lg"
                  src="https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK"
                  title="Innovative Design Trends"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                {t("galleryVideos-featured-2nd-video-title")}
                </h1>
                <p className="text-sm text-gray-600">
                {t("galleryVideos-featured-2nd-video-desc")}
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <div className="relative w-full h-[250px]">
                <iframe
                  className="w-full h-full rounded-t-lg"
                  src="https://www.youtube.com/embed/QaEZVrI2DF8?si=r8URkQN9SCzFLfH5"
                  title="Masterpiece Creations"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                {t("galleryVideos-featured-3rd-video-title")}
                </h1>
                <p className="text-sm text-gray-600">
                {t("galleryVideos-featured-3rd-video-desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Videos Section */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("gallerryVideos-more-videos-main-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {videos.map((videoSrc, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <iframe
                  className="w-full h-[200px] rounded-t-lg"
                  src={videoSrc}
                  title={`Museum Video ${i + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h1 className="text-lg font-semibold mb-2">
                  {t("gallerryVideos-more-video-title")} {i + 1}
                  </h1>
                  <p className="text-sm text-gray-600">
                  {t("gallerryVideos-more-video-desc")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosGallery;
