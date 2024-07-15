import { useState } from 'react';
import { FiShare2 } from "react-icons/fi";

const Gallery = () => {
    const energy = [
        { "path": "/assets/images/Home/e1.jpg", "desc": "Energy is Power" },
        { "path": "/assets/images/Home/e2.jpeg", "desc": "Renewable sources" },
        { "path": "/assets/images/Home/e3.jpeg", "desc": "Clean and green" },
    ];

    const construction = [
        { "path": "/assets/images/Home/c1.jpeg", "desc": "Building the future" },
        { "path": "/assets/images/Home/c2.jpeg", "desc": "Strong foundations" },
        { "path": "/assets/images/Home/c3.jpeg", "desc": "Innovative designs" },
    ];

    const mining = [
        { "path": "/assets/images/Home/m1.jpeg", "desc": "Resource extraction" },
        { "path": "/assets/images/Home/m2.jpeg", "desc": "Efficient methods" },
        { "path": "/assets/images/Home/m3.jpg", "desc": "Sustainable mining" },
    ];

    const [images, setImages] = useState(energy);
    const [selectedSector, setSelectedSector] = useState('energy');

    const handleChange = (Images, sector) => {
        setImages(Images);
        setSelectedSector(sector);
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center text-center mt-5'>
                <h2 className="text-4xl font-bold text-black mb-4">Our Gallery</h2>
                <p className="text-xl text-black mb-12 lg:w-[60%]">
                    Explore our Gallery to see the impact of Afghan Invest's work across various sectors. Browse through photos and videos showcasing our major projects, community engagements, and events.
                </p>
            </div>

            <div className='flex flex-wrap mx-10 gap-5'>
                <h1
                    className={`text-xl font-semibold cursor-pointer ${selectedSector === 'energy' ? 'text-yellow-500 border-b-2 border-yellow-600 pb-2' : 'text-black'}`}
                    onClick={() => handleChange(energy, 'energy')}
                >
                    Energy Sector
                </h1>
                <h1
                    className={`text-xl font-semibold cursor-pointer ${selectedSector === 'construction' ? 'text-yellow-500 border-b-2 border-yellow-600 pb-2' : 'text-black'}`}
                    onClick={() => handleChange(construction, 'construction')}
                >
                    Construction Sector
                </h1>
                <h1
                    className={`text-xl font-semibold cursor-pointer ${selectedSector === 'mining' ? 'text-yellow-500 border-b-2 border-yellow-600 pb-2' : 'text-black'}`}
                    onClick={() => handleChange(mining, 'mining')}
                >
                    Mining Sector
                </h1>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 items-center mx-10 mt-5'>
                {
                    images && images.map((e, index) => (
                        <div key={index} className="w-full h-80 rounded-2xl relative hover:shadow-2xl">
                            <img src={e.path} alt="" className="w-full h-full rounded-2xl object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 rounded-b-2xl flex items-center justify-between">
                                <span className="flex items-center">
                                    <FiShare2 className="mr-2 cursor-pointer" />
                                    {e.desc}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Gallery;
