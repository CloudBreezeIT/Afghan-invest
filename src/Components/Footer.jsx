import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";

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
        <footer className="bg-mstheme text-white py-8 relative">
            <div className="text-center mt-6 flex justify-center space-x-28">
                <p className="text-md">&copy; {t("footer.desc")}</p>
                <a href="https://ariadelta.af/" target="_blank" rel="noopener noreferrer" className="text-md">
                    <span className="text-yellow-400 font-medium">{t("footer.company-developer")}</span>: {t("footer.company-name")}
                </a>
            </div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-mstheme hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
                    title={t("Back to Top")}
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
