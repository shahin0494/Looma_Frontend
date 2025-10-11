import React, { useState } from "react"
import Header from '../components/Header'
import logo from '/logo22.jpg'
import { GoDot } from "react-icons/go";
import { FaCode, FaDatabase, FaServer, FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaFigma, FaSketch } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobeaftereffects, SiAdobeacrobatreader } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import Masonry from "../../reactbits/Masnory";

function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');


  const items = [
    {
      id: "1",
      img: "https://assets.lummi.ai/assets/QmPSMPWchpsVo2bzkYiHofVszKZNGHr1YVELWZMz5t2m4H?auto=format&w=640",
      url: "https://example.com/one",
      height: 600, // Increased from 100
    },
    {
      id: "2",
      img: "https://assets.lummi.ai/assets/QmNpyrmgrNCAh2QhH7Mag2zZcdSLzozowmpw1eykQvvCji?auto=format&w=640",
      url: "https://example.com/two",
      height: 550,
    },
    {
      id: "3",
      img: "https://cdn.dribbble.com/userupload/43104628/file/original-cb64b2a6ed6fded0f1a111bad1392ba2.png?format=webp&resize=400x300&vertical=center",
      url: "https://example.com/three",
      height: 350,
    },
    {
      id: "4",
      img: "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/06/30053651/22-12.webp",
      url: "https://example.com/three",
      height: 250,
    },
    {
      id: "5",
      img: "https://wireflow.co/blog/content/images/2024/11/Abstract-Artwork-with-Fantastical-Creatures--1--min.jpeg",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "6",
      img: "https://assets.lummi.ai/assets/QmV55Zq49cGeiMf2FoWwngMD2nkT7fVBbw7x43g5gpSpuB?auto=format&w=640",
      url: "https://example.com/three",
      height: 700,
    },
    {
      id: "7",
      img: "https://colorwhistle.com/wp-content/uploads/2022/11/image18.png",
      url: "https://example.com/three",
      height: 700,
    },
    {
      id: "8",
      img: "https://assets.lummi.ai/assets/QmPjswVzdfjQVHHmy99jaVTcjDiRT9TsbQQxtvEKZfH45D",
      url: "https://example.com/three",
      height: 700,
    },
    {
      id: "9",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmAxlO-tJXRB05s_OjG1PzP5WvOGnPo7Ci6gSLF1SWk54QXuHgAYS2Ez535GmcksjaN4&usqp=CAU",
      url: "https://example.com/three",
      height: 350,
    },
    {
      id: "10",
      img: "https://thumbs.dreamstime.com/b/illustration-woman-tree-young-girl-ai-generated-sd-358592812.jpg",
      url: "https://example.com/three",
      height: 400,
    },
    
  ];
  // ... more items


  return (


    <div className="bg-neutral-950 h-auto px-5">
      <Header
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/Portfolio' },
          { label: 'Hire', href: '/Hire-me' },
          { label: 'Dashboard', href: '/Dashboard' }
        ]}
        activeHref="/Hire-me"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#1A1A1A"
        pillColor="#2E2E2E "
        hoveredPillTextColor="#ffffff"
        pillTextColor="#D3D3D3"
      />
      {/* landing page bg and prfile  */}
      <div className="flex flex-col ">
        <div className="relative w-full mt-20 h-64 sm:h-80 md:h-96 ">
          <img
            className="w-full h-full  object-cover"
            src="https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbXW_lhzo8TDwg1iYMeLU_xNmxdODuEOOEBaZMECrf8XEiPbv9upkJr7AzIi92WljK5KzmBkY2Qeh5iC1EtNdOpDjz0KDj2v3wwU.jpg?r=28f"
            alt="Cover"
          />
          <div className="absolute -bottom-46 md:-bottom-76 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <img
              src="https://preview.redd.it/rate-young-rowan-atkinson-v0-bqj9mp2n00rd1.jpg?width=478&format=pjpg&auto=webp&s=bf05dd334e4d091966cd8f8b5337232f1f4afd59"
              alt="Profile"
              className="w-32 h-32 sm:w-76 sm:h-76 rounded-full border-5 border-neutral-500 object-cover"
            />
            <h2 className="text-white text-5xl font-semibold mt-2 text-center">Mr.BEAN</h2>
            <h2 className=" border flex items-center justify-between gap-2 font-medium border-green-800 text-sm rounded text-green-100 bg-green-500/20 px-3 py-1.5 mt-5"><span><GoDot /></span> Available Now</h2>
          </div>
        </div>
      </div>

      {/* Profile Details Section */}
      <section className=" mt-55 md:mt-85 pb-20  max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'about'
              ? 'bg-red-950 text-white'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'skills'
              ? 'bg-red-950 text-white'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'contact'
              ? 'bg-red-950 text-white'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
          >
            Contact
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-neutral-900 rounded-xl p-8 shadow-2xl">
          {activeTab === 'about' && (
            <div className="text-neutral-400  space-y-6">
              <h2 className="text-5xl  font-bold mb-6 text-neutral-200">About Me</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 ">Professional Summary</h3>
                  <p className="text-neutral-400 text-justify leading-relaxed">
                    I’m a passionate Graphic Designer focused on creating clean, impactful, and meaningful visual experiences. I blend modern aesthetics with strategic storytelling to build strong brand identities. My approach combines creativity with clarity to ensure every design communicates with purpose. I strive to deliver work that inspires trust and leaves a lasting impression.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <ul className="space-y-3 text-neutral-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">2+ Years</span> ears of Professional Experience in Graphic Design & Branding
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">5+ Projects</span> Successfully Delivered Creative Projects
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Skilled in Modern Design Tools, </span> Visual Strategy & Industry Best Practices
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Technical Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend Skills */}
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CgDesignmodo className="text-blue-400" />
                    Design Tools
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaFigma className="text-blue-200 text-xl" />
                      <span>Figma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SiAdobephotoshop className="text-blue-400 text-xl" />
                      <span>Adobe Photoshop</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SiAdobeillustrator className="text-orange-400 text-xl" />
                      <span>Adobe Illustrator</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SiAdobeindesign className="text-rose-400 text-xl" />
                      <span>Adobe InDesign</span>
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MdOutlineAutoAwesomeMotion className="text-green-400" />
                    Motion & Effects
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <SiAdobeaftereffects className="text-blue-500 text-xl" />
                      <span>Adobe After Effects</span>
                    </div>
                  </div>
                </div>

                {/* Database & Tools */}
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TbTools className="text-purple-400" />
                    Other Tools
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <SiAdobeacrobatreader className="text-red-500 text-xl" />
                      <span>Adobe Acrobact</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaFigma className="text-blue-500 text-xl" />
                      <span>Prototyping & Wireframing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">@</span>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-neutral-300">bean@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">📱</span>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-neutral-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">📍</span>
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-neutral-300">Your City, Country</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <FaGitAlt className="text-orange-400 text-xl" />
                      <span>GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <span className="w-5 h-5 bg-blue-600 rounded"></span>
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <span className="w-5 h-5 bg-gray-600 rounded"></span>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className=" pb-20  max-w-7xl mx-auto">

        <div className="bg-neutral-900 rounded-xl p-8 shadow-2xl">
          <h1 className="text-5xl  font-bold mb-6 text-neutral-200">Works</h1>

          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '500px'
          }}>

            <style>{`
                    .list { position: relative; width: 100%; min-height: 100%; }
                    .item-wrapper { position: absolute; cursor: pointer; }
                    .item-img { 
                      width: 100%; 
                      height: 100%; 
                      background-size: cover; 
                      background-position: center; 
                      border-radius: 8px; 
    }
  `}</style>

            <Masonry
              items={items}
              ease="power3.out"
              duration={0}
              stagger={0}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Portfolio