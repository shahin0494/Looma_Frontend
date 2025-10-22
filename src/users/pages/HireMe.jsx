import React from 'react'
import Header from '../components/Header'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


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
      {/* job titles 1 - redesigned minimal and professional */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <motion.div
          className="relative  border border-neutral-800 rounded-xl p-8 sm:p-10 text-white max-w-3xl mx-auto backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://static.toiimg.com/thumb/msid-101493498,width-1280,height-720,imgsize-30986,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Moosa</h2>
                <p className="text-neutral-400 text-sm sm:text-base">Java Programmer</p>
              </div>
            </div>
            <Link to={'/portfolio/:id/view'}>
              <button className="px-6 py-2 rounded-full border border-red-700 text-red-500 hover:bg-red-800 hover:text-white transition-all duration-300">
                View Profile
              </button>
            </Link>
          </div>
          <div className="border-t border-neutral-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'HTML', 'CSS', 'Finance'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-800/70 px-3 py-1 rounded-md text-neutral-300 text-sm hover:bg-red-800/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 text-sm sm:text-base text-neutral-300">
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Fees</h4>
                  <p className="text-orange-600">3000 - 6000€/month</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Available</h4>
                  <p>Jan 2025 – May 2025</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Location</h4>
                  <p>Bratislava, SK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative  border border-neutral-800 rounded-xl p-8 sm:p-10 text-white max-w-3xl mx-auto backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://static.toiimg.com/thumb/msid-101493498,width-1280,height-720,imgsize-30986,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Moosa</h2>
                <p className="text-neutral-400 text-sm sm:text-base">Java Programmer</p>
              </div>
            </div>
            <Link to={'/portfolio/:id/view'}>
              <button className="px-6 py-2 rounded-full border border-red-700 text-red-500 hover:bg-red-800 hover:text-white transition-all duration-300">
                View Profile
              </button>
            </Link>
          </div>
          <div className="border-t border-neutral-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'HTML', 'CSS', 'Finance'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-800/70 px-3 py-1 rounded-md text-neutral-300 text-sm hover:bg-red-800/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 text-sm sm:text-base text-neutral-300">
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Fees</h4>
                  <p className="text-orange-600">3000 - 6000€/month</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Available</h4>
                  <p>Jan 2025 – May 2025</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Location</h4>
                  <p>Bratislava, SK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative  border border-neutral-800 rounded-xl p-8 sm:p-10 text-white max-w-3xl mx-auto backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://static.toiimg.com/thumb/msid-101493498,width-1280,height-720,imgsize-30986,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Moosa</h2>
                <p className="text-neutral-400 text-sm sm:text-base">Java Programmer</p>
              </div>
            </div>
            <Link to={'/portfolio/:id/view'}>
              <button className="px-6 py-2 rounded-full border border-red-700 text-red-500 hover:bg-red-800 hover:text-white transition-all duration-300">
                View Profile
              </button>
            </Link>
          </div>
          <div className="border-t border-neutral-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'HTML', 'CSS', 'Finance'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-800/70 px-3 py-1 rounded-md text-neutral-300 text-sm hover:bg-red-800/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 text-sm sm:text-base text-neutral-300">
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Fees</h4>
                  <p className="text-orange-600">3000 - 6000€/month</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Available</h4>
                  <p>Jan 2025 – May 2025</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Location</h4>
                  <p>Bratislava, SK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative  border border-neutral-800 rounded-xl p-8 sm:p-10 text-white max-w-3xl mx-auto backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://static.toiimg.com/thumb/msid-101493498,width-1280,height-720,imgsize-30986,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Moosa</h2>
                <p className="text-neutral-400 text-sm sm:text-base">Java Programmer</p>
              </div>
            </div>
            <Link to={'/portfolio/:id/view'}>
              <button className="px-6 py-2 rounded-full border border-red-700 text-red-500 hover:bg-red-800 hover:text-white transition-all duration-300">
                View Profile
              </button>
            </Link>
          </div>
          <div className="border-t border-neutral-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'HTML', 'CSS', 'Finance'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-neutral-800/70 px-3 py-1 rounded-md text-neutral-300 text-sm hover:bg-red-800/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 text-sm sm:text-base text-neutral-300">
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Fees</h4>
                  <p className="text-orange-600">3000 - 6000€/month</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Available</h4>
                  <p>Jan 2025 – May 2025</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 text-xs uppercase">Location</h4>
                  <p>Bratislava, SK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
     

      <Footer />
    </div>
  )
}

export default HireMe