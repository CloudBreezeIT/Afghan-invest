import React from "react";

const staffData = [
  {
    id: 1,
    name: "John Doe",
    position: "Lead Engineer",
    description:
      "An expert in mechanical engineering with over 15 years of experience in large-scale projects.",
    image:
      "https://cdn.pixabay.com/photo/2013/02/10/14/15/afghanistan-80091_640.jpg",
  },
  {
    id: 2,
    name: "M. Bilal",
    position: "Senior React Developer",
    description:
      "A frontend developer specializing in React, JavaScript, and ReduxToolkit.",
    image:
      "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/342510633_620905219517753_2503987777587080160_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFeZHTwGP2uqIcKBw-zt-oPn1iTqfiKyeWfWJOp-IrJ5Qz3U4rj5G6yQydTSOAxEAnpZ_geMDtTNm7VcBovcP7U&_nc_ohc=NgP7f0ek4fQQ7kNvgG8eou2&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AQK7Pv8TLLRmv4d3m4kqgLw&oh=00_AYB25FbeVyKDRWtT8K9dta2LwpMkvLeTcK33zQorDFUAUg&oe=66FA2192",
  },
  {
    id: 3,
    name: "Michael Lee",
    position: "Electrical Engineer",
    description:
      "Experienced in electrical systems design and troubleshooting in industrial environments.",
    image:
      "https://cdn.pixabay.com/photo/2013/02/10/14/15/afghanistan-80091_640.jpg",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Project Manager",
    description:
      "Has successfully managed multiple technical teams and projects, ensuring on-time delivery and quality.",
    image:
      "https://cdn.pixabay.com/photo/2013/02/10/14/15/afghanistan-80091_640.jpg",
  },
  {
    id: 5,
    name: "Chris Williams",
    position: "QA Engineer",
    description:
      "Dedicated to ensuring quality across all phases of the product lifecycle, with a sharp focus on automation testing.",
    image:
      "https://cdn.pixabay.com/photo/2013/02/10/14/15/afghanistan-80091_640.jpg",
  },
  {
    id: 6,
    name: "Sophia Brown",
    position: "Network Engineer",
    description:
      "Specializes in network infrastructure, managing both on-premises and cloud environments.",
    image:
      "https://media.istockphoto.com/id/1283748374/photo/coronavirus-country-concept.jpg?s=1024x1024&w=is&k=20&c=eeeV0QUKeP04xLOZNr1qmrlJ1kyTbjoZPiFVpOd-188=",
  },
];

export default function TechnicalStaff() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/11/07/01/45/map-1030358_1280.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
          Meet Our Professional Team
        </h1>
      </div>

      {/* Section 1: Staff Members */}
      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
        <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
          Our Technical Staff
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {staffData?.length > 0 ? (
            staffData?.map((member) => (
              <div
                key={member.id}
                className="relative flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl max-w-sm mx-auto group"
                style={{ minHeight: "350px", width: "300px" }}
              >
                {/* Image Section */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-4 text-center space-y-2">
                  <h5 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h5>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Contact Button */}
                <div className="flex justify-center mt-6">
                  <button
                    className="px-6 py-2 font-semibold text-sm bg-mstheme text-white rounded-full hover:bg-mstheme_hover shadow transition-all"
                    type="button"
                  >
                    Contact
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No technical staff available.
            </p>
          )}
        </div>
      </div>

      {/* Section 2: Join Our Team */}
      <div className="relative w-full px-4 md:px-0 md:w-[1100px] mx-auto py-16">
        {/* Background Section */}
        <div
          className="absolute inset-0 z-0 w-full h-full bg-gradient-to-br from-mstheme-light to-mstheme rounded-lg transform -rotate-2 opacity-70"
          style={{
            filter: "blur(15px)",
          }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 w-full bg-white shadow-2xl rounded-xl p-10 text-gray-900 flex flex-col items-center space-y-8 hover:shadow-3xl transition duration-500">
          <h2 className="text-center text-4xl font-extrabold text-mstheme">
            Be Part of Our Tech Team
          </h2>
          <p className="text-center text-lg text-gray-600">
            We value innovation and talent. Submit your resume and let’s shape
            the future together.
          </p>

          <form className="w-full flex flex-col items-center space-y-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full md:w-3/4 p-4 rounded-full text-gray-900 shadow-inner focus:outline-none focus:ring-4 focus:ring-mstheme transition-transform duration-300 hover:scale-105"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-mstheme text-white rounded-full font-bold text-lg shadow-lg hover:bg-mstheme_hover transform hover:-translate-y-1 transition-transform duration-300"
            >
              Apply Now
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Let’s grow together! Your data is secure with us.
          </p>
        </div>
      </div>
    </div>
  );
}
