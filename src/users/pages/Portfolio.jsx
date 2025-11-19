import React, { useEffect, useState } from "react"
import Header from '../components/Header'
import logo from '/logo22.jpg'
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import Footer from '../../component/Footer'
import FlowingMenu from "../../reactbits/FlowingMenu";
import { makePaymentAPI, viewJobsAPI } from "../../services/allAPI";
import { useParams } from "react-router-dom";
import SERVERURL from "../../services/serverURL";
import { Earth, Github, Linkedin, LocateIcon, Mailbox, Telescope, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { loadStripe } from '@stripe/stripe-js';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job, setJob] = useState({})
  //console.log(job);

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
        console.log(result);
        
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

const handlePayment = async (e) => {
   e.preventDefault()
    console.log("inside handle payment fnction");
    // stripe object or instance
    const stripe = await loadStripe('pk_test_51SPbdm2M3fJPEa74kzqrVzHG5VXvbyJuPoIhAbzvKtOew8YzF694jJsC0lq5cNZk4F8vkkrv2d23l17OSO4NXKAr00RFERt4ox');
    // console.log(stripe)
    // reqbody - book , reqHeader - token
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await makePaymentAPI(job, reqHeader)
        console.log(result.data.checkoutSessionURL);
        const checkoutSessionURL = result.data.checkoutSessionURL
        console.log(checkoutSessionURL);
        
        if (checkoutSessionURL) {
          // redirect
          window.location.href = checkoutSessionURL
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
  };

 

  // Inline HireModal Component
  const HireModal = ({ isOpen, onClose, job }) => {
    const [formData, setFormData] = useState({
      name: '',
      contact: '',
      projectDetails: ''
    });


    const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    const modalVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          delayChildren: 0.2,
          staggerChildren: 0.1
        }
      },
      exit: { opacity: 0, y: 20, scale: 0.95 }
    };

    const itemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors p-1 z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <motion.div className="mb-8" variants={itemVariants}>
                  <h2 className="text-2xl font-semibold text-white mb-2">Let's collaborate</h2>
                  <p className="text-sm text-neutral-400">
                    Fill in your details to get started.
                  </p>
                </motion.div>

                <form onSubmit={handlePayment} className="space-y-5">
                  <motion.div className="space-y-1.5" variants={itemVariants}>
                    <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </motion.div>

                  <motion.div className="space-y-1.5" variants={itemVariants}>
                    <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Contact Info</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none"
                      placeholder="email@example.com or Phone"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </motion.div>

                  <motion.div className="space-y-1.5" variants={itemVariants}>
                    <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Project / Company</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none"
                      placeholder="Brand Identity Design..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={itemVariants}
                    className="w-full mt-4 bg-white text-black hover:bg-neutral-200 font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Proceed to Payment
                    <ArrowRight size={18} />
                  </motion.button>
                </form>

                <motion.div
                  variants={itemVariants}
                  className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-600"
                >
                  <CheckCircle2 size={12} /> Secure Details Transfer
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="bg-neutral-950 h-auto px-5 overflow-hidden"> {/* Added overflow-hidden to prevent scrollbar flicker during anims */}
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

      {/* landing page bg and profile */}
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full mt-20 h-64 sm:h-80 md:h-96"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
            src={job?.backgroundPhoto ? `${SERVERURL}/uploads/${job.backgroundPhoto}` : null}
            alt="Cover"
          />
          <div className="absolute -bottom-46 md:-bottom-76 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.img
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              src={job?.profilePhoto ? `${SERVERURL}/uploads/${job.profilePhoto}` : null}
              alt="Profile"
              className="w-32 h-32 sm:w-76 sm:h-76 rounded-full border-5 border-neutral-500 object-cover shadow-2xl"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white text-5xl font-semibold mt-2 text-center"
            >
              {job?.username}
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Profile Details Section */}
      <section className="mt-55 md:mt-85 pb-20 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {['about', 'skills', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize relative overflow-hidden ${activeTab === tab
                ? 'text-white'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-950"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 rounded-xl p-8 shadow-2xl min-h-[400px]" // Added min-height to prevent layout jump
        >
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-400 space-y-6"
              >
                <h2 className="text-5xl font-bold mb-4 text-neutral-200">About</h2> <hr className="mb-4 text-neutral-700" />
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                    <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                    <div className="bg-neutral-700/25 p-2 rounded-lg">
                      <p className="text-neutral-400 text-justify leading-relaxed">
                        {job?.summary}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <div className="bg-neutral-700/25 p-2 rounded-lg">
                      <ul className="space-y-3 text-neutral-300">
                        {job?.experience && job.experience.length > 0 ? (
                          job.experience.map((exp, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                              <div className="text-neutral-400">{exp}</div>
                            </motion.li>
                          ))
                        ) : (
                          <li className="text-neutral-500">No experience added</li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-6"
              >
                <h2 className="text-5xl font-bold mb-6 text-neutral-200">Technical Skills</h2>
                <div className="bg-neutral-700/30 rounded-lg p-6">
                  {Array.isArray(job.technicalSkills) && job.technicalSkills.length > 0 ? (
                    job.technicalSkills.map((group, i) => (
                      <motion.div
                        key={i}
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold mb-4 text-neutral-200">{group.category}</h3> <hr className="mb-4 text-neutral-700" />
                        <div className="flex flex-wrap gap-3">
                          {group.skills.map((skill, j) => (
                            <motion.span
                              key={j}
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(153, 27, 27, 0.4)" }}
                              className="bg-neutral-700/60 text-neutral-200 px-4 py-2 rounded-lg text-sm hover:bg-red-800/50 transition-colors duration-300 cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-neutral-500">No technical skills available</p>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-6"
              >
                <h2 className="text-5xl font-bold mb-6 text-neutral-200">Get In Touch</h2> <hr className="text-neutral-700" />
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                    <h3 className="text-3xl text-neutral-300 font-bold mb-4">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                          <Mailbox className="text-white text-sm font-bold" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-400">Email</p>
                          <p className="text-neutral-300">{job?.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                          <GiRotaryPhone className="text-white text-xl font-bold" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-400">Phone</p>
                          <p className="text-neutral-300">{job?.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                          <LocateIcon className="text-white font-bold" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-400">Location</p>
                          <p className="text-neutral-300">{job?.location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                    <h3 className="text-3xl text-neutral-300 font-bold mb-4">Social Links</h3>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                        <FaGithub className="text-xl group-hover:text-white transition-colors" />
                        <span>{job?.github}</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                        <FaLinkedin className="w-5 h-5 rounded group-hover:text-blue-400 transition-colors"></FaLinkedin>
                        <span>{job?.linkedin}</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                        <RiTwitterXFill className="w-5 h-5 rounded group-hover:text-white transition-colors" />
                        <span>{job?.twitter}</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                        <Earth className="w-5 h-5 rounded group-hover:text-green-400 transition-colors"></Earth>
                        <span>{job?.website}</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Works section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="pb-20 max-w-7xl mx-auto bg-neutral-900 p-7 rounded-2xl"
      >
        <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-6 text-white">Works</motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(job.works) && job.works.length > 0 ? (
            job.works.map((work, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-lg overflow-hidden bg-neutral-800 shadow-lg cursor-pointer"
              >
                <img
                  src={`${SERVERURL}/uploads/${work}`}
                  alt={`Work ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-neutral-500 text-center">No works to display</div>
          )}
        </div>
      </motion.section>

      {/* Hire Me Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="mt-10 left-170 w-70 relative flex items-center justify-center h-[70px]">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.98 }}
            className="group relative w-full h-full rounded-xl bg-neutral-900/30 border border-neutral-700/50 backdrop-blur-md overflow-hidden"
          >
            {/* Animated Sheen Effect */}
            <motion.div
              variants={{
                initial: { x: "-100%" },
                hover: { x: "100%" }
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            {/* Button Text & Icon */}
            <span className="relative z-10 flex items-center justify-center gap-3 text-neutral-200 font-light tracking-wider uppercase text-sm">
              Hire Now
              {/* Arrow that moves on hover */}
              <FaArrowRight className="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
            </span>

            {/* Subtle hover border glow */}
            <div className="absolute inset-0 rounded-xl border border-white/0 transition-colors duration-300 group-hover:border-white/20" />
          </motion.button>


        </div>
      </motion.div>

      <HireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={job}
      />
      <Footer />
    </div>
  )
}

export default Portfolio