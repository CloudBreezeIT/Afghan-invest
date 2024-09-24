import React from 'react'

const AboutHistory = () => {
  return (
    <>
    <div className='min-h-screen w-full'>
        {/* start of Background Image */}
    <div
          className=" w-full min-h-96 mt-[64px]"
          style={{
            backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/03/05/09/12/afghanistan-1237421_960_720.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
            History of Our Museum
          </h1>
        </div>
        {/* ends of Background Image */}
        {/* heading with description start here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
          History of the National Museum of Afghanistan
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <p className="text-xl my-8">
          Explore the National Museum of Afghanistan’s rich history, showcasing timeless artifacts and treasures that capture the essence of the nation's vibrant past. Discover beauty in every piece!
          </p>
        </div>
        {/* heading with description ends here */}
        {/* Historical topics starts here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
          Historical topics
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-center gap-12 my-16">
            <div className="bg-mstheme text-white rounded-xl group">
              <img
                className="rounded cursor-pointer"
                src="https://images.pexels.com/photos/4162723/pexels-photo-4162723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className="p-2 text-xl group-hover:bg-white group-hover:text-mstheme transition duration-500 font-semibold tracking-wide">
              Ancient Afghan Artifacts
              </h1>
            </div>
            <div className="bg-mstheme text-white rounded-xl group">
              <img
                className="rounded cursor-pointer"
                src="https://images.pexels.com/photos/6942814/pexels-photo-6942814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className="p-2 text-xl group-hover:bg-white group-hover:text-mstheme transition duration-500 font-semibold tracking-wide">
              Silk Road Cultural Legacy
              </h1>
            </div>
            <div className="bg-mstheme text-white rounded-xl group">
              <img
                className="rounded cursor-pointer"
                src="https://images.pexels.com/photos/4162723/pexels-photo-4162723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className="p-2 text-xl group-hover:bg-white group-hover:text-mstheme transition duration-500 font-semibold tracking-wide">
              Dynastic Empire-Era Relics
              </h1>
            </div>
            <div className="bg-mstheme text-white rounded-xl group">
              <img
                className="rounded cursor-pointer"
                src="https://images.pexels.com/photos/5327973/pexels-photo-5327973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className="p-2 text-xl group-hover:bg-white group-hover:text-mstheme transition duration-500 font-semibold tracking-wide">
              Cultural Heritage Revival
              </h1>
            </div>
          </div>
        </div>
        {/* Historical topics ends here */}
        {/* gallery collection starts here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
          Help Support Us During this Historical Time
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-center gap-12 my-16">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2012/10/10/15/46/girl-60636_1280.jpg"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  Make a Donation
                </h1>
                <p className="text-sm text-gray-600">
                Support our mission by making a meaningful donation today!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2012/10/10/17/53/men-60744_960_720.jpg"
                alt="Afghanistan National Flag"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  Become a Member
                </h1>
                <p className="text-sm text-gray-600">
                Join us today and enjoy exclusive member benefits!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2013/02/20/00/52/afghanistan-83496_1280.jpg"
                alt="Intricately carved stone deity"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  Get Involved
                </h1>
                <p className="text-sm text-gray-600">
                Join us and contribute to preserving Afghanistan’s heritage!
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://media.istockphoto.com/id/1256983065/photo/jewellery-of-afganistan.jpg?s=1024x1024&w=is&k=20&c=lPp75xQXluwSo6VIPOUwLkRKzeNCVb1cfKvp8UyWF80="
                alt="Intricately carved stone deity"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  Shop from Us
                </h1>
                <p className="text-sm text-gray-600">
Explore unique items and support our cultural preservation!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* gallery collection ends here */}
        </div>
    </>
  )
}

export default AboutHistory
