import React, { useEffect, useState } from "react"
import Header from '../components/Header'
import logo from '/logo22.jpg'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from '../../component/Footer'
import FlowingMenu from "../../reactbits/FlowingMenu";
import { viewJobsAPI } from "../../services/allAPI";
import { useParams } from "react-router-dom";
import SERVERURL from "../../services/serverURL";
import { Earth, Github, Linkedin, LocateIcon, Mailbox, Telescope } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";



function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const { id } = useParams()

  const [job, setJob] = useState({})
  console.log(job);

  useEffect(() => {
    viewjobDetails()
  }, [])

  const viewjobDetails = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await viewJobsAPI(id, reqHeader)
        if (result.status == 200) {
          setJob(result.data)
        } else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  const demoItems = [
    { link: '/hire-me', text: 'Hire Now' },

  ];


  return (


    <div className="bg-neutral-950 h-auto px-5">
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
      {/* landing page bg and prfile  */}
      <div className="flex flex-col ">
        <div className="relative w-full mt-20 h-64 sm:h-80 md:h-96 ">
          <img
            className="w-full h-full  object-cover"
            src={job?.backgroundPhoto ? `${SERVERURL}/uploads/${job.backgroundPhoto}` : ""}
            alt="Cover"
          />
          <div className="absolute -bottom-46 md:-bottom-76 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <img
              src={job?.profilePhoto ? `${SERVERURL}/uploads/${job.profilePhoto}` : ""}
              alt="Profile"
              className="w-32 h-32 sm:w-76 sm:h-76 rounded-full border-5 border-neutral-500 object-cover"
            />
            <h2 className="text-white text-5xl font-semibold mt-2 text-center">{job?.username}</h2>
            {/* <h2 className=" border flex items-center justify-between gap-2 font-medium border-green-800 text-sm rounded text-green-100 bg-green-500/20 px-3 py-1.5 mt-5"><span><GoDot /></span> Available Now</h2> */}
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
              <h2 className="text-5xl  font-bold mb-4 text-neutral-200">About</h2> <hr  className="mb-4 text-neutral-700"/>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 ">Professional Summary</h3>
                  <div className="bg-neutral-700/25 p-2 rounded-lg">
                    <p className="text-neutral-400 text-justify leading-relaxed">
                      {job?.summary}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="bg-neutral-700/25 p-2 rounded-lg">
                    <ul className="space-y-3 text-neutral-300">
                      {job?.experience && job.experience.length > 0 ? (
                        job.experience.map((exp, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <div className="text-neutral-400">{exp}</div>
                          </li>
                        ))
                      ) : (
                        <li className="text-neutral-500">No experience added</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="text-white space-y-6">
              <h2 className="text-5xl font-bold mb-6 text-neutral-200">Technical Skills</h2>
              <div className="bg-neutral-700/30 rounded-lg p-6">
                {Array.isArray(job.technicalSkills) && job.technicalSkills.length > 0 ? (
                  job.technicalSkills.map((group, i) => (
                    <div key={i} className="mb-6">
                      <h3 className="text-xl font-semibold mb-4 text-neutral-200">{group.category}</h3> <hr  className="mb-4 text-neutral-700"/>
                      <div className="flex flex-wrap gap-3">
                        {group.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="bg-neutral-700/60 text-neutral-200 px-4 py-2 rounded-lg text-sm hover:bg-red-800/50 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-500">No technical skills available</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="text-white space-y-6">
              <h2 className="text-5xl font-bold mb-6 text-neutral-200">Get In Touch</h2> <hr  className="text-neutral-700"/>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl text-neutral-300 font-bold mb-4">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                        <Mailbox className="text-white text-sm font-bold"/>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-400">Email</p>
                        <p className="text-neutral-300">{job?.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                        <GiRotaryPhone className="text-white text-xl font-bold"/>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-400">Phone</p>
                        <p className="text-neutral-300">{job?.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                        <LocateIcon className="text-white  font-bold"/>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-400">Location</p>
                        <p className="text-neutral-300">{job?.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-neutral-300 font-bold mb-4">Social Links</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <FaGithub className=" text-xl" />
                      <span>{job?.github}</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <FaLinkedin className="w-5 h-5 rounded"></FaLinkedin>
                      <span>{job?.linkedin}</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      < RiTwitterXFill className="w-5 h-5  rounded" />
                      <span>{job?.twitter}</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                      <Earth className="w-5 h-5  rounded"></Earth>
                      <span>{job?.website}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* works section */}

      <section className="pb-20 max-w-7xl mx-auto bg-neutral-900 p-7 rounded-2xl">
        <h1 className="text-5xl font-bold mb-6 text-white">Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {Array.isArray(job.works) && job.works.length > 0 ? (
            job.works.map((work, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg bg-neutral-800"
              >
                <img
                  src={`${SERVERURL}/uploads/${work}`}
                  alt={`Work ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity rounded-lg"></div> */}
              </div>
            ))
          ) : (
            <div className="col-span-full text-neutral-500 text-center">No works to display</div>
          )}
        </div>
      </section>

      <div >

        <div style={{ height: '70px', position: 'relative' }} className='rounded border border-neutral-500 flex items-center mt-10 justify-center left-170 w-70 '>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio