// src/users/pages/Profile.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../../component/Footer'
import logo from '/logo22.jpg'
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaPlus,
  FaTrash,
  FaUpload,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaCalendarAlt,
  FaCamera,
  FaImage
} from 'react-icons/fa'

const Profile = () => {
  const [userType] = useState('freelancer') // This would come from auth context
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('personal')

  // Form states
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate web developer with 5+ years of experience in React, Node.js, and modern web technologies. I love creating beautiful, functional applications that solve real-world problems.',
    location: 'New York, NY',
    phone: '+1 (555) 123-4567',
    title: 'Full Stack Developer',
    experience: '5+ years',
    hourlyRate: '$75/hour'
  })

  const [skills, setSkills] = useState(['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'])
  const [newSkill, setNewSkill] = useState('')

  const [socialLinks, setSocialLinks] = useState({
    website: 'https://johndoe.dev',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe'
  })

  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: 'E-commerce Platform', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400', description: 'Full-stack e-commerce solution' },
    { id: 2, title: 'Task Management App', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400', description: 'Collaborative task management tool' },
    { id: 3, title: 'Portfolio Website', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400', description: 'Modern portfolio website design' }
  ])

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    // Here you would handle the actual file upload
    console.log('Uploading files:', files)
  }

  const handleSave = () => {
    // Here you would save all the form data to your backend
    console.log('Saving profile data...')
    setIsEditing(false)
  }

  const TabButton = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab
          ? 'bg-red-800/20 text-red-300 border border-red-700/50'
          : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 border border-neutral-600/30'
        }`}
    >
      <Icon className="text-sm" />
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-neutral-950">

      <Header
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
            { label: 'Hire', href: '/Hire-me' },
            { label: 'Dashboard', href: '/Dashboard' },
            { label: 'Contact', href: '/Contact' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#1A1A1A"
        pillColor="#2E2E2E "
        hoveredPillTextColor="#ffffff"
        pillTextColor="#D3D3D3"
      />

      <div className="relative z-10 pt-20">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-64 md:h-80 bg-gradient-to-r from-neutral-800 via-red-900/50 to-neutral-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-neutral-800/60"></div>

            {/* Edit Cover Button */}
            <div className="absolute top-4 right-4">
              <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-neutral-600/50 flex items-center gap-2">
                <FaCamera className="text-sm" />
                Edit Cover
              </button>
            </div>

            {/* Profile Picture */}
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-neutral-950 bg-neutral-700 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-red-800 hover:bg-red-700 text-white p-2 rounded-full border-2 border-neutral-950">
                  <FaCamera className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{personalInfo.name}</h1>
                  <p className="text-xl text-neutral-300 mb-2">{personalInfo.title}</p>
                  <div className="flex items-center gap-4 text-neutral-400">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-sm" />
                      {personalInfo.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaDollarSign className="text-sm" />
                      {personalInfo.hourlyRate}
                    </span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${isEditing
                        ? 'bg-red-800 hover:bg-red-700 text-white'
                        : 'bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-300 border border-neutral-600/50'
                      }`}
                  >
                    {isEditing ? <FaSave /> : <FaEdit />}
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                <TabButton tab="personal" icon={FaUser} label="Personal" />
                <TabButton tab="skills" icon={FaBriefcase} label="Skills" />
                <TabButton tab="portfolio" icon={FaImage} label="Portfolio" />
                <TabButton tab="social" icon={FaGlobe} label="Social Links" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Personal Information Tab */}
            {activeTab === 'personal' && (
              <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Job Title</label>
                    <input
                      type="text"
                      value={personalInfo.title}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Location</label>
                    <input
                      type="text"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Experience</label>
                    <input
                      type="text"
                      value={personalInfo.experience}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, experience: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm mb-2">Hourly Rate</label>
                    <input
                      type="text"
                      value={personalInfo.hourlyRate}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, hourlyRate: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-neutral-300 text-sm mb-2">Bio</label>
                  <textarea
                    rows={4}
                    value={personalInfo.bio}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, bio: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Skills</h3>

                {/* Add New Skill */}
                {isEditing && (
                  <div className="flex gap-2 mb-6">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      className="flex-1 px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                      placeholder="Add a skill..."
                    />
                    <button
                      onClick={addSkill}
                      className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                    >
                      <FaPlus />
                      Add
                    </button>
                  </div>
                )}

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white group"
                    >
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="text-red-400 hover:text-red-300 transition-colors ml-1"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Portfolio</h3>

                {/* Upload Area */}
                {isEditing && (
                  <div className="border-2 border-dashed border-neutral-600/50 rounded-lg p-8 text-center mb-6 hover:border-neutral-500/50 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="portfolio-upload"
                    />
                    <label
                      htmlFor="portfolio-upload"
                      className="cursor-pointer"
                    >
                      <div className="text-neutral-400 mb-4">
                        <FaUpload className="w-12 h-12 mx-auto" />
                      </div>
                      <p className="text-neutral-300 mb-2">Click to upload portfolio images</p>
                      <p className="text-neutral-500 text-sm">PNG, JPG up to 10MB each</p>
                    </label>
                  </div>
                )}

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="group">
                      <div className="aspect-video bg-neutral-700/50 rounded-lg border border-neutral-600/50 overflow-hidden mb-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-neutral-400 text-sm">{item.description}</p>
                      {isEditing && (
                        <button className="mt-2 text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                          <FaTrash className="text-xs" />
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links Tab */}
            {activeTab === 'social' && (
              <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Social Links</h3>

                <div className="space-y-6">
                  <div>
                    <label className=" text-neutral-300 text-sm mb-2 flex items-center gap-2">
                      <FaGlobe className="text-blue-400" />
                      Website
                    </label>
                    <input
                      type="url"
                      value={socialLinks.website}
                      onChange={(e) => setSocialLinks({ ...socialLinks, website: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <label className=" text-neutral-300 text-sm mb-2 flex items-center gap-2">
                      <FaGithub className="text-neutral-400" />
                      GitHub
                    </label>
                    <input
                      type="url"
                      value={socialLinks.github}
                      onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                      placeholder="https://github.com/username"
                    />
                  </div>

                  <div>
                    <label className=" text-neutral-300 text-sm mb-2 flex items-center gap-2">
                      <FaLinkedin className="text-blue-500" />
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={socialLinks.linkedin}
                      onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <div>
                    <label className=" text-neutral-300 text-sm mb-2 flex items-center gap-2">
                      <FaTwitter className="text-blue-400" />
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={socialLinks.twitter}
                      onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-white disabled:bg-neutral-800/30 disabled:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200"
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 justify-end mt-8"
            >
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-neutral-700/50 hover:bg-neutral-700/70 text-white rounded-lg border border-neutral-600/50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <FaSave />
                Save Changes
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Profile