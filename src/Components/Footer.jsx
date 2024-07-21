import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col items-center lg:items-start">
                    <Link to="/" className="text-3xl font-bold text-yellow-500 mb-4">Afghan</Link>
                    <ul className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left">
                        <li><Link className='text-lg font-medium hover:text-yellow-500' to="/">HOME</Link></li>
                        <li><Link className='text-lg font-medium hover:text-yellow-500' to="/about">ABOUT US</Link></li>
                        <li><Link className='text-lg font-medium hover:text-yellow-500' to="/products">PRODUCTS</Link></li>
                        <li><Link className='text-lg font-medium hover:text-yellow-500' to="/gallery">GALLERY</Link></li>
                        <li><Link className='text-lg font-medium hover:text-yellow-500' to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:items-end mt-6 lg:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-md">Gozar Street, Third District, Mazar, Afghanistan</p>
                    <p className="text-md">Phone: +93798582175</p>
                    <p className="text-md">Email: info@afghaninvest.co</p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:text-yellow-500"><FiFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:text-yellow-500"><FiTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:text-yellow-500"><FiInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl mx-3 hover:text-yellow-500"><FiLinkedin /></a>
            </div>
            <div className="text-center mt-6">
                <p className="text-md">&copy; 2024 Afghan Invest. All rights reserved. Developed by <Link to="/">Aria Delta Consulting Group</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
