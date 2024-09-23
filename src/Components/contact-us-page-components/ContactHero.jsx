import React from "react";

export default function ContactHero() {
  return (
    <>
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div
          className="w-full min-h-96 mt-[64px]"
          style={{
            backgroundImage: `url(${"/assets/images/contact/contact-us-page-hero.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
            Get in Touch With Us
          </h1>
        </div>

        {/* Section 2: Contact Information */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            Contact Information
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="bg-white shadow-md p-8 rounded-lg">
              <i className="fas fa-phone-alt text-4xl text-mstheme mb-4"></i>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+123 456 789</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-lg">
              <i className="fas fa-envelope text-4xl text-mstheme mb-4"></i>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">info@nationalmuseum.af</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-lg">
              <i className="fas fa-map-marker-alt text-4xl text-mstheme mb-4"></i>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">
                National Museum, Kabul, Afghanistan
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Contact Form */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            Send Us a Message
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-mstheme"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-mstheme"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-mstheme"
            ></textarea>
            <button
              type="submit"
              className="w-full p-4 bg-mstheme text-white rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Section 4: Location Map */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            Visit Us
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d52630.321605902485!2d69.11999999999999!3d34.46750000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDI4JzAzLjAiTiA2OcKwMDcnMTIuMCJF!5e0!3m2!1sen!2s!4v1727123548311!5m2!1sen!2s"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
