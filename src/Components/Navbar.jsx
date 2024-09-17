import { useState } from 'react';
import { FiSearch } from "react-icons/fi";  
import { Link } from 'react-router-dom';
import logo from '../../src/images/logo/afghanInvest.png';

import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showInput, setShowInput] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="navbar bg-base-100 flex items-center">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/' className='text-[17px] font-semibold'>{t('header.first-menu')}</Link></li>  
            <details>
              <summary  className='text-[17px] font-semibold cursor-pointer'>{t('header.second-menu')}</summary>
              <ul className=''>
              <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-1')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-2')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-3')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-4')}</Link></li>
              </ul>
            </details>
            <li><Link to='' className='text-[17px] font-semibold'></Link></li>
            <li><Link to='/exhibition' className='text-[17px] font-semibold'>{t('header.third-menu')}</Link></li>
            <li><Link to='/events' className='text-[17px] font-semibold'>{t('header.fourth-menu')}</Link></li>
            <li><Link to='/articles' className='text-[17px] font-semibold'>{t('header.fifth-menu')}</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center">
          <img src={logo} alt="Afghan Invest Logo" className="h-10 w-auto mr-2" />
          Afghan Invest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><Link to='/' className='text-[17px] font-semibold'>{t('header.first-menu')}</Link></li>  
          <details>
              <summary className='text-[17px] font-semibold cursor-pointer'>{t('header.second-menu')}</summary>
              <ul className=''>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-1')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-2')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-3')}</Link></li>
                <li className='text-[15px] p-1 font-semibold'><Link>{t('header.second-sub-menu-4')}</Link></li>
              </ul>
            </details>  
          <li><Link to=''className='text-[17px] font-semibold'></Link></li>
          <li><Link to='exhibitions' className='text-[17px] font-semibold'>{t('header.third-menu')}</Link></li>
          <li><Link to='/events' className='text-[17px] font-semibold'>{t('header.fourth-menu')}</Link></li>
          <li><Link to='/articles' className='text-[17px] font-semibold'>{t('header.fifth-menu')}</Link></li>
        </ul>
      </div>
      <div className="navbar-end me-10 flex gap-7 items-center">
        {/* Language Dropdown Always Visible */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)} 
            className="btn btn-ghost">
            {i18n.language === 'en' ? 'ENGLISH' : 'فارسی'}
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded mt-1 z-10">
              <button 
                onClick={() => changeLanguage('en')} 
                className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                English
              </button>
              <button 
                onClick={() => changeLanguage('per')} 
                className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                فارسی
              </button>
            </div>
          )}
        </div>
        <FiSearch className={`${showInput ? 'block' :"hidden"} cursor-pointer`} size={25} onClick={() => setShowInput(!showInput)}/>
        <input 
          type="text" 
          placeholder={t('input.search-field')}
          className={`transition-all duration-300 ease-in-out border-black border-2 px-3 rounded-3xl ${showInput ? 'w-0 opacity-0' : 'block w-44 opacity-100'} focus-within::border-red-700`} 
          style={{ height: '2.5rem' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
