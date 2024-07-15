import { useState } from 'react';
import { FiSearch } from "react-icons/fi";  
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showInput, setShowInput] = useState(true);
  const [showlang , setShowLang ] = useState(true)

  const handleShowInput = () => {
    setShowInput(!showInput);
    setShowLang(!showlang)
  };

  return (
    <div className="navbar bg-base-100 flex items-center" >
      <div className="navbar-start">
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
           <li><Link className='text-[17px] font-semibold'>HOME</Link></li>    
          <li><Link className='text-[17px] font-semibold'>ABOUT US</Link></li>
          <li><Link className='text-[17px] font-semibold'>PRODUCTS</Link></li>
          <li><Link className='text-[17px] font-semibold'>GALLERY</Link></li>
          <li><Link className='text-[17px] font-semibold'>CONTACT US</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Afghan</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className='text-[17px] font-semibold'>HOME</Link></li>    
          <li><Link className='text-[17px] font-semibold'>ABOUT US</Link></li>
          <li><Link className='text-[17px] font-semibold'>PRODUCTS</Link></li>
          <li><Link className='text-[17px] font-semibold'>GALLERY</Link></li>
          <li><Link className='text-[17px] font-semibold'>CONTACT US</Link></li>
        </ul>
        <hr className='mb-20 bg-white'/>
      </div>
      <div className="navbar-end me-10 flex gap-7 items-center">
       {showlang && <a className="text-red-800">ENGLISH</a>} 
        <FiSearch className={`${showInput ? 'block' :"hidden"} cursor-pointer`} size={25} onClick={handleShowInput}/>
        <input 
          type="text" 
          placeholder='Type Here ...'
          className={`transition-all duration-300 ease-in-out border-black border-2 px-3 rounded-3xl  ${showInput ? 'w-0 opacity-0' : 'block w-44 opacity-100'} focus-within::border-red-700`} 
          style={{ height: '2.5rem' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
