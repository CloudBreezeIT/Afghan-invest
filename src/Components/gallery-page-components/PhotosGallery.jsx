import React from 'react'

const PhotosGallery = () => {
  return (
    <>
    <div className='min-h-screen w-full'>
      {/* start of Background Image */}
      <div className=" w-full min-h-96 mt-[64px]" style={{backgroundImage:`url(${'https://images.unsplash.com/photo-1505027014503-e6de34d28116?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`, backgroundSize: "cover", backgroundPosition:"center"}}>
      <h1 className='text-white text-center py-36 text-4xl md:text-6xl font-bold'>Photos In Our Gallery</h1>
      </div>
      {/* ends of Background Image */}
      {/* heading with description start here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
            <h1 className='text-center text-4xl font-bold my-8 text-mstheme'>Our Creative Gallery</h1>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
            <p className='text-xl my-8'>Explore our collection of stunning visuals, capturing the essence of creativity and moments that inspire. Dive in and discover beauty in every frame!</p>
        </div>
      {/* heading with description ends here */}
      {/* gallery view starts here */}
      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
        <h1 className='text-center text-4xl font-bold my-8 text-mstheme'>Gallery View</h1>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
        <div className="flex flex-col md:flex-row justify-center gap-12 my-16">
          <div className="">
            <img className='rounded cursor-pointer' src="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1 className='m-1 text-xl'>Timeless Art Display</h1>
          </div>
          <div className="">
            <img className='rounded cursor-pointer' src="https://images.pexels.com/photos/5327973/pexels-photo-5327973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1 className='m-1 text-xl'>Majestic Islamic Architecture</h1>
          </div>
        </div>
      </div>
      {/* gallery view ends here */}

      {/* gallery collection starts here */}
      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
        <h1 className='text-center text-4xl font-bold my-8 text-mstheme'>Gallery Collection</h1>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
        <div className="flex flex-col md:flex-row justify-center gap-12 my-16">
          <div className="">
            <img className='rounded cursor-pointer w-[300px] h-[350px]' src="https://images.pexels.com/photos/355187/pexels-photo-355187.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className='m-1 text-lg w-[300px]'>Intricately carved stone deity showcasing ancient artistry and cultural heritage</h1>
          </div>
          <div className="">
            <img className='rounded cursor-pointer w-[300px] h-[350px]' src="https://plus.unsplash.com/premium_photo-1670689708311-4d3d1bb47f5e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='m-1 text-lg w-[300px]'>The image shows Afghanistan's national flag waving against a partly cloudy sky</h1>
          </div>
        </div>
      </div>
      {/* gallery collection ends here */}

    </div>
    </>
  )
}

export default PhotosGallery
