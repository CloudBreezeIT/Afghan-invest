import React from 'react'
import { useTranslation } from "react-i18next";

const DirectorateSection = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className='w-full md:w-[1150px] m-auto pl-8 md:pl-0 '>
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
            <div className="">
                <img className='w-full p-4 md:w-[1100px] h-[300px] rounded-3xl' src='https://images.unsplash.com/photo-1566831453303-34a2c76ec34f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className='pb-6 text-yellow-700 font-semibold uppercase text-lg'>{t("aboutMuseum-title")}</p>
                <p className='pb-6 font-bold uppercase text-4xl'>{t("aboutMuseum.main-title")}</p>
                <p className='py-[2px] text-lg'>{t("aboutMuseum-desc")}</p>
                <button className='mt-6 px-4 py-2 bg-yellow-700 text-white font-semibold flex items-center gap-2 rounded-full hover:bg-white hover:text-yellow-700  duration-300 hover:border-2 border-yellow-700'>{t("aboutMuseum-btn")}</button>
            </div>
        </div>
        <div className="bg-gray-900 border-2"></div>
    </div>
        </>
  )
}

export default DirectorateSection
