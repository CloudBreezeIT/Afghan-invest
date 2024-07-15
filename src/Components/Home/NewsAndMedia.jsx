import React from "react";

export default function NewsAndMedia() {
  return (
    <>
      <div className="py-5 px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-4">News & Media</h2>
          <p className="text-xl text-black mb-12">
            Realtime Update on latest Job Opportunities, News and Social Media
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 ">
          <div
            className="rounded-xl w-full h-[500px]  bg-black bg-opacity-95"
            style={{
              backgroundImage:
                "url(" + "/assets/images/news&media/img3.avif" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.9,
            }}
          >
            <div className="w-[80%] text-start flex flex-col gap-5 bg-black bg-opacity-90 p-8">
              <span className="text-white opacity-80 text-xl"> Vacancies</span>
              <h2 className="lg:text-2xl text-white font-semibold tracking-wide ">
                Explore exciting career opportunities with Afghan Invest. We are
                always on the lookout for talented and passionate individuals to
                join our dynamic team. Check out our latest job openings and
                take the first step towards a rewarding career with us.
              </h2>
              <div>
                <button className="border border-gray-400 text-sm px-5 py-3 rounded-md text-white hover:bg-white hover:text-black">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-xl w-full h-[500px]"
            style={{
              backgroundImage:
                "url(" + "/assets/images/news&media/img2.avif" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.9,
            }}
          >
            <div className="w-[80%] text-start flex flex-col gap-5 bg-black bg-opacity-90 p-8">
              <span className="text-white opacity-80 text-xl">
                {" "}
                Social Media
              </span>
              <h2 className="lg:text-2xl text-white font-semibold tracking-wide">
                Stay connected with Afghan Invest through our social media
                channels. Follow us for the latest updates, project highlights,
                and behind-the-scenes glimpses of our work.
              </h2>
              <div>
                <button className="border border-gray-400 text-sm px-5 py-3 rounded-md text-white hover:bg-white hover:text-black">
                  Read more
                </button>
              </div>
            </div>
          </div>{" "}
          <div
            className="rounded-xl w-full h-[500px]"
            style={{
              backgroundImage:
                "url(" + "/assets/images/news&media/img2.avif" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.9,
            }}
          >
            <div className="w-[80%] text-start flex flex-col gap-5 bg-black bg-opacity-90 p-8">
              <span className="text-white opacity-80 text-xl">
                {" "}
                News & Press releases
              </span>
              <h2 className="lg:text-2xl text-white font-semibold tracking-wide">
                Get the latest news and updates from Afghan Invest. Stay
                informed about our recent projects, company announcements, and
                industry insights.
              </h2>
              <div>
                <button className="border border-gray-400 text-sm px-5 py-3 rounded-md text-white hover:bg-white hover:text-black">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
