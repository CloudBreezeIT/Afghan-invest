import React from 'react'

const CarExhibition = () => {
  return (
    <>
    <div className="min-h-screen w-full">
      {/* start of Background Image */}
      <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/25635025/pexels-photo-25635025/free-photo-of-white-classic-volkswagen-golf-mk2-with-alloy-wheels.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              Car Exhibition
            </h1>
            <p className="text-xl mb-6">
            Explore innovative designs, classic models, and cutting-edge technology at the ultimate car exhibition
            </p>
          </div>
        </div>

        {/* ends of Background Image */}
    </div>
    </>
  )
}

export default CarExhibition
