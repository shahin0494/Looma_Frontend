// src/users/pages/Profile.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../../component/Footer'
import logo from '/logo22.jpg'
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaCalendarAlt,
  FaUser,
} from 'react-icons/fa'

const HireMe = () => {
  // Static preview data for the preview card
  const preview = {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Jane Smith',
    title: 'UI/UX Designer',
    specializations: ['Web', 'Mobile', 'Branding'],
    fees: '$40 - $60/hr',
    availability: 'Available Now',
    location: 'San Francisco, CA'
  }

  return (
    <div className="min-h-screen bg-neutral-950">
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

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto pt-24 pb-10 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-neutral-900">
          {/* Background Banner */}
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80)' }}
          />
          {/* Profile Image */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 border-4 border-neutral-900 rounded-full shadow-lg bg-neutral-800">
            <img
              src={preview.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          {/* Username and Title */}
          <div className="mt-20 text-center px-6 pb-6">
            <h1 className="text-3xl font-extrabold text-white">{preview.name}</h1>
            <p className="text-red-500 text-lg mt-1">{preview.title}</p>
          </div>
          {/* Additional Details Card */}
          <div className="mx-6 mb-6 bg-neutral-800 rounded-xl shadow-md px-6 py-4 flex justify-around text-sm text-neutral-300 border border-neutral-700">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-white">Email</span>
              <span>jane.smith@example.com</span>
            </div>
            <div className="flex flex-col items-center border-l border-r border-neutral-700 px-6">
              <span className="font-semibold text-white">Member since</span>
              <span>Jan 2022</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-white">Location</span>
              <span>{preview.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-0 pb-16 px-4">
        {/* Hire Details Form Section */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 mb-10 shadow-xl">
          <h2 className="text-2xl font-extrabold text-white mb-8 tracking-tight">Create a Hire Card</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Profile Image (URL)</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="https://..."
                disabled
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="Full Name"
                disabled
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Job Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="e.g. Frontend Developer"
                disabled
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Specializations</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="e.g. Web, Mobile, Branding"
                
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Fees Range</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="$40 - $60/hr"
                disabled
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Availability</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="Available Now"
                disabled
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-neutral-400 text-sm mb-2 font-medium">Location</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-800/40 focus:border-red-700/50 transition-all duration-200"
                placeholder="San Francisco, CA"
                disabled
              />
            </div>
          </div>

          {/* Publish Button */}
          <div className="mt-10 flex justify-end">
            <button
              className="px-8 py-3 rounded-lg bg-red-700 hover:bg-red-800 text-white font-semibold shadow-lg transition-all duration-200"
              type="button"
              disabled
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default HireMe




// className="w-full py-2 rounded-lg border border-red-700 text-red-400 font-semibold hover:bg-red-800/10 transition-all duration-200 mb-2"