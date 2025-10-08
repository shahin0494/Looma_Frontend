import { div } from 'motion/react-client'
import React from 'react'
import Header from '../components/Header'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer'

function Portfolio() {
  return (

    <div className='w-full  px-10  bg-neutral-950 h-auto'>
      <Header
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/Portfolio' },
          { label: 'Hire Me', href: '/Hire-me' },
          { label: 'Dashboard', href: '/Dashboard' }
        ]}
        activeHref="/Portfolio"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <h1 className='text-9xl py-20 px-10 text-neutral-500 font-semibold'>For You</h1>
      {/* job titles */}
      <div className="bg-neutral-800 rounded-lg p-4 sm:p-8 text-white max-w-sm md:max-w-full mx-auto my-4 sm:my-8">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-4 sm:mb-0">

          <h1 className="text-xl sm:text-4xl underline underline-offset-8 text-neutral-300 font-semibold mb-3 sm:mb-2">ANNA MILLER</h1>
          <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
            KNOW MORE
            <span className="ml-2">→</span>
          </button>
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

          <h1 className="text-xl sm:text-4xl underline underline-offset-8 text-neutral-300 font-semibold mb-3 sm:mb-2">ANNA MILLER</h1>
          <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
            KNOW MORE
            <span className="ml-2">→</span>
          </button>
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

          <h1 className="text-xl sm:text-4xl underline underline-offset-8 text-neutral-300 font-semibold mb-3 sm:mb-2">ANNA MILLER</h1>
          <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
            KNOW MORE
            <span className="ml-2">→</span>
          </button>
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

          <h1 className="text-xl sm:text-4xl underline underline-offset-8 text-neutral-300 font-semibold mb-3 sm:mb-2">ANNA MILLER</h1>
          <button className="bg-neutral-900 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-md flex items-center w-full sm:w-auto justify-center">
            KNOW MORE
            <span className="ml-2">→</span>
          </button>
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
      <Footer />
    </div>

  )
}

export default Portfolio