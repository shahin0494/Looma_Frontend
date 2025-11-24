// src/users/pages/Profile.jsx
import React, { useState, useRef, useEffect, useContext } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import logo from '/logo22.jpg'
import { gsap } from "gsap";
import { ToastContainer, toast } from 'react-toastify'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { userUpdateContext } from '../../Context-APi/ContextShare'
import { getAllUserPurchasedJobsAPI, getAllUserUploadJobsAPI, removeUserUploadJobsAPI, updateUserProfileAPI } from '../../services/allAPI'
import Edit from '../components/Edit';
import SERVERURL from '../../services/serverURL';
import { MdDeleteOutline } from "react-icons/md";
import PageTransition from '../components/PageTransition';

gsap.registerPlugin(ScrollTrigger);


const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('uploadedJobs')
  const [token, setToken] = useState("")
  const [username, SetUserName] = useState("")
  const [bio, SetBio] = useState("")
  const [userDp, setUserDp] = useState("")
  const [jobType, setJobType] = useState("")
  const [userJobs, setUserJobs] = useState([])
  const [purchaseJobs, setPurchaseJobs] = useState([])
  const [deleteJobkStatus, setDeleteJobStatus] = useState(false)

  const { userEditResponse, setUserEditResponse } = useContext(userUpdateContext)

  console.log(purchaseJobs);

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




  // Base items (always visible)
  const baseItems = [
    { label: 'Home', href: '/', navigate: "/" },
    { label: 'Hire', href: '/Hire-me', navigate: "Hire-me" },
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





  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      const user = JSON.parse(sessionStorage.getItem("user"))
      SetUserName(user.username)
      setUserDp(user.profileImage)
      SetBio(user.bio)
      setJobType(user.jobType)
    }
  }, [userEditResponse, deleteJobkStatus])


  useEffect(() => {
    if (activeSection == "uploadedJobs" && uploadedSectionRef.current) {
      getAllUserJobs()
    } else if (activeSection === "purchasedJobs" && purchasedSectionRef.current) {
     getAllUserBoughtJobs();
    } else if (activeSection === "soldJobs" && soldSectionRef.current) {
      getAllUserBoughtJobs()
    }
  }, [token, userEditResponse,activeSection])


  const getAllUserUploadJobs = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserPurchasedJobsAPI(reqHeader)
      if (result.status == 200) {
        setPurchaseJobs(result.data)
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);

    }
  }

  const getAllUserJobs = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserUploadJobsAPI(reqHeader)
      if (result.status == 200) {
        setUserJobs(result.data)
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeJob = async (jobID) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await removeUserUploadJobsAPI(jobID, reqHeader)
      if (result.status == 200) {
        toast.success(result.data)
        setDeleteJobStatus(true)
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);

    }
  }

  const getAllUserBoughtJobs = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserPurchasedJobsAPI(reqHeader)
      if (result.status == 200) {
        setPurchaseJobs(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }



  // Refs for GSAP animation
  const aboutSectionRef = useRef(null)
  const buttonSectionRef = useRef(null)
  const uploadedSectionRef = useRef(null)
  const soldSectionRef = useRef(null)
  const purchasedSectionRef = useRef(null)
  const modalBackdropRef = useRef(null)
  const modalContentRef = useRef(null)
  const pulseRef = useRef(null)


  // Animate About Section and Buttons on mount
  useEffect(() => {
    // About section fade in and slide up
    if (aboutSectionRef.current) {
      gsap.fromTo(
        aboutSectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
    }
    // Buttons fade in and slide up after about
    if (buttonSectionRef.current) {
      gsap.fromTo(
        buttonSectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.4 }
      )
    }
  }, [])

  // Animate section transitions
  useEffect(() => {
    if (activeSection === "uploadedJobs" && uploadedSectionRef.current) {
      gsap.fromTo(
        uploadedSectionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      )
    }
    if (activeSection === "soldJobs" && soldSectionRef.current) {
      gsap.fromTo(
        soldSectionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      )
    }
    if (activeSection === "purchasedJobs" && purchasedSectionRef.current) {
      gsap.fromTo(
        purchasedSectionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      )
    }
  }, [activeSection])

  // Animate modal open/close
  useEffect(() => {
    if (isModalOpen) {
      if (modalBackdropRef.current) {
        gsap.fromTo(
          modalBackdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" }
        )
      }
      if (modalContentRef.current) {
        gsap.fromTo(
          modalContentRef.current,
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out", delay: 0.1 }
        )
      }
    }
  }, [isModalOpen])

  // Pulse animation for "add job" link
  useEffect(() => {
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        duration: 0.75,
        ease: "power1.inOut",
      })
    }
  }, [])

  // Modal close animation on unmount
  const handleModalClose = () => {
    if (modalBackdropRef.current && modalContentRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setIsModalOpen(false),
      })
      tl.to(modalContentRef.current, { opacity: 0, scale: 0.75, duration: 0.25, ease: "power2.in" })
      tl.to(modalBackdropRef.current, { opacity: 0, duration: 0.2, ease: "power2.in" }, "-=0.15")
    } else {
      setIsModalOpen(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-950 text-neutral-300">
        
<div className="bg-black mb-5">
            {/* Try: 'glass', 'liquid', 'architect', 'luminous', 'island' */}
            <Header variant="glass" items={items} />
          </div>
        <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center ">
          {/* About Section */}
          <section
            ref={aboutSectionRef}
            className="bg-neutral-900 rounded-2xl p-5 shadow-lg mt-10 flex flex-col items-start text-center relative w-full "
          >
            <div className="relative w-32 h-32 -ms-0  rounded-full overflow-hidden border-4 border-neutral-800 shadow-md mx-auto">
              <img
                src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${SERVERURL}/uploads/${userDp}`}
                alt="Profile"
                className="object-cover  w-full h-full"
              />
            </div>
            <h1 className="mt-2 text-5xl  font-extrabold text-white">{username}</h1>
            <h2 className="mt-2 text-2xl font-bold text-red-600">{jobType}</h2>
            <span className="mt-2 text-justify text-neutral-400">{bio}</span>
          </section>
          <Edit />
          {/* Buttons to toggle sections */}
          <div
            ref={buttonSectionRef}
            className="flex space-x-6 justify-center w-full mt-5 mb-5 max-w-4xl"
          >
            <button
              onClick={() => setActiveSection('uploadedJobs')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${activeSection === 'uploadedJobs'
                ? 'bg-red-700 text-white shadow-md'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
            >
              My Projects
            </button>
            <button
              onClick={() => setActiveSection('soldJobs')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${activeSection === 'soldJobs'
                ? 'bg-red-700 text-white shadow-md'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
            >
              Projects Status
            </button>
            <button
              onClick={() => setActiveSection('purchasedJobs')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${activeSection === 'purchasedJobs'
                ? 'bg-red-700 text-white shadow-md'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
            >
              Hired Services
            </button>
          </div>
          {/* Sections */}
          <div className="w-full max-w-4xl min-h-[200px]">
            {/* Uploaded Jobs Section */}
            {activeSection === 'uploadedJobs' && (
              <section
                ref={uploadedSectionRef}
                className="bg-neutral-900 rounded-2xl p-9 shadow-lg"
              >
                <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-neutral-700 pb-2">Uploaded Jobs</h2>
                <div className="space-y-4">
                  {
                    userJobs.length > 0 ?
                      userJobs.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700/40 transition-colors cursor-pointer"
                          title={item.summary}
                          hidden={item?.status == "pending" || item?.status == "sold"}
                        >
                          <h3 className="font-semibold text-2xl text-neutral-200">{item.jobTitle}</h3>
                          <p className="text-neutral-400 text-sm text-justify mt-1 line-clamp-2">{item.summary}</p>
                          <button onClick={() => removeJob(item?._id)} className='px-2 rounded-lg py-2 text-red-500 hover:bg-red-700/30 transition-all duration-200 ms-175  text-3xl'><MdDeleteOutline /></button>
                        </div>
                      )) :
                      <p>no jobs </p>
                  }
                </div>
                <div
                  ref={pulseRef}
                  className="mt-4 text-red-500 text-sm text-center"
                >
                  <Link to="/add-job" className="underline">
                    Want to add a new job? Click here to create one.
                  </Link>
                </div>
              </section>
            )}
            {/* Sold Jobs Section */}
            {activeSection === 'soldJobs' && (
              <section
                ref={soldSectionRef}
                className="bg-neutral-900 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-neutral-700 pb-2">Jobs I Sold</h2>
                <div className="space-y-4">
                  {
                    userJobs.length > 0 ?
                      userJobs.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                          <span className="font-semibold text-white">{item.jobTitle}</span>
                          {
                            item?.jobStatus == "pending" ?
                              <span className={`text-sm font-medium px-3 py-1 rounded-full bg-yellow-600 text-green-100`}>
                                Pending for Approval
                              </span> :
                              item?.jobStatus == "approved" ?
                                <span className={`text-sm font-medium px-3 py-1 rounded-full bg-green-600 text-green-100`}>
                                  Approved
                                </span> :
                                <span className={`text-sm font-medium px-3 py-1 rounded-full bg-red-600 text-green-100`}>
                                  Sold Out
                                </span>
                          }
                        </div>
                      ))
                      :
                      <p>no </p>
                  }
                </div>
              </section>
            )}
            {/* Purchased Jobs Section */}
            {activeSection === 'purchasedJobs' && (
              <section
                ref={purchasedSectionRef}
                className="bg-neutral-900 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-neutral-700 pb-2">Purchased Jobs & Status</h2>
                <ul className="space-y-4">
                  {
                    purchaseJobs.length > 0 ?
                      purchaseJobs.map((item, index) => (
                        <li
                          key={index}
                          className="p-5 bg-neutral-800 rounded-xl hover:bg-neutral-700/40 transition-all duration-300"
                        >
                          <div className="flex flex-col gap-1">
                            <h3 className="text-3xl font-bold text-white">{item?.username}</h3> <hr className='text-neutral-700 my-3' />
                            <h3 className="text-lg font-bold text-neutral-300">{item?.jobTitle}</h3>
                            
                            {item?.summary && (
                              <p className="text-neutral-400 text-sm text-justify leading-relaxed">
                                {item.specializations}
                              </p>
                            )}
                            
                            {item?.price && (
                              <p className="text-neutral-300 text-md">
                                <span className="font-semibold text-white">Amount Paid:</span> ₹{item.price}
                              </p>
                            )}
                            
                            {item?.freelancer && (
                              <p className="text-neutral-300 text-md">
                                <span className="font-semibold text-white">Freelancer:</span> {item.freelancer}
                              </p>
                            )}
                            
                            <div className="flex items-center justify-between mt-2">
                             
                            </div>
                          </div>
                        </li>
                      ))
                      :
                      <p>null</p>
                  }
                </ul>
              </section>
            )}
          </div>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        // transition={Slide}
        />
      </div>
    </PageTransition>
  )
}

export default Profile