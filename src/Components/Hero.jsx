import React from 'react'
import hero1img from '../images/hero/hero1.webp'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

 
  return (
    <div>
      <div
  className="hero min-h-screen"
  style={{backgroundImage: `url(${hero1img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{t('hero.main-head')}</h1>
      <p className="mb-5 text-white">{t('hero.main-desc')}</p>
      <button className="bg-gray-600 p-3 rounded-lg text-white font-semibold hover:bg-slate-300 transition-all duration-300 hover:text-black">{t('hero.main-btn')}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
