import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";

const MuseumInfoBar = () => {
  return (
    <>
    <div className='w-full md:w-[1150px] m-auto '>
        <div className="flex flex-col md:flex-row justify-between gap-10 py-20">
            <div className="">
                <p className='text-3xl md:text-4xl font-semibold'>Discover two million years of human <br /> history and culture</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <IoTicketSharp/> <span>free entry -</span><Link className='underline hover:no-underline transition-transform duration-300'>Book Online</Link></p>
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <MdOutlineWatchLater/> Open today: 10.00–17.00</p>
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <MdOutlineWatchLater/>  Last entry: 12.7</p>
            </div>
        </div>
        <div className="bg-gray-900 border-2"></div>
    </div>
        </>
  )
}

export default MuseumInfoBar
