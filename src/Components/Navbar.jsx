import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGlobe } from "react-icons/fa"; // Importing only the dropdown icon
// import logo from "../../src/images/logo/afghanInvest.png";
import mlogo from '../images/logo/mlogo.png'
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
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="navbar bg-mstheme text-white flex items-center justify-between px-4 py-1">
      {/* Logo Section */}
      <div className="navbar-start flex items-center">
        <Link
          to="/"
          className="flex items-center text-xl font-bold hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
        >
           <img src={mlogo} alt="National Museum Afghanistan Logo" className="h-14 w-auto mr-2" /> 
          NAM
        </Link>
      </div>

      {/* Menu Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <Link
              to="/"
              className="text-md font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.first-menu")}
            </Link>
          </li>
          <li className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="text-md font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.second-menu")} <FaChevronDown className="ml-1" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
            >
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.second-sub-menu-1")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.second-sub-menu-2")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.second-sub-menu-3")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.second-sub-menu-4")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="text-md font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.third-menu")} <FaChevronDown className="ml-1" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-2 shadow bg-mstheme rounded-box w-52 mt-1 z-20"
            >
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-1")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-2")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-3")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-4")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-5")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.third-sub-menu-6")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/events"
              className="text-md font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.fourth-menu")}
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="text-md font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.fifth-menu")}
            </Link>
          </li>
          <li className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="text-md font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            >
              {t("header.sixth-menu")} <FaChevronDown className="ml-1" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
            >
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.sixth-sub-menu-1")}
                </Link>
              </li>
              <li>
                <Link className="hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded">
                  {t("header.sixth-sub-menu-2")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-md font-medium hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
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
            className="text-md font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2 py-1 rounded"
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            <FaGlobe className="mr-1" /> Language <FaChevronDown className="ml-1" />
          </label>
          {isDropdownOpen && (
            <ul
              className="dropdown-content p-2 shadow-lg bg-mstheme rounded-box w-32 mt-1 z-20 max-h-60 overflow-auto"
              onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
            >
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
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
  );
};

export default Navbar;
