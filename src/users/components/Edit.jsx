import React, { useState, useRef, useEffect, useContext } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import logo from '/logo22.jpg'
import { gsap } from "gsap";
import { ToastContainer, toast } from 'react-toastify'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { userUpdateContext } from '../../Context-APi/ContextShare'
import { updateUserProfileAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL';
import { TbMoodEdit } from "react-icons/tb";


function Edit() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('uploadedJobs')
    const [userDetails, setUserDetails] = useState({ username: "", password: "", cpassword: "", profileImage: "", bio: "", role: "",jobType:"" })
    const [token, setToken] = useState("")
    const [existingProfile, setExistingProfile] = useState("")
    const [preview, setPreview] = useState("")
    const { userEditResponse, setUserEditResponse } = useContext(userUpdateContext)


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userToken = sessionStorage.getItem("token")
            setToken(userToken)
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, role: user.role })
            setExistingProfile(user.profileImage)
        }
    }, [])

    const handlePictureUpload = (e) => {
        setUserDetails({ ...userDetails, profileImage: e.target.files[0] })
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleReset = () => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, role: user.role, jobType:user.jobType })
        setExistingProfile(user.profileImage)
        setPreview("")
        isModalOpen(false)
    }

    const handleUpdate = async () => {
        const { username, password, cpassword, profileImage, bio, role,jobType } = userDetails
        if (!username || !password || !cpassword || !bio ||!jobType) {
            toast.info("please fill the form completely")
        } else {
            if (password != cpassword) {
                toast.warning("incorrect password")
            } else {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                const reqBody = new FormData()
                if (preview) {
                    for (let key in userDetails) {
                        reqBody.append(key, userDetails[key])
                    }
                    const result = await updateUserProfileAPI(reqBody, reqHeader)
                    if (result.status == 200) {
                        sessionStorage.setItem("user", JSON.stringify(result.data))
                        handleReset()
                        setUserEditResponse(result.data)
                    } else {
                        toast.error("something went wrong")
                        console.log(result);
                    }
                } else {
                    const result = await updateUserProfileAPI({ username, password, profileImage: existingProfile, bio, role, jobType }, reqHeader)
                    if (result.status == 200) {
                        toast.success("updation complete")
                        sessionStorage.setItem("user", JSON.stringify(result.data))
                        handleReset()
                        isModalOpen(false)
                        setUserEditResponse(result.data)
                    } else {
                        toast.error("something went wrong")
                        console.log(result);
                    }
                }
            }
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


    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you could add form validation and submit logic
        setIsModalOpen(false)
    }

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
        <>

            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 text-3xl mb-10 ms-200 flex px-2 py-2 text-green-400 hover:bg-green-800/50 transition-colors rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Edit Profile"
            >
               <TbMoodEdit/>
            </button>
            {/* Edit Profile Modal */}
            {isModalOpen && (
                <div
                    ref={modalBackdropRef}
                    className="fixed inset-0 bg-black h-screen w-full flex items-center justify-center z-50"
                    onClick={handleModalClose}
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="edit-profile-title"
                >
                    <div
                        ref={modalContentRef}
                        className="bg-neutral-900 rounded-2xl p-8 w-full max-w-lg mx-4 relative shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 id="edit-profile-title" className="text-2xl font-extrabold text-white mb-6">
                            Edit Profile
                        </h3>
                        <div onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="profilePic">
                                    <input onChange={e => handlePictureUpload(e)} type="file" id='profilePic' style={{ display: "none" }} />

                                    {
                                        existingProfile == "" ?
                                            <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"} alt="profile" />
                                            : existingProfile.startsWith("https://lh3.googleusercontent.com/") ?
                                                <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : existingProfile} alt="profile" />
                                                :
                                                <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="profile" />

                                    }

                                    {/* <button className='bg-amber-300 z-54 ms-15 -mt-6 fixed text-white py-1 px-2 rounded'>
                    <FontAwesomeIcon icon={faPen} />
                  </button> */}
                                </label>
                                <label htmlFor="username" className="block text-sm font-medium mt-5 text-neutral-400 mb-1">
                                    Username
                                </label>
                                <input
                                    value={userDetails.username}
                                    onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                                    type="text"
                                    id="username"
                                    name="username"

                                    className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-400 mb-1">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={userDetails.password}
                                    onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="profileImage" className="block text-sm font-medium text-neutral-400 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="text"
                                    id="profileImage"
                                    name="profileImage"
                                    value={userDetails.cpassword}
                                    onChange={e => setUserDetails({ ...userDetails, cpassword: e.target.value })}
                                    className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-neutral-400 mb-1">
                                    Job Type
                                </label>
                                <input
                                    id="bio"
                                    name="bio"
                                    value={userDetails.jobType}
                                    onChange={e => setUserDetails({ ...userDetails, jobType: e.target.value })}
                                    rows="3"
                                    className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700 resize-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-neutral-400 mb-1">
                                    Bio
                                </label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={userDetails.bio}
                                    onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })}
                                    rows="3"
                                    className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700 resize-none"
                                />
                            </div>
                            
                            <div className="flex justify-end space-x-4 pt-4 border-t border-neutral-700">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="px-6 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleReset}
                                    type="submit"
                                    className="px-6 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={handleUpdate}
                                    type="submit"
                                    className="px-6 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
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
        </>
    )
}

export default Edit