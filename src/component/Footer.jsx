import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer style={{marginTop:"-20px"}} className="bg-neutral-100 text-black px-10 md:px-20 py-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left section */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-20 h-6 bg-red-950 rounded-full flex items-center justify-center">
              <span className="text-neutral-300 font-bold">LOOMA</span>
            </div>
            <select
              className="bg-black text-gray-400 border border-gray-700 px-2 py-1 text-sm rounded-md focus:outline-none"
            >
              <option>EN</option>
              <option>FR</option>
              <option>DE</option>
            </select>
          </div>
          <p className="text-sm">Copyright © <span className='text-neutral-700'>LOOMA</span></p>
          <p className="text-sm hover:text-black cursor-pointer">Privacy policy</p>
        </div>

        {/* Middle section */}
        <div className="flex flex-col md:flex-row gap-10">
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">For Businesses</li>
            <li className="hover:text-black cursor-pointer">For Freelancers</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>

          <div className="space-y-2 text-sm">
            <p className="hover:text-black cursor-pointer">+91 999 888 7777</p>
            <p className="hover:text-black cursor-pointer">info@looma.com</p>
            <div className="flex gap-4 mt-3">
              <a href="#" className="border border-gray-700 rounded-full p-2 hover:bg-black hover:text-red-900 transition">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="border border-gray-700 rounded-full p-2 hover:bg-black hover:text-black transition">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="border border-gray-700 rounded-full p-2 hover:bg-black hover:text-black transition">
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="text-sm">
          <p className="flex items-center gap-2 text-gray-500">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            Built by <span className="hover:text-white cursor-pointer">SHAHIN</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer