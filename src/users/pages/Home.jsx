// src/users/pages/Home.jsx
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Header from '../components/Header'
import Squares from '../../reactbits/Squares';
import MagnetLines from '../../reactbits/MagnetLines'
import ScrollReveal from '../../reactbits/ScrollReveal'
import SpotlightCard from '../../reactbits/SpotlightCard';
import Footer from '../../component/Footer';
import FlowingMenu from '../../reactbits/FlowingMenu'
import ClickSpark from '../../reactbits/ClickSpark';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';
import LogoLoop from '../../reactbits/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiFramer, SiMeta, SiAdobe } from 'react-icons/si';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ChromaGrid from '../../reactbits/ChromaGrid';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ArrowRight } from "lucide-react";

const strips = [
  { id: 1, title: "Design", subtitle: "Visual Systems", color: "#171717", img: "./q24.jpeg" },
  { id: 2, title: "Develop", subtitle: "Full Stack", color: "#262626", img: "./q8.png"},
  { id: 3, title: "Deploy", subtitle: "Cloud Scale", color: "#404040", img: "./q11.png"},
  { id: 4, title: "Scale", subtitle: "Global Reach", color: "#525252", img: "q12.png" },
];


gsap.registerPlugin(ScrollTrigger);

function splitWords(text) {
  // Only return spans, no container, container will be added in render
  return text.split(" ").map((word, index) => (
    <span key={index} className="section2-word-span inline-block opacity-0 blur-sm mr-1 will-change-transform">
      {word}
    </span>
  ));
}


