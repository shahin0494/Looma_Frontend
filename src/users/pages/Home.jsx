// src/users/pages/Home.jsx
import React, { useEffect } from 'react'
import { useRef } from 'react';
import Header from '../components/Header'
import Squares from '../../reactbits/Squares';
import MagnetLines from '../../reactbits/MagnetLines'
import ScrollReveal from '../../reactbits/ScrollReveal'
import SpotlightCard from '../../reactbits/SpotlightCard';
import Footer from '../../component/Footer';
import FlowingMenu from '../../reactbits/FlowingMenu'
import logo from '/logo22.jpg'
import ClickSpark from '../../reactbits/ClickSpark';

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

  const menuItems = [
    { label: 'Logout', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Profile', ariaLabel: 'Learn about us', link: '/profile' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];


  return (
    <ClickSpark
      sparkColor='#171717'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}>
      <div className='bg-neutral-950'>
        <Squares
          className='w-full h-screen'
          speed={0.4}
          squareSize={100}
          direction='right'
          borderColor='rgba(71, 10, 31,0)'
          hoverFillColor='#ffffff'
        >
          <Header
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hire', href: '/Hire-me' },
              { label: 'Dashboard', href: '/Dashboard' },
              { label: 'Contact', href: '/Contact' },
              { label: 'Login', href: '/Login' },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#4C0101"
            pillColor="#FFFBEB"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#4C0101"
          />
          {/* section 1 redesigned */}
          <section className="relative h-screen flex items-center justify-center bg-neutral-950 overflow-hidden">
            
          <div className="absolute w-[20rem] left-90 mt-20 h-[20rem] rounded-full blur-3xl opacity-40 "
     style={{
       background: 'conic-gradient(red, red, black, indigo, violet)'
     }}>
</div>

            {/* content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-16">
              <div className="text-center font-extralight md:text-left space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-extralight text-neutral-100 leading-tight">
                  Your <span className="text-red-700 font-extralight">Vision</span><br />Reimagined
                </h1>
                <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto md:mx-0">
                  Transforming ideas into timeless digital experiences with clarity, precision, and creative depth.
                </p>
                <div className="flex justify-center md:justify-start mt-4">
                  <a
                    href="/hire-me"
                    className="px-6 py-3 rounded-full bg-red-800 text-neutral-100 hover:bg-red-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <MagnetLines
                  rows={6}
                  columns={6}
                  containerSize="55vmin"
                  lineColor="#9f0712"
                  lineWidth="0.4vmin"
                  lineHeight="3vmin"
                  baseAngle={0}
                  style={{ margin: '2rem auto' }}
                />
              </div>
            </div>
          </section>
          
          {/* section 2 */}
          <section className='flex justify-center h-screen text-center bg-neutral-950 text-red-700/90 items-center gap-5 mb-0 md:px-40 p-5 py-16 md:py-24'>
            <div className='text-justify px-0'>
              
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
            <h1 className='text-3xl sm:text-4xl md:text-8xl  font-extralight px-5 md:px-10 py-5 text-neutral-200 mt-5'>Our services</h1> <hr className='mt-6 md:mt-2 text-neutral-500 ms-5 md:ms-10 mr-15' />
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
    </ClickSpark>
  )
}

export default Home