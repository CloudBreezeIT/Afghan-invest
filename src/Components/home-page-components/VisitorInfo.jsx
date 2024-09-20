import React from 'react'
import { Link } from 'react-router-dom'
import { MdWatchLater, MdEmail } from "react-icons/md";
import { FaUser, FaCamera, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { RiSmartphoneFill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const VisitorInfo = () => {
    const { t } = useTranslation();
  return (
    <div className='w-full md:w-[1150px] m-auto px-4 md:px-0'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="">
        <img className='h-[1000px]' src="https://images.pexels.com/photos/208636/pexels-photo-208636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-start">
            <button className='bg-yellow-600 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-white hover:text-yellow-600 transition-all duration-300 border-yellow-600 border-2 my-4'><Link>{t("visitorInfo-btn")}</Link></button>
            <h1 className='text-yellow-600 font-bold text-2xl md:text-4xl my-4'>{t("visitorInfo-main-title")}</h1>
            <p className='my-3'>{t("visitorInfo-closed")}</p>
            <p className='text-xl text-yellow-600 font-semibold my-1'>{t("visitorInfo-open-hour")}</p>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><MdWatchLater /></span><span>{t("visitorInfo-open-time")}</span></p>
        </div>
        <div className='bg-slate-900 border-2 my-4'></div>
        <div className="flex flex-col justify-center items-start">
            <h1 className='text-yellow-600 font-semibold text-2xl my-3'>{t("visitorInfo-entry")}</h1>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><FaUser /></span><span>{t("visitorInfo-adults")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><FaUser /></span><span>{t("visitorInfo-kids")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><FaUser /></span><span>{t("visitorInfo-foreign")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><RiSmartphoneFill /></span><span>{t("visitorInfo-phone-photography")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-yellow-600'><FaCamera /></span><span>{t("visitorInfo-camera-photography")}</span></p>
        </div>
        <div className='bg-slate-900 border-2 my-4'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-yellow-600 font-semibold text-2xl my-3'>{t("visitorInfo-location-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-yellow-600'><FaMapMarkerAlt /></span> <span>{t("visitorInfo-location")}</span></p>
        </div>
        <div className='bg-slate-900 border-2 my-4'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-yellow-600 font-semibold text-2xl my-3'>{t("visitorInfo-phone-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-yellow-600'><FaPhoneAlt /></span><span>{t("visitorInfo-phone")}</span></p>
        </div>
        <div className='bg-slate-900 border-2 my-4'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-yellow-600 font-semibold text-2xl my-3'>{t("visitorInfo-email-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-yellow-600'><MdEmail /></span><span>{t("visitorInfo-email")}</span></p>
        </div>
        <div className='bg-slate-900 border-2 my-4'></div>
        <div className="flex justify-center items-start flex-col">
            <p className='flex items-center justify-center gap-2'><span className='text-yellow-600'><HiInformationCircle /></span><span>{t("visitorInfo-inquiry")}</span></p>
        </div>
      </div>
      </div>
      <div className="bg-gray-900 border-2 my-16"></div>
    </div>
  )
}

export default VisitorInfo
