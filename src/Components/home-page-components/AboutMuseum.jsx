import React from 'react'
import { useTranslation } from "react-i18next";

const AboutMuseum = () => {
    const { t } = useTranslation();
    const cardData = [
        {
            image: "https://images.unsplash.com/photo-1544213456-bc37cb97df74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t('aboutMuseum-1st-image-title'),
            desc: t('aboutMuseum-1st-image-desc'),
       },
        {
            image: "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t('aboutMuseum-2nd-image-title'),
            desc: t('aboutMuseum-2nd-image-desc'),
       },
        {
            image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t('aboutMuseum-3rd-image-title'),
            desc: t('aboutMuseum-3rd-image-desc'), 
       },
        {
            image: "https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: t('aboutMuseum-4th-image-title'),
            desc: t('aboutMuseum-4th-image-desc'), 
       },
    ]
  return (
    <>
    <div className='w-full md:w-[1150px] m-auto '>
        <div className='py-20'>
        <h1 className='pb-5 text-3xl md:text-4xl font-semibold'>{t('aboutMuseum-main-title')}</h1>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-6'>
        {cardData.map((item,index)=>(
    <div key={index} className=' shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer'>
            <div className="w-[250px]">
                <img src={item.image} alt="" />
            </div>
            <div className="px-5 py-3">
                <h1 className='text-xl font-semibold hover:underline '>{item.title}</h1>
                <p className='pt-3 pb-6'>{item.desc}</p>
            </div>
    </div>
    ))}
    </div>
    </div>
    <div className="bg-gray-900 border-2"></div>
    </div>
    </>
  )
}

export default AboutMuseum
