import React from 'react'

const AboutDirectorates = () => {
  return (
    <div className='min-h-screen w-full'>
        {/* start of Background Image */}
        <div
          className=" w-full min-h-96 mt-[64px]"
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white text-center py-36 text-4xl md:text-6xl font-bold">
          Message from Directorates
          </h1>
        </div>
         {/* ends of Background Image */}
         {/* heading start here */}
        <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto my-24">
          <h1 className="text-4xl font-bold my-8 text-mstheme">
          Director's Message
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-mstheme via-mstheme to-transparent"></div>
        </div>
        {/* heading ends here */}
        {/* director container starts here */}
          <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto shadow-2xl flex flex-col md:flex-row justify-center items-center gap-16">
            <div className=" flex flex-col items-center justify-center p-24">
                <div className=''>
                    <img className='rounded-3xl' src="https://scontent.fpew1-1.fna.fbcdn.net/v/t39.30808-6/452580147_943382421166464_7310790582880668937_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V3WYbobxYIQQ7kNvgGQcnX6&_nc_ht=scontent.fpew1-1.fna&_nc_gid=Alk_bwJrGQajB2b2si9dmuq&oh=00_AYDaQcuAr3Yzzob1fWKz30d4J9_ewd332IqKqpFLCevyyg&oe=66F32668" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-mstheme text-4xl'>Omara Khan Massoudi</h1>
                    <h2 className='text-mstheme'>Director, National Museum Afghanistan</h2>
                </div>
            </div>
            <div className="">
                <p>Greetings from National Museum Afghanistan</p>
                <p>Afghanistan Museum is the oldest and largest museum in our country. The Afghan National Museum was opened in 1919 during the reign of King Amanullah Khan, the Afghanistan Museum is the first Museum in the Asia-Pacific region and has played the role of a leader in setting the tone for the museum movement in the continent, preserving Afghanistan's rich cultural heritage. Over the decades, it has amassed an extensive collection of artifacts, ranging from prehistoric relics to treasures from the Silk Road and ancient empires. Despite facing challenges, including looting and destruction during conflicts, the museum has remained a symbol of resilience, dedicated to safeguarding the nation's history. Today, it stands as a beacon of Afghan culture, attracting scholars, historians, and visitors from around the world, offering a glimpse into the country's diverse and vibrant past</p>
            </div>
          </div>
        {/* director container ends here */}
    </div>
  )
}

export default AboutDirectorates
