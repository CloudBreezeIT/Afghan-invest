import React from "react";

const Address = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-black mb-4">Our Location</h2>
        <p className="text-xl text-black mb-12">Get in Touch with Us</p>
      </div>

      <div className="mt-10 mx-10">
        <iframe
          title="Afghanistan Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3287.7431376489935!2d69.13965917573613!3d34.50939567298829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzMzLjgiTiA2OcKwMDgnMzIuMCJF!5e0!3m2!1sen!2s!4v1721556121207!5m2!1sen!2s"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mx-10 mt-10 mb-20">
        <div className="border-2 border-yellow-600 hover:shadow-2xl">
          <h1 className="bg-yellow-600 text-2xl font-semibold text-white p-2 hover:bg-black duration-1000">
            Kabul Office
          </h1>
          <p className="text-md mt-2 p-2">
            Location: Gozar Street, Third District, Mazar, Afghanistan.
          </p>
          <p className="text-md mt-2 p-2">Phone: +93798582175</p>
          <p className="text-md mt-2 p-2">Email: Info@afghaninvest.co</p>
        </div>
        <div className="border-2 border-yellow-600 hover:shadow-2xl">
          <h1 className="bg-yellow-600 text-2xl font-semibold text-white p-2 hover:bg-black duration-1000">
            Herat Office
          </h1>
          <p className="text-md mt-2 p-2">
            Location: House #18, Mokhaberat Street, Herat, Afghanistan.
          </p>
          <p className="text-md mt-2 p-2">Phone: +93799474745</p>
          <p className="text-md mt-2 p-2">Email: Info@afghaninvest.co</p>
        </div>
        <div className="border-2 border-yellow-600 hover:shadow-2xl">
          <h1 className="bg-yellow-600 text-2xl font-semibold text-white p-2 hover:bg-black duration-1000">
            Ghor Office
          </h1>
          <p className="text-md mt-2 p-2">
            Location: Tolak District, Ghor, Afghanistan.
          </p>
          <p className="text-md mt-2 p-2">Phone: +93780342233</p>
          <p className="text-md mt-2 p-2">Email: Info@afghaninvest.co</p>
        </div>
      </div>
    </>
  );
};

export default Address;
