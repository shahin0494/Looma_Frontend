import React from 'react'
import Header from '../components/Header'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'

function HireMe() {
  return (
    <div className='w-full  px-10  bg-neutral-950 h-auto'>
      <Header
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
            { label: 'Hire', href: '/Hire-me' },
            { label: 'Dashboard', href: '/Dashboard' },
            { label: 'Contact', href: '/Contact' },
        ]}
        activeHref="/Hire-me"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#1A1A1A"
        pillColor="#2E2E2E "
        hoveredPillTextColor="#ffffff"
        pillTextColor="#D3D3D3"
      />
      <h1 className='text-9xl pt-20 text-neutral-500 font-semibold'>For You</h1>
      {/* job titles */}
      <div className="bg-neutral-800 rounded-lg p-4 sm:p-8 text-white max-w-sm md:max-w-full mx-auto my-4 sm:my-8">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-4 sm:mb-0">

          <div className="flex items-center gap-3">
            <img
              src="https://static.toiimg.com/thumb/msid-101493498,width-1280,height-720,imgsize-30986,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-neutral-700"
            />
            <h1 className="text-xl sm:text-4xl  text-neutral-300 font-semibold mb-3 sm:mb-2">MOOSA</h1>
          </div>
          <Link to={'/portfolio/:id/view'}>
            <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
              KNOW MORE
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-xl sm:text-xl text-neutral-300 font-semibold mb-3 sm:mb-2">JAVA Programmer</h1>
        </div>
        <div className="mb-6 flex justify-between sm:mb-8">
          <h2 className="text-neutral-500 text-base sm:text-lg mb-3 sm:mb-4">SPECIALIZATIONS</h2>
          <div className="flex flex-wrap gap-2 sm:space-x-4">
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">JAVA</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">HTML</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">CSS</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">Finance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-700 pt-4 sm:pt-6">
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">FEES</h3>
            <p className="text-orange-600 text-base sm:text-lg">3000 - 6000€/month</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">AVAILABLE DATE</h3>
            <p className="text-base sm:text-lg">Jan 2025 – May 2025</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">Location</h3>
            <p className="text-base sm:text-lg">Bratislava, SK</p>
          </div>
        </div>
      </div>
      {/* job titles */}
      <div className="bg-neutral-800 rounded-lg p-4 sm:p-8 text-white max-w-sm md:max-w-full mx-auto my-4 sm:my-8">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-4 sm:mb-0">

          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpZhOteEV0UsUQ4gpRGcf1eI57lQ0-XxuL4yKU2Ir_HIRra6l7mLLgXeGOcCWeG6Cm_U&usqp=CAU"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-neutral-700"
            />
            <h1 className="text-xl sm:text-4xl  text-neutral-300 font-semibold mb-3 sm:mb-2">MANAVALAN</h1>
          </div>
          <Link to={'/portfolio/:id/view'}>
            <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
              KNOW MORE
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-xl sm:text-xl text-neutral-300 font-semibold mb-3 sm:mb-2">Finance</h1>
        </div>
        <div className="mb-6 flex justify-between sm:mb-8">
          <h2 className="text-neutral-500 text-base sm:text-lg mb-3 sm:mb-4">SPECIALIZATIONS</h2>
          <div className="flex flex-wrap gap-2 sm:space-x-4">
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">JAVASCRIPT</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">HTML</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">CSS</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">REACT</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">ANGULAR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-700 pt-4 sm:pt-6">
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">FEES</h3>
            <p className="text-orange-600 text-base sm:text-lg">3000 - 6000€/month</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">AVAILABLE DATE</h3>
            <p className="text-base sm:text-lg">Jan 2025 – May 2025</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">Location</h3>
            <p className="text-base sm:text-lg">Bratislava, SK</p>
          </div>
        </div>
      </div>
      {/* job titles */}
      <div className="bg-neutral-800 rounded-lg p-4 sm:p-8 text-white max-w-sm md:max-w-full mx-auto my-4 sm:my-8">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-4 sm:mb-0">

          <div className="flex items-center gap-3">
            <img
              src="https://preview.redd.it/rate-young-rowan-atkinson-v0-bqj9mp2n00rd1.jpg?width=478&format=pjpg&auto=webp&s=bf05dd334e4d091966cd8f8b5337232f1f4afd59"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border bg-black border-neutral-700"
            />
            <h1 className="text-xl sm:text-4xl  text-neutral-300 font-semibold mb-3 sm:mb-2">Mr.BEAN</h1>
          </div>
          <Link to={'/portfolio/:id/view'}>
            <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
              KNOW MORE
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-xl sm:text-xl text-neutral-300 font-semibold mb-3 sm:mb-2">Graphic Designer</h1>
        </div>
        <div className="mb-6 flex justify-between sm:mb-8">
          <h2 className="text-neutral-500 text-base sm:text-lg mb-3 sm:mb-4">SPECIALIZATIONS</h2>
          <div className="flex flex-wrap gap-2 sm:space-x-4">
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">Illustrator</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">FIgma</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">CSS</span>
            <span className="bg-neutral-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-neutral-300 text-sm sm:text-base">Finance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-700 pt-4 sm:pt-6">
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">FEES</h3>
            <p className="text-orange-600 text-base sm:text-lg">3000 - 6000€/month</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">AVAILABLE DATE</h3>
            <p className="text-base sm:text-lg">Jan 2025 – May 2025</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm sm:text-base">Location</h3>
            <p className="text-base sm:text-lg">Bratislava, SK</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HireMe