import React from 'react'

const AynakCopperExhibition = () => {
  return (
    <>
    <div className="min-h-screen w-full">
      {/* start of Background Image */}
      <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/6808948/pexels-photo-6808948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              Aynak Copper Exhibition
            </h1>
            <p className="text-xl mb-6">
            Explore the unique copper artifacts and archaeological findings from the Aynak region
            </p>
          </div>
        </div>

        {/* ends of Background Image */}
    </div>
    </>
  )
}

export default AynakCopperExhibition
