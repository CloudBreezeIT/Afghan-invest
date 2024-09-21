import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-mstheme text-white py-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col items-center lg:items-start">
                    <Link to="/" className="text-3xl font-bold mb-4">{t("footer.main-title")}</Link>
                    <ul className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left">
                        <li><Link className='text-lg font-medium hover:bg-mstheme_hover  px-2 py-1 rounded' to="/">{t("header.first-menu")}</Link></li>
                        <li><Link className='text-lg font-medium hover:bg-mstheme_hover  px-2 py-1 rounded' to="/about">{t("header.fourth-menu")}</Link></li>
                        <li><Link className='text-lg font-medium hover:bg-mstheme_hover  px-2 py-1 rounded' to="/products">{t("header.fifth-menu")}</Link></li>
                        <li><Link className='text-lg font-medium hover:bg-mstheme_hover  px-2 py-1 rounded' to="/gallery">{t("header.sixth-menu")}</Link></li>
                        <li><Link className='text-lg font-medium hover:bg-mstheme_hover  px-2 py-1 rounded' to="/contact">{t("header.seventh-menu")}</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-1 lg:items-end mt-6 lg:mt-0">
                    <h3 className="mb-2"><Link className='text-lg font-semibold hover:bg-mstheme_hover  px-2 py-1 rounded' to="/contact">{t("header.seventh-menu")}</Link></h3>
                    <p className="text-md"><p className='flex items-center justify-center gap-2'><span className='text-white'><FaMapMarkerAlt /></span> <span>{t("visitorInfo-location")}</span></p></p>
                    <p className='flex items-center justify-center gap-2'><span className='text-white'><FaPhoneAlt /></span><span>{t("visitorInfo-phone")}</span></p>
                    <p className='flex items-center justify-center gap-2'><span className='text-white'><MdEmail /></span><span>{t("visitorInfo-email")}</span></p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <a href="https://www.facebook.com/nationalmuseum.af" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:bg-mstheme_hover  px-2 py-1 rounded"><FiFacebook className='hover:scale-110 transition-transform duration-300' /></a>
                <a href="https://twitter.com/nationalmuseum.afg" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:bg-mstheme_hover  px-2 py-1 rounded"><FiTwitter className='hover:scale-110 transition-transform duration-300'/></a>
                <a href="https://www.instagram.com/nationalmuseum.afg/" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:bg-mstheme_hover  px-2 py-1 rounded"><FiInstagram className='hover:scale-110 transition-transform duration-300'/></a>
                <a href="https://linkedin.com/nationalmuseum.afg" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:bg-mstheme_hover  px-2 py-1 rounded"><FiLinkedin className='hover:scale-110 transition-transform duration-300'/></a>
            </div>
            <div className="text-center mt-6">
                <p className="text-md">&copy; {t("footer.desc")} <Link to="https://www.linkedin.com/company/cloudbreeze/posts/?feedView=all" className='font-thin'>{t("footer.company-name")}</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
