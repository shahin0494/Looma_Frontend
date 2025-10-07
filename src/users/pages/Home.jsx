// src/users/pages/Home.jsx
import React from 'react'
import { useRef } from 'react';
import Header from '../components/Header'
import VrbProx from '../../reactbits/VariableProx'
import Squares from '../../reactbits/Squares';
import MagnetLines from '../../reactbits/MagnetLines'
import ScrollReveal from '../../reactbits/ScrollReveal'
import SpotlightCard from '../../reactbits/SpotlightCard';

function Home() {
  const containerRef = useRef(null);

  return (
    <>

      <Squares
        className='w-full h-screen'
        speed={0.4}
        squareSize={100}
        direction='diagonal'
        borderColor='#f0f0f0'
        hoverFillColor='#ffffff'
      >
        <Header />
        <section className='md:grid grid-cols-2 justify-center md:h-screen h-full items-center gap-5  md:px-40 p-5'>

          <div className='flex items-center justify-between  '>
            <h3 className=' text-6xl py-10 md:py-0 md:text-8xl flex text-center font-medium'>
              Your vision, <br />
              reimagined
            </h3>
          </div>

          <div>
            <div className='pointer-events-auto items-center md:ms-10'>
              <MagnetLines
                rows={6}
                columns={6}
                containerSize="60vmin"
                lineColor="black"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={0}
                style={{ margin: '2rem auto' }}
              />
            </div>
          </div>
        </section>
        <section style={{ marginTop: "-100px", height: "120vh" }} className='flex justify-center text-center  bg-black text-white items-center gap-5 my-5 md:px-40 p-5'>
          <div className='text-justify text-3xl px-0'>
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
        <section style={{ marginTop: "-20px", height: "150vh" }} className='flex-col   bg-neutral-900 gap-5 my-5  p-5' >
          <h1 className='text-6xl font-medium px-10 mt-5 text-white'>Popular services</h1> <hr  className='mt-10 bg-neutral-300 ms-10'/>
          <div className='flex mt-10 px-10'>
            <SpotlightCard className="custom-spotlight-card me-5" spotlightColor="rgba(255, 255, 255, 0.2)">
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
            <SpotlightCard className="custom-spotlight-card me-5" spotlightColor="rgba(255, 255, 255, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i class="fa-solid  text-white text-xl fa-earth-asia"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Web Development</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                 Build fast, responsive, and visually engaging websites that bring ideas to life with modern web development tools and practices.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card me-5" spotlightColor="rgba(255, 255, 255, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                   <i class="fa-solid fa-film text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Video Editing</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enhance your edits with premium tools, exclusive effects, and round-the-clock support as a dedicated club member.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card me-5" spotlightColor="rgba(255, 255, 255, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i class="fa-solid fa-code text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Software Development</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Accelerate your projects with exclusive tools, advanced features, and 24/7 expert support as a premium club member.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card me-5" spotlightColor="rgba(255, 255, 255, 0.2)">
              <div className="p-8 rounded-2xl  shadow-lg max-w-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <i class="fa-solid fa-ranking-star text-white text-xl"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">SEO</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                Boost your rankings with advanced SEO tools, exclusive insights, and 24/7 support as a premium club member.
                </p>
              </div>
            </SpotlightCard>


          </div>
        </section  >
      </Squares>

    </>
  )
}

export default Home