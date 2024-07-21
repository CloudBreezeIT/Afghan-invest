import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <div>Under Maintenence....</div>
          <Link className="text-blue-600" to="/">Go back Home</Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
