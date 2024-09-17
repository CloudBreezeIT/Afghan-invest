import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Importing only the dropdown icon
import logo from '../../src/images/logo/afghanInvest.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="navbar bg-base-100 flex items-center justify-between px-4 py-1">
      {/* Logo Section */}
      <div className="navbar-start flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Afghan Invest Logo" className="h-10 w-auto mr-2" />
        </Link>
      </div>

      {/* Menu Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <Link to="/" className="text-md font-medium">{t('header.first-menu')}</Link>
          </li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0} className="text-md font-medium cursor-pointer flex items-center">
              {t('header.second-menu')} <FaChevronDown className="ml-1" />
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow bg-white rounded-box w-40 mt-1 z-20">
              <li><Link>{t('header.second-sub-menu-1')}</Link></li>
              <li><Link>{t('header.second-sub-menu-2')}</Link></li>
              <li><Link>{t('header.second-sub-menu-3')}</Link></li>
              <li><Link>{t('header.second-sub-menu-4')}</Link></li>
            </ul>
          </li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0} className="text-md font-medium cursor-pointer flex items-center">
              {t('header.third-menu')} <FaChevronDown className="ml-1" />
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow bg-white rounded-box w-52 mt-1 z-20">
              <li><Link>{t('header.third-sub-menu-1')}</Link></li>
              <li><Link>{t('header.third-sub-menu-2')}</Link></li>
              <li><Link>{t('header.third-sub-menu-3')}</Link></li>
              <li><Link>{t('header.third-sub-menu-4')}</Link></li>
              <li><Link>{t('header.third-sub-menu-5')}</Link></li>
              <li><Link>{t('header.third-sub-menu-6')}</Link></li>
            </ul>
          </li>
          <li><Link to="/events" className="text-md font-medium">{t('header.fourth-menu')}</Link></li>
          <li><Link to="/articles" className="text-md font-medium">{t('header.fifth-menu')}</Link></li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0} className="text-md font-medium cursor-pointer flex items-center">
              {t('header.sixth-menu')} <FaChevronDown className="ml-1" />
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow bg-white rounded-box w-40 mt-1 z-20">
              <li><Link>{t('header.sixth-sub-menu-1')}</Link></li>
              <li><Link>{t('header.sixth-sub-menu-2')}</Link></li>
            </ul>
          </li>
          <li><Link to="/contact-us" className="text-md font-medium">{t('header.seventh-menu')}</Link></li>
        </ul>
      </div>

      {/* Language Dropdown Section */}
      <div className="navbar-end flex items-center gap-2">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)} 
            className="btn btn-ghost text-sm">
            {i18n.language === 'en' ? 'ENGLISH' : 'فارسی'}
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded mt-1 z-20">
              <button 
                onClick={() => changeLanguage('en')} 
                className="block px-4 py-1 w-full text-left hover:bg-gray-200 text-sm">
                English
              </button>
              <button 
                onClick={() => changeLanguage('per')} 
                className="block px-4 py-1 w-full text-left hover:bg-gray-200 text-sm">
                فارسی
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
