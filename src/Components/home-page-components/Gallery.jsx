import { useState } from 'react';
import { FiShare2 } from "react-icons/fi";
import e1 from '../../../src/images/gallery/e1.jpg'
import e2 from '../../../src/images/gallery/e2.jpeg'
import e3 from '../../../src/images/gallery/e3.jpeg'
import c1 from '../../../src/images/gallery/c1.jpeg'
import c2 from '../../../src/images/gallery/c2.jpeg'
import c3 from '../../../src/images/gallery/c3.jpeg'
import m1 from '../../../src/images/gallery/m1.jpeg'
import m2 from '../../../src/images/gallery/m2.jpeg'
import m3 from '../../../src/images/gallery/m3.jpg'
const Gallery = () => {
    const energy = [
        { "path": e1, "desc": "Energy is Power" },
        { "path": e2, "desc": "Renewable sources" },
        { "path": e3, "desc": "Clean and green" },
    ];

    const construction = [
        { "path": c1, "desc": "Building the future" },
        { "path": c2, "desc": "Strong foundations" },
        { "path": c3, "desc": "Innovative designs" },
    ];

    const mining = [
        { "path": m1, "desc": "Resource extraction" },
        { "path": m2, "desc": "Efficient methods" },
        { "path": m3, "desc": "Sustainable mining" },
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
