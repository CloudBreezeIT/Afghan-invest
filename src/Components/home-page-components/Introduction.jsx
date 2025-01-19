import React from 'react'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='flex justify-center  space-x-10 mx-36 my-5'>
                <div className='w-[50%]'>
                    <h1 className='text-2xl font-extrabold text-mstheme'>{t("intro-title")}</h1>
                     <p className='mt-5'>{t("intro-desc")}</p>
                </div>
                <div className='w-[50%] mt-10'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Kabul%27s_national_history_museum.jpg" className=' h-[49vh] w-[100%]' alt="" />
                </div>
            </div>
            <div className="w-full mt-14 mb-10 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

        </>
    )
}

export default Introduction