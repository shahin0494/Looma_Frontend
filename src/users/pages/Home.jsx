// src/users/pages/Home.jsx
import React, { useEffect } from 'react'
import { useRef } from 'react';
import Header from '../components/Header'
import VrbProx from '../../reactbits/VariableProx'
import Squares from '../../reactbits/Squares';
import MagnetLines from '../../reactbits/MagnetLines'
import ScrollReveal from '../../reactbits/ScrollReveal'
import SpotlightCard from '../../reactbits/SpotlightCard';
import Footer from '../../component/Footer';
import FlowingMenu from '../../reactbits/FlowingMenu'
 import logo from '/logo22.jpg'

function Home() {
  const containerRef = useRef(null);

  const demoItems = [
    { link: '/hire-me', text: 'Get Started' },

  ];

  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.5 }
    );
    if (visionRef.current) observer.observe(visionRef.current);
  }, []);

  return (
    <div className='bg-amber-50'>

      <Squares
        className='w-full h-screen'
        speed={0.4}
        squareSize={100}
        direction='diagonal'
        borderColor='rgba(71, 10, 31,0.1)'
        hoverFillColor='#ffffff'
      >
        <Header
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Portfolio', href: '/Portfolio' },
            { label: 'Hire Me', href: '/Hire-me' },
            { label: 'Dashboard', href: '/Dashboard' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#4C0101"
          pillColor="#FFFBEB"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#4C0101"
        />
          {/* section 1 */}
        <section className='grid grid-cols-1 md:grid-cols-2 justify-center md:h-screen  h-auto items-center gap-5 md:px-40 p-5'>

          <div className='flex items-center justify-between md:mt-[-80px]'>

            <h3 className=' text-4xl sm:text-5xl md:text-7xl lg:text-8xl py-10 md:py-0 text-neutral-900 flex-col font-bold'>
              Your <br />
              <span ref={visionRef} className='text-red-800 mb-3 mt-3  underline-reveal relative inline-block group'>
                Vision
                <span className="absolute translate-y-4 left-0 bottom-0 h-[5px] bg-red-950 w-0 group-hover:w-0 transition-all duration-500 underline-bar"></span>
              </span><br />
              reimagined
            </h3>
            <div className='hidden md:block'>
              <div className='pointer-events-auto items-center md:ms-50'>
                <MagnetLines
                  rows={6}
                  columns={6}
                  containerSize="60vmin"
                  lineColor="rgb(71, 10, 31)"
                  lineWidth="0.8vmin"
                  lineHeight="5vmin"
                  baseAngle={0}
                  style={{ margin: '2rem auto' }}
                />
              </div>
            </div>
          </div>
        </section>
          {/* section 2 */}
        <section  className='flex justify-center h-screen text-center bg-neutral-950 text-red-700/90 items-center gap-5 mb-0 md:px-40 p-5 py-16 md:py-24'>
          <div className='text-justify   px-0'>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={10}
            >
              This website is a refined portfolio platform that highlights your creative work with clarity and impact, featuring interactive visuals and seamless navigation for a professional presentation.
            </ScrollReveal>
          </div>
        </section>
            {/* section 3 */}
        <section className='flex-col bg-neutral-950 gap-5 mt-0 p-5'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium px-5 md:px-10 py-5 text-neutral-500 mt-5'>Our services</h1> <hr className='mt-6 md:mt-10 text-neutral-500 ms-5 md:ms-10 mr-15' />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 px-5 md:px-10'>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 215, 0, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i className="fa-solid fa-star text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Freelance</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expand your opportunities, connect with clients, and showcase your skills through a flexible and rewarding freelance experience.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 191, 255, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i className="fa-solid  text-white text-xl fa-earth-asia"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Web Development</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Build fast, responsive, and visually engaging websites that bring ideas to life with modern web development tools and practices.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 105, 180, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i className="fa-solid fa-film text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Video Editing</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enhance your edits with premium tools, exclusive effects, and round-the-clock support as a dedicated club member.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(144, 238, 144, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i className="fa-solid fa-code text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Software Development</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Accelerate your projects with exclusive tools, advanced features, and 24/7 expert support as a premium club member.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 140, 0, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i className="fa-solid fa-ranking-star text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">SEO</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Boost your rankings with advanced SEO tools, exclusive insights, and 24/7 support as a premium club member.
                </p>
              </div>

            </SpotlightCard>
          </div>

          <div style={{ height: '70px', position: 'relative' }} className='rounded border border-red-900 mt-10 md:mt-24'>
            <FlowingMenu items={demoItems} />
          </div>
        </section  >
        <Footer />
      </Squares>


    </div>
  )
}

export default Home