import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const NotificationCard = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="mt-10 text-3xl md:text-4xl font-semibold text-start mx-28">
                {t("notification-header")}
            </h1>
            <div className='w-full md:w-[1350px] mx-auto flex justify-center'>

                <div className="flex flex-col md:flex-row gap-10 py-10 pb-20">
                    <div className="flex flex-col">
                        <img
                            className={`rounded-md ${t.language === 'en' ? "w-[900px] h-[500px]":"w-[600px] h-[350px]"} object-cover`}
                            src="assets/images/Home/c1.jpg"
                        />

                        <div className='flex justify-start mt-2  gap-2'>
                            <div className='bg-blue-900 px-5 rounded-md' >
                                <FaFacebook size={35} className='text-white' />
                            </div>
                            <div className='bg-red-700 px-5 rounded-md'>
                                <FaYoutube size={35} className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='pb-6 font-bold uppercase text-2xl md:text-4xl' >{t("notification-title")}</p>
                        <p className='py-[2px] text-lg'>{t("aboutMuseum-desc")}</p>
                    </div>
                </div>

            </div>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-10"></div>

        </>
    )
}

export default NotificationCard
