import React from 'react'

const ThousandCitiesExhibitin = () => {
  return (
    <>
    <div className="min-h-screen w-full">
      {/* start of Background Image */}
      <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/19734671/pexels-photo-19734671/free-photo-of-panorama-of-kabul-surrounded-by-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              Thousand Cities Exhibition
            </h1>
            <p className="text-xl mb-6">
            Discover the rich cultural heritage and history of ancient cities across diverse civilizations
            </p>
          </div>
        </div>

        {/* ends of Background Image */}
    </div>
    </>
  )
}

export default ThousandCitiesExhibitin
