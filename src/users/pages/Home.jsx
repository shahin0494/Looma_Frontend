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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitWords(text) {
  // Only return spans, no container, container will be added in render
  return text.split(" ").map((word, index) => (
    <span key={index} className="inline-block opacity-0 blur-sm mr-1">
      {word}
    </span>
  ));
}

function Home() {
  const containerRef = useRef(null);

  const demoItems = [
    { link: '/hire-me', text: 'Get Started' },

  ];

  const visionRef = useRef(null);

  const section2Ref = useRef(null);

  const section3Ref = useRef(null);

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

  useEffect(() => {
    if (section2Ref.current) {
      // Select all spans
      const words = gsap.utils.toArray(section2Ref.current.querySelectorAll(".section2-words span"));

      // Ensure initial state
      gsap.set(words, { opacity: 0, y: 20, filter: "blur(10px)" });

      // Animate on scroll
      gsap.to(words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.04,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  // GSAP animation for Section 1 content
  useEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      });
      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        delay: 0.1,
      });
    }
  }, []);

  // GSAP animation for Section 3 content
  useEffect(() => {
    if (section3Ref.current) {
      gsap.set(section3Ref.current, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
      gsap.to(section3Ref.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
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
          baseColor="#000000"
          pillColor="#4C0101"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#D4D4D4"
        />
        {/* section 1 redesigned */}
        {/* section 1 redesigned like section 2 */}
        <section className="relative h-screen flex items-center justify-center bg-neutral-950 overflow-hidden">
          {/* Background pulse gradient circle */}
          <div
            className="absolute w-[25rem] h-[25rem] top-1/4 left-1/4 rounded-full opacity-70 animate-pulse blur-3xl"
            style={{
              background: 'conic-gradient(black, red, red, black, red, black, red)',
            }}
          ></div>

          {/* Content container */}
          <div className="relative z-10 w-full max-w-7xl px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
            {/* Left Text Content */}
            <div className="flex-1 space-y-6" ref={containerRef}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-neutral-100 leading-tight">
                Your <span className="text-red-700 font-extralight">Vision</span><br />Reimagined
              </h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-md">
                Transforming ideas into timeless digital experiences with clarity, precision, and creative depth.
              </p>
              <a
                href="/hire-me"
                className="px-6 py-3 rounded-full bg-red-800 text-neutral-100 hover:bg-red-700 transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Right Image / MagnetLines */}
            <div className="flex-1 hidden md:flex justify-center items-center">
              <MagnetLines
                rows={6}
                columns={6}
                containerSize="55vmin"
                lineColor="#9f0712"
                lineWidth="0.4vmin"
                lineHeight="3vmin"
                baseAngle={0}
              />
            </div>
          </div>
        </section>


        {/* section 2 */}
        <div className="flex flex-col md:flex-row h-230  w-400 ms-10 rounded-4xl bg-neutral-900">
          {/* Left Side - Image with Overlay */}
          <div className="relative w-full md:w-1/2  h-230 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover rounded-l-4xl bg-center"
              style={{
                backgroundImage: `url('./sec4.png')`,
              }}
            />

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" /> */}
          </div>

          <div className="w-full flex flex-col justify-between  md:py-24 ">
            {/* Navigation */}


            {/* Main Content */}
            <div
              ref={section2Ref}  >
              <div className="section2-words">
                <h1 className="text-4xl md:text-4xl lg:text-5xl text-start font-extralight ms-5 leading-normal  text-orange-600 ">
                  {splitWords(
                    "Crafting  digital  experiences  that  marry  form  and  function.  I  specialise  in  creating  bespoke  solutions  that  honour  timeless  design  principles  whilst  embracing  modern  innovation.  Every  project  is undertaken  with  meticulous  attention  to  detail  and  a  genuine  passion  for  work  that  resonates."
                  )}
                </h1>
                {/* <p className="text-sm md:text-sm text-gray-100 text-start max-w-xl mb-16">
                    {splitWords(
                      "LOOMA's work has been recognized globally with multiple awards, including FWA, CSS Design Awards, Awwwards and UX Design Award Berlin, reflecting our commitment to design excellence and innovative storytelling."
                    )}
                  </p> */}

              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="flex gap-8">

            </div>
          </div>
        </div>
        {/* section 3 */}
        <div ref={section3Ref} className='flex-col bg-neutral-900 gap-5 mt-10 w-400 h-170 mb-10 ms-10 rounded-4xl p-5 overflow-hidden'>
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
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 191, 255, 0.4)">
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
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 105, 180, 0.4)">
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
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(144, 238, 144, 0.4)">
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
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 140, 0, 0.4)">
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
          {/* section4  */}
        </div  >
        <div className='px-10'>
          <div style={{ height: '70px', position: 'relative' }} className='rounded- border border-red-900 mt-10 mb-5 md:mt-24'>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
        <Footer />
      </div>

    </ClickSpark>
  )
}

export default Home