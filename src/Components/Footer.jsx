import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import mlogo from "../images/logo/mlogo.png";

const Footer = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    };

    return (
        <>
            <div className="px-10 pt-7 flex flex-col sm:flex-row justify-between gap-5 mt-7 bg-gray-100">
                <div className="space-y-7 w-full md:w-2/4">
                    <h1 className="border-b-2 border-gray-700 text-xl font-medium">About Museum</h1>
                    <div className="navbar-start flex items-center w-full">
                        <Link
                            to="/"
                            className="flex items-center text-lg font-bold  rounded"
                        >
                            <img
                                src={mlogo}
                                alt="National Museum Afghanistan Logo"
                                className="h-16 md:h-20 w-auto mr-2"
                            />
                            <p className="text-[20.1px] text-center font-bold ">{t("header.main-heading")}</p>
                        </Link>
                    </div>
                    <p className="text-mstheme">{t("footer.about")}</p>
                </div>
                <div className="w-full md:w-1/5">
                    <h1 className="border-b-2 border-gray-700 text-xl font-medium">{t("footer.links")}</h1>
                    <ul className="flex flex-col gap-2 text-center lg:text-left">
                        <li className="mt-5">
                            <Link
                                className="text-lg font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded"
                                to="/"
                            >
                                {t("header.first-menu")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded"
                                to="/about"
                            >
                                {t("header.fourth-menu")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded"
                                to="/products"
                            >
                                {t("header.fifth-menu")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded"
                                to="/gallery"
                            >
                                {t("header.sixth-menu")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded"
                                to="/contact"
                            >
                                {t("header.seventh-menu")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="border-b-2 border-gray-700 text-xl font-medium">    {t("header.seventh-menu")}</h1>
                    <div className="flex flex-col items-center gap-1 lg:items-end mt-6 lg:mt-0">
                        <p className="flex items-center justify-center gap-2 mt-5">
                            <FaMapMarkerAlt className="text-white" />
                            <span>{t("visitorInfo-location")}</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <FaPhoneAlt className="text-white" />
                            <span>{t("visitorInfo-phone")}</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MdEmail className="text-white" />
                            <span>{t("visitorInfo-email")}</span>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="bg-mstheme text-white pb-7 mt-7">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    {/* Main Links Section */}
                    <div className="flex flex-col items-center lg:items-start">
                        {/* <Link to="/" className="text-3xl font-bold mb-4">
                            {t("footer.main-title")}
                        </Link> */}

                    </div>

                    {/* Contact Information */}

                </div>

                {/* Social Links */}
                {/* <div className="flex justify-center mt-6">
                    <a
                        href="https://www.facebook.com/nationalmuseum.af"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiFacebook className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://twitter.com/nationalmuseum.afg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiTwitter className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://www.instagram.com/nationalmuseum.afg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiInstagram className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://linkedin.com/nationalmuseum.afg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiLinkedin className="hover:scale-110 transition-transform duration-300" />
                    </a>
                </div> */}

                {/* Footer Bottom Section */}
                <div className="text-center mt-6 flex flex-col md:flex-row justify-center lg:space-x-28">
                    <p className="text-sm md:text-md">&copy; {t("footer.desc")}</p>
                    <a href="https://ariadelta.af/" target="_blank" rel="noopener noreferrer" className="text-md">
                        <span className="text-yellow-400 font-medium">{t("footer.company-developer")}</span>: {t("footer.company-name")} </a>
                </div>

                {/* Scroll to Top Button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-6 bg-mstheme hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
                        title={t("Back to Top")}
                    >
                        <FaArrowUp className="text-md md:text-2xl" />
                    </button>
                )}
            </footer>
        </>
    );
};

export default Footer;
