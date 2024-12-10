import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGlobe } from "react-icons/fa"; // Importing only the dropdown icon
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import mlogo from "../images/logo/mlogo.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

const Navbar = () => {
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "per",
      name: "فارسی",
      dir: "rtl",
      country_code: "ir",
    },
    {
      code: "ps",
      name: "پښتو",
      dir: "rtl",
      country_code: "pk",
    },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(40);


  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    if (cookies.get("i18next") === "ps" || cookies.get("i18next") === "per") {
      document.body.className = "persian-font";
    }
    else {
      document.body.className = "english-font";
    }
  }, [currentLanguage, t]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setTopOffset(0)
    }
    else {
      setTopOffset(40)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 h-[80px] bg-gray-100 py-1 sm:py-2">
        <div className="mx-2 sm:mx-20 flex justify-around sm:justify-between items-center ">
          {/* Left Section: Phone and Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center  space-x-0 sm:space-x-4  text-[14px] sm:text-md mt-1 text-gray-700">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <FaPhoneAlt />
              <span>{t("visitorInfo-phone")}</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <FaEnvelope />
              <span>{t("visitorInfo-email")}</span>
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex  sm:space-x-4 text-gray-700">
            <a href="https://www.facebook.com/nationalmuseum.af?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="px-5 hover:text-blue-600">
              <FaFacebook  size={24}/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-red-600">
              <FaYoutube  size={24}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-blue-400">
              <FaTwitter  size={24}/>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ top: `${topOffset}px` }}
        className="fixed left-0 right-0 z-40 transition-all duration-1000"
      >

        <div className="navbar bg-mstheme text-white flex items-center justify-between px-4 py-1">
          {/* Logo Section */}
          <div className="navbar-start flex items-center w-full">
            <Link
              to="/"
              className="flex items-center text-lg font-bold hover:bg-mstheme_hover hover:text-white py-1 rounded"
            >
              <img
                src={mlogo}
                alt="National Museum Afghanistan Logo"
                className="h-16 md:h-20 w-auto mr-2"
              />
              <p className="text-[20.1px] text-center font-bold">{t("header.main-heading")}</p>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5 ml-24">
              <li>
                <Link
                  to="/"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.first-menu")}
                </Link>
              </li>
              <li className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.second-menu")} <FaChevronDown className="ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
                >
                  <li>
                    <Link to='/about/history' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.second-sub-menu-1")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/directorates' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.second-sub-menu-2")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/technical-staff' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.second-sub-menu-3")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/regulations&policies' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.second-sub-menu-4")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover">
                <Link
                  to='exhibitions'
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.third-menu")}
                </Link>
                {/* <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-mstheme rounded-box w-52 mt-1 z-20"
                >
                  <li>
                    <Link to='/exhibition/islamic-era-exhibition' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-1")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/exhibition/bronze-age-exhibition' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-2")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/exhibition/aynak-copper-exhibition' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-3")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/exhibition/ai-khanum' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-4")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/exhibition/thousand-cities-exhibition' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-5")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/exhibition/car-exhibition' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.third-sub-menu-6")}
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.fourth-menu")}
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.fifth-menu")}
                </Link>
              </li>
              <li className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.sixth-menu")} <FaChevronDown className="ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
                >
                  <li>
                    <Link to='/gallery/photos' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.sixth-sub-menu-1")}
                    </Link>
                  </li>
                  <li>
                    <Link to='gallery/videos' className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                      {t("header.sixth-sub-menu-2")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                >
                  {t("header.seventh-menu")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Dropdown Section */}
          <div className="navbar-end flex items-center gap-2 relative">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                <FaGlobe className="mr-1" />
                {/* <FaChevronDown className="ml-1" /> */}
              </label>
              {isDropdownOpen && (
                <ul
                  className="dropdown-content p-2 shadow-lg bg-mstheme rounded-box w-32 -ml-16 mt-1 z-20 max-h-60 overflow-auto"
                  onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
                >
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code} className="">
                      <a
                        href="#"
                        className={classNames(
                          "hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded",
                          {
                            disabled: currentLanguageCode === code,
                          }
                        )}
                        onClick={() => handleLanguageChange(code)} // Change language
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                        ></span>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
