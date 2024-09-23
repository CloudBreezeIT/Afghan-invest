import React from "react";
import { stringConcat } from "../../helper-functions/formatText";

export default function EventsHeroCompo({ events }) {
  // Split events into upcoming and past
  const upcomingEvents = events.filter(
    (event) => new Date(event?.date) > new Date()
  );
  const pastEvents = events.filter(
    (event) => new Date(event?.date) <= new Date()
  );

  return (
    <>
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2V1bSUyMGV2ZW50c3xlbnwwfDB8MHx8fDI%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
              Explore Our Events
            </h1>
          </div>
        </div>

        {/* Section 2: Upcoming Events */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            Upcoming Events
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents?.length > 0 ? (
              upcomingEvents?.map((event) => (
                <div key={event.id} className="px-4 my-4">
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900">
                        {stringConcat(event.title, 22)}
                      </h5>
                      <p className="text-base font-light leading-relaxed text-gray-600">
                        {stringConcat(event.description, 50)}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        className="w-full font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                        type="button"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No upcoming events
              </p>
            )}
          </div>
        </div>

        {/* Section 3: Past Events */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            Past Events
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents?.length > 0 ? (
              pastEvents?.map((event) => (
                <div key={event.id} className="px-4 my-4">
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900">
                        {stringConcat(event.title, 22)}
                      </h5>
                      <p className="text-base font-light leading-relaxed text-gray-600">
                        {stringConcat(event.description, 60)}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        className="w-full font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                        type="button"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No past events
              </p>
            )}
          </div>
        </div>

        {/* Section 4: Newsletter Signup */}
        <div className="w-full bg-mstheme px-4 md:px-0 md:w-[1100px] mx-auto py-16 rounded-lg text-white my-6">
          <h2 className="text-center text-4xl font-bold my-8">Stay Updated!</h2>
          <p className="text-center text-lg mb-8">
            Subscribe to our newsletter to receive updates about upcoming
            events.
          </p>

          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-4 rounded-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto p-4 bg-white text-mstheme rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}