function Home() {

  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const navigate = useNavigate()
  // const {userEditResponse, setUserEditResponse} = useContext(userUpdateContext)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)

      const user = JSON.parse(sessionStorage.getItem("user"))

      setUserDp(user.profile)
    }
  }, [token])

  const logout = () => {
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate("/")
  }

  const containerRef = useRef(null);

  const demoItems = [
    { link: '/hire-me', text: 'Get Started' },

  ];


  const visionRef = useRef(null);

  const section2Ref = useRef(null);

  const section3Ref = useRef(null);

  // gsap
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

  // gsap
  useEffect(() => {
    if (section2Ref.current) {
      // Select all spans
      const words = gsap.utils.toArray(section2Ref.current.querySelectorAll(".section2-word-span"));

      // Ensure initial state
      gsap.set(words, { opacity: 0, y: 30, filter: "blur(10px)" });

      // Animate on scroll
      gsap.to(words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.02,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
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



  // Base items (always visible)
  const baseItems = [
    { label: 'Home', href: '/' , navigate:"/"},
    { label: 'Hire', href: '/Hire-me' },
    { label: 'Dashboard', href: '/Dashboard' },
    { label: 'Contact', href: '/Contact' },
  ];

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

  const items1 = [
    {
      image: "./cr.jpg",
      title: "Cristiano Ronaldo",
      subtitle: "Looma helps me find top creatives fast. Smooth, sharp and world-class — just how I like things.",
      handle: "@cristiano",
      borderColor: "#FF3E3E",
      gradient: "linear-gradient(145deg, #FF3E3E, #0A0A0A)",

    },
    {
      image: "ny.jpg",
      title: "Neymar Junior",
      subtitle: "Whenever I need quick edits or branding work, Looma connects me with artists who understand my vibe.",
      handle: "@neymarjr",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(160deg, #F59E0B, #000)",

    },
    {
      image: "tm.jpg",
      title: "Tom Hardy",
      subtitle: "Looma keeps things simple. I post a task, get results. No nonsense — just quality talent.",
      handle: "@tomhardy",
      borderColor: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1, #000)",

    },
    {
      image: "ts.webp",
      title: "Thomas Shelby",
      subtitle: "In business, speed and precision matter. Looma delivers both. That’s why I use it.",
      handle: "@thomasshelby",
      borderColor: "#EC4899",
      gradient: "linear-gradient(170deg, #EC4899, #0A0A0A)",

    },
    {
      image: "jq.webp",
      title: "Keanu Reeves",
      subtitle: "Looma gives creators a real stage. Every project becomes a chance to build something meaningful.",
      handle: "@babayaga",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(150deg, #14B8A6, #000)",

    },
    {
      image: "cb.jpg",
      title: "Christian Bale",
      subtitle: "I value professionals who stay committed. Looma connects me with people who take their craft seriously.",
      handle: "@thedarkknight",
      borderColor: "#F43F5E",
      gradient: "linear-gradient(180deg, #F43F5E, #000)",

    },
    {
      image: "em.avif",
      title: "Eminem",
      subtitle: "I love how empowering Looma feels — it gives freelancers the spotlight they deserve.",
      handle: "@slimshady",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(130deg, #3B82F6, #0A0A0A)",

    },
    {
      image: "hc.webp",
      title: "Henry Cavill",
      subtitle: "Whether it's tech work or creative tasks, Looma always pairs me with reliable professionals.",
      handle: "@henry",
      borderColor: "#22C55E",
      gradient: "linear-gradient(175deg, #22C55E, #000)",

    },
    {
      image: "ww.jpg",
      title: "Walter White",
      subtitle: "Looma makes collaboration effortless. Strong talent, smooth experience.",
      handle: "@thecook",
      borderColor: "#A855F7",
      gradient: "linear-gradient(120deg, #A855F7, #000)",

    },
    {
      image: "tts.webp",
      title: "Tony Stark",
      subtitle: "If there’s one platform that blends tech and talent right — it’s Looma. Efficient. Smart. Seamless.",
      handle: "@ironman",
      borderColor: "#0EA5E9",
      gradient: "linear-gradient(190deg, #0EA5E9, #000)",

    },
  ];



  // logo loop
  const techLogos = [
    { node: <FaFacebook color="#fb3c01" />, title: "React", href: "https://react.dev" },
    { node: <SiMeta color="#fb3c01" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <FaInstagram color="#fb3c01" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiAdobe color="#fb3c01" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaTwitter color="#fb3c01" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiFramer color="#fb3c01" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const services = [
    { icon: "fa-star", title: "Freelance", desc: "Expand your opportunities, connect with clients, and showcase your skills through a flexible experience.", color: "rgba(255, 215, 0, 0.2)" },
    { icon: "fa-earth-asia", title: "Web Development", desc: "Build fast, responsive, and visually engaging websites that bring ideas to life with modern tools.", color: "rgba(0, 191, 255, 0.2)" },
    { icon: "fa-film", title: "Video Editing", desc: "Enhance your edits with premium tools, exclusive effects, and round-the-clock support.", color: "rgba(255, 105, 180, 0.2)" },
    { icon: "fa-code", title: "Software Dev", desc: "Accelerate your projects with exclusive tools, advanced features, and 24/7 expert support.", color: "rgba(144, 238, 144, 0.2)" },
    { icon: "fa-ranking-star", title: "SEO", desc: "Boost your rankings with advanced SEO tools, exclusive insights, and 24/7 support.", color: "rgba(255, 140, 0, 0.2)" },
  ];

  const [activeStrip, setActiveStrip] = useState(1);


  return (
    <PageTransition>
      <ClickSpark
        sparkColor='#fcb301'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>
        <div className='bg-zinc-950'>
          <div className="bg-black ">
            {/* Try: 'glass', 'liquid', 'architect', 'luminous', 'island' */}
            <Header variant="glass" items={items} />
          </div>


          {/* section 1 redesigned */}
         <section className="h-screen w-full flex bg-black overflow-hidden">
      {strips.map((strip) => (
        <motion.div
          key={strip.id}
          onMouseEnter={() => setActiveStrip(strip.id)}
          className="relative h-full border-r border-white/10 cursor-pointer overflow-hidden"
          animate={{
            flex: activeStrip === strip.id ? 2.5 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Background Image (Dimmed when inactive) */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${strip.img})` }}
            animate={{ 
                opacity: activeStrip === strip.id ? 0.6 : 0.2,
                scale: activeStrip === strip.id ? 1.05 : 1
            }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="overflow-hidden">
                {/* Vertical Title (Inactive State) */}
                {activeStrip !== strip.id && (
                     <motion.h2 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-2xl font-bold tracking-widest text-neutral-500 whitespace-nowrap"
                     >
                        {strip.title}
                     </motion.h2>
                )}

                {/* Expanded Content (Active State) */}
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ 
                       opacity: activeStrip === strip.id ? 1 : 0,
                       y: activeStrip === strip.id ? 0 : 20
                   }}
                   transition={{ duration: 0.4, delay: 0.1 }}
                >
                   <p className="text-orange-500 text-sm uppercase tracking-widest mb-2 font-mono">
                     0{strip.id} / {strip.subtitle}
                   </p>
                   <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                     {strip.title}
                   </h2>
                   <p className="text-neutral-300 max-w-sm leading-relaxed mb-8 hidden md:block">
                     We specialize in building scalable solutions that drive growth and innovation in the digital space.
                   </p>
                   
                </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>


          
          {/* section 2 */}
          <section className="relative py-32 px-6 md:px-12">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('./q77.png')` }}
                />
                {/* <div className="absolute inset-0 bg-[#fb3c01]/20 mix-blend-multiply" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" /> */}
              </div>
              {/* Text Side */}
              <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#fb3c01] to-transparent opacity-30" />
                <div ref={section2Ref}>
                  <h2 className="text-3xl md:text-5xl font-light leading-tight text-zinc-200">
                    {splitWords("Crafting digital experiences that marry form and function. I specialise in creating bespoke solutions that honour timeless design principles whilst embracing modern innovation. Every project is undertaken with meticulous attention to detail and a genuine passion for work that resonates.")}
                  </h2>
                </div>
                <div className="mt-12 flex items-center gap-4 text-[#fb3c01] uppercase tracking-widest font-mono text-sm">
                  <span className="w-12 h-[1px] bg-[#fb3c01]"></span>
                  <span>Design Philosophy</span>
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          {/* <div style={{ color: "#fb3c01" }} ref={section3Ref} className='flex-col bg-neutral-900 border-neutral-800 border  gap-5 mt-10 w-400 h-170 mb-10 ms-10 rounded-4xl p-5 overflow-hidden'>
            <h1 className='text-3xl sm:text-4xl md:text-8xl  font-extralight px-5 md:px-10 py-5  mt-5'>Our services</h1> <hr className='mt-6 md:mt-2 text-orange-600 ms-5 md:ms-10 mr-15' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 px-5 md:px-10'>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 215, 0, 0.2)">
                <div className="p-8 rounded-2xl   max-w-sm text-left">
                  <div className="flex  items-center mb-4">
                    <div className="flex  items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                      <i className="fa-solid fa-star  text-xl"></i>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">Freelance</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Expand your opportunities, connect with clients, and showcase your skills through a flexible and rewarding freelance experience.
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 191, 255, 0.2)">
                <div className="p-8 rounded-2xl   max-w-sm text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                      <i className="fa-solid   text-xl fa-earth-asia"></i>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">Web Development</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Build fast, responsive, and visually engaging websites that bring ideas to life with modern web development tools and practices.
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 105, 180, 0.2)">
                <div className="p-8 rounded-2xl   max-w-sm text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                      <i className="fa-solid fa-film  text-xl"></i>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">Video Editing</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enhance your edits with premium tools, exclusive effects, and round-the-clock support as a dedicated club member.
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(144, 238, 144, 0.2)">
                <div className="p-8 rounded-2xl   max-w-sm text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                      <i className="fa-solid fa-code text text-xl"></i>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">Software Development</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Accelerate your projects with exclusive tools, advanced features, and 24/7 expert support as a premium club member.
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 140, 0, 0.2)">
                <div className="p-8 rounded-2xl   max-w-sm text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                      <i className="fa-solid fa-ranking-star  text-xl"></i>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">SEO</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Boost your rankings with advanced SEO tools, exclusive insights, and 24/7 support as a premium club member.
                  </p>
                </div>
              </SpotlightCard>
            </div>
      
          </div  > */}
          <section className="py-20 px-6 md:px-12" ref={section3Ref}>
            <div className="max-w-[90rem] border border-neutral-900 rounded-2xl p-8 mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-zinc-800 pb-8">
                <h1 className='text-6xl md:text-8xl font-black tracking-tighter text-zinc-600 uppercase'>
                  Our <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600'>Services</span>
                </h1>
                <p className="text-[#fb3c01] font-mono mb-4 md:mb-2 text-lg">/// WHAT WE DO</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6'>
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <SpotlightCard className="h-full bg-zinc-900/40 border border-zinc-800 hover:border-[#fb3c01]/50 transition-colors" spotlightColor={service.color}>
                      <div className="p-8 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-[#fb3c01]">
                          <i className={`fa-solid ${service.icon} text-xl`}></i>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                        <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                          {service.desc}
                        </p>
                        <div className="mt-6 w-full h-[1px] bg-zinc-800 group-hover:bg-[#fb3c01] transition-colors" />
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <div className='flex flex-col rounded-2xl p-6 border border-neutral-900  bg-neutral-950 md:w-400 w-95 md:ms-10 ms-1 mb-10 bg-neutral-00 h-fit' style={{ position: 'relative' }}>
            <h1 className=' text-3xl md:text-7xl text-neutral-500 mb-10  font-extrabold  text-center'>Testimonials</h1>
            <ChromaGrid
              items={items1}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
          <div className='flex flex-col rounded-2xl p-4 border border-neutral-900  bg-neutral-950 md:w-400 w-80 ms-10 mb-10 bg-neutral-00 h-fit'>
            <h1 className='text-orange-600 font-medium underline underline-offset-8 text-center text-5xl'>Our Partners</h1>
            {/* Basic horizontal loop */}
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', top: "70px" }}>
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="right"
                logoHeight={28}
                gap={70}
                hoverSpeed={0}
                fadeOut
                fadeOutColor="#000000"
                scaleOnHover
                ariaLabel="Technology partners"
              />
            </div>
          </div>
          <div className='px-10'>
            <div style={{ height: '70px' }} className='flex items-center justify-center md:ms-80 rounded-lg border border-orange-600  mt-10 mb-25 w-80 md:w-200 md:mt-24'>
              <FlowingMenu items={demoItems} />
            </div>
          </div>
          <Footer />
        </div>
      </ClickSpark>
    </PageTransition>
  )
}

export default Home