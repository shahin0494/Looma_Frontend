// src/users/pages/Profile.jsx
import React, { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import logo from '/logo22.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('uploadedJobs')
  const [profileData, setProfileData] = useState({
    username: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: '',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'UI/UX Designer passionate about creating beautiful and functional digital experiences.',
  })

  // Sample data for skills (uploaded jobs)
  const uploadedJobs = [
    { id: 1, title: 'Branding Design', description: 'Developed a full branding package for a startup.' },
    { id: 2, title: 'Mobile App UI', description: 'Designed user-friendly mobile app interfaces.' },
    { id: 3, title: 'Website Redesign', description: 'Led the redesign of a corporate website.' },
  ]

  // Sample data for sold jobs (added as new sample)
  const soldJobs = [
    { id: 1, title: 'Social Media Campaign', status: 'Completed' },
    { id: 2, title: 'Product Packaging Design', status: 'Completed' },
  ]

  // Sample data for purchased jobs and status
  const purchasedJobs = [
    { id: 1, title: 'Logo Design', status: 'Completed' },
    { id: 2, title: 'E-commerce Platform', status: 'In Progress' },
  ]

  // Refs for GSAP animation
  const aboutSectionRef = useRef(null)
  const buttonSectionRef = useRef(null)
  const uploadedSectionRef = useRef(null)
  const soldSectionRef = useRef(null)
  const purchasedSectionRef = useRef(null)
  const modalBackdropRef = useRef(null)
  const modalContentRef = useRef(null)
  const pulseRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

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
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      <Header
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Hire', href: '/Hire-me' },
          { label: 'Dashboard', href: '/Dashboard' },
          { label: 'Contact', href: '/Contact' },
        ]}
        activeHref="/Dashboard"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#1A1A1A"
        pillColor="#2E2E2E"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#D3D3D3"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center space-y-12">
        {/* About Section */}
        <section
          ref={aboutSectionRef}
          className="bg-neutral-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center relative w-full max-w-md"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-neutral-800 shadow-md mx-auto">
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">{profileData.username}</h1>
          <p className="mt-2 text-red-500 font-semibold">UI/UX Designer</p>
          <p className="mt-4 text-neutral-400">{profileData.bio}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-6 py-2 bg-red-700 hover:bg-red-800 transition-colors rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Edit Profile"
          >
            Edit Profile
          </button>
        </section>

        {/* Buttons to toggle sections */}
        <div
          ref={buttonSectionRef}
          className="flex space-x-6 justify-center w-full max-w-4xl"
        >
          <button
            onClick={() => setActiveSection('uploadedJobs')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === 'uploadedJobs'
                ? 'bg-red-700 text-white shadow-md'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
            }`}
          >
            My Projects
          </button>
          <button
            onClick={() => setActiveSection('soldJobs')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === 'soldJobs'
                ? 'bg-red-700 text-white shadow-md'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
            }`}
          >
            Projects Status
          </button>
          <button
            onClick={() => setActiveSection('purchasedJobs')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === 'purchasedJobs'
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
              className="bg-neutral-900 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-neutral-700 pb-2">Uploaded Jobs</h2>
              <ul className="space-y-4">
                {uploadedJobs.map((job) => (
                  <li
                    key={job.id}
                    className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
                    title={job.description}
                  >
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    <p className="text-neutral-400 text-sm mt-1 line-clamp-2">{job.description}</p>
                  </li>
                ))}
              </ul>
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
              <ul className="space-y-4">
                {soldJobs.map((job) => (
                  <li
                    key={job.id}
                    className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    <span className="font-semibold text-white">{job.title}</span>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        job.status === 'Completed'
                          ? 'bg-green-600 text-green-100'
                          : job.status === 'In Progress'
                          ? 'bg-yellow-600 text-yellow-100'
                          : 'bg-gray-600 text-gray-100'
                      }`}
                    >
                      {job.status}
                    </span>
                  </li>
                ))}
              </ul>
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
                {purchasedJobs.map((job) => (
                  <li
                    key={job.id}
                    className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    <span className="font-semibold text-white">{job.title}</span>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        job.status === 'Completed'
                          ? 'bg-green-600 text-green-100'
                          : job.status === 'In Progress'
                          ? 'bg-yellow-600 text-yellow-100'
                          : 'bg-gray-600 text-gray-100'
                      }`}
                    >
                      {job.status}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-neutral-400 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <div>
                <label htmlFor="profileImage" className="block text-sm font-medium text-neutral-400 mb-1">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  id="profileImage"
                  name="profileImage"
                  value={profileData.profileImage}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-neutral-400 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
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
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile