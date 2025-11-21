import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Header from '../../users/components/Header'
import PageTransition from '../components/PageTransition';
useEffect
const ContactGrid = () => {
  const [token, setToken] = useState("")
  // Base items (always visible)
  const baseItems = [
    { label: 'Home', href: '/', navigate: "/" },
    { label: 'Hire', href: '/Hire-me', navigate: "Hire-me" },
    { label: 'Dashboard', href: '/Dashboard' },
    { label: 'Contact', href: '/Contact' },
  ];

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)

      const user = JSON.parse(sessionStorage.getItem("user"))


    }
  }, [token])


  const logout = () => {
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate("/")
  }




  // Add login only if no token
  const items = token
    ? [
      ...baseItems,
      { label: 'Profile', href: '/profile' },
      { label: 'Logout', onClick: logout }   // 👈 ADD THIS
    ]
    : [
      ...baseItems,
      { label: 'Login', href: '/Login' }
    ];


  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
        <div className="bg-black mb-5">
          {/* Try: 'glass', 'liquid', 'architect', 'luminous', 'island' */}
          <Header variant="glass" items={items} />
        </div>


        {/* Background: Drifting Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ opacity: { duration: 1.5 }, backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" } }}
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(to right, #0a0a0a 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Main Grid Container */}
        <div className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-12 relative">

          {/* Animated Borders (The "Drawing" Effect) */}
          <AnimatedBorder className="top-0 left-0 w-full h-[1px] origin-left" />
          <AnimatedBorder className="bottom-0 left-0 w-full h-[1px] origin-right" />
          <AnimatedBorder className="top-0 left-0 w-[1px] h-full origin-top" />
          <AnimatedBorder className="top-0 right-0 w-[1px] h-full origin-bottom" />
          {/* Large Header Section */}
          <div className="col-span-1 md:col-span-8 p-12 md:p-16 border-white/10 md:border-r border-b relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <div className="overflow-hidden mb-8">
                <motion.h1
                  className="text-5xl md:text-7xl font-light tracking-tight text-orange-600 leading-[1.1]"
                  variants={textReveal}
                >
                  Design. <span className="text-neutral-500">Develop.</span>
                </motion.h1>
                <motion.h1
                  className="text-5xl md:text-7xl font-light tracking-tight text-orange-600 leading-[1.1]"
                  variants={textReveal}
                >
                  <span className="text-neutral-500">Deploy.</span> Scale.
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  className="text-neutral-400 max-w-md leading-relaxed text-lg"
                  variants={textReveal}
                >
                  We are currently accepting new projects. Reach out to discuss your vision and how we can bring it to life with precision.
                </motion.p>
              </div>
            </motion.div>
          </div>
          {/* Side Info Panel */}
          <div className="col-span-1 md:col-span-4 flex flex-col">

            <SpotlightCard delay={0.4}>
              <FiMail className="text-3xl text-neutral-500 mb-6 group-hover:text-white transition-colors duration-500" />
              <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Inquiries</h3>
              <p className="text-lg font-light">support@looma.in</p>
            </SpotlightCard>
            <SpotlightCard delay={0.5}>
              <FiMapPin className="text-3xl text-neutral-500 mb-6 group-hover:text-white transition-colors duration-500" />
              <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-neutral-300 transition-colors">Office</h3>
              <p className="text-lg font-light">Bangalore, India</p>
            </SpotlightCard>
          </div>
          {/* Bottom CTA Banner */}
          <motion.a
            href="mailto:support@looma.in"
            className="col-span-1 md:col-span-12 p-10 border-white/10 border-b flex items-center justify-between bg-[#050505] group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-2xl font-light text-neutral-300 group-hover:text-white transition-colors">Start your journey</span>
              <span className="text-xs text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">Let's work together</span>
            </div>
            <motion.div
              className="relative z-10 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black group-hover:bg-white group-hover:border-transparent transition-colors duration-300"
            >
              <FiArrowRight className="text-white group-hover:text-black text-xl transition-transform duration-300 group-hover:-rotate-45" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </PageTransition>
  )
}

// --- Sub Components for Effects ---

const textReveal = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
}

// 1. The "Drawing" Border Component
const AnimatedBorder = ({ className }) => (
  <motion.div
    initial={{ scaleX: 0, scaleY: 0 }}
    animate={{ scaleX: 1, scaleY: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className={`absolute bg-white/20 z-20 ${className}`}
  />
)

// 2. The Spotlight Card (Mouse tracking glow)
const SpotlightCard = ({ children, delay }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="flex-1 p-10 border-b md:border-r border-white/10 bg-[#050505] relative group overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default ContactGrid