// src/users/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../../component/Footer'
import logo from '/logo22.jpg'
import { 
  FaChartLine, 
  FaBriefcase, 
  FaUser, 
  FaDollarSign,
  FaCalendarAlt,
  FaPlus,
  FaEye,
  FaEdit,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBell
} from 'react-icons/fa'
import Squares from '../../reactbits/Squares'

const Dashboard = () => {


const [token, setToken] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
    }
  }, [])


  const baseItems = [
    { label: 'Home', href: '/' },
    { label: 'Hire', href: '/Hire-me' },
    { label: 'Dashboard', href: '/Dashboard' },
    { label: 'Contact', href: '/Contact' },
  ];

  const items = token
    ? [...baseItems, { label: 'Profile', href: '/profile' }] // user logged in
    : [...baseItems, { label: 'Login', href: '/Login' }]; // user logged out


  const logout = () => {
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate("/")
  }

  
  // This would come from your authentication context
  const userType = 'freelancer' // Change to 'client' to see client dashboard
  
  // Mock data - replace with real data from your backend
  const freelancerData = {
    stats: {
      completedProjects: 12,
      totalEarnings: 15420,
      averageRating: 4.8,
      activeApplications: 3
    },
    recentApplications: [
      { id: 1, title: 'E-commerce Website', client: 'Tech Corp', status: 'Under Review', appliedDate: '2024-01-15' },
      { id: 2, title: 'Mobile App Design', client: 'StartupXYZ', status: 'Interview', appliedDate: '2024-01-14' },
      { id: 3, title: 'Brand Identity', client: 'Creative Agency', status: 'Rejected', appliedDate: '2024-01-13' }
    ],
    recentMessages: [
      { id: 1, sender: 'John Doe', message: 'Hi! I\'d like to discuss the project timeline...', time: '2 hours ago' },
      { id: 2, sender: 'Sarah Wilson', message: 'Great work on the logo design!', time: '1 day ago' }
    ]
  }

  const clientData = {
    stats: {
      postedJobs: 8,
      activeHires: 3,
      completedProjects: 15,
      totalSpent: 25800
    },
    activeJobs: [
      { id: 1, title: 'Website Development', freelancer: 'Alex Smith', status: 'In Progress', budget: 5000 },
      { id: 2, title: 'Logo Design', freelancer: 'Maria Garcia', status: 'Review', budget: 800 },
      { id: 3, title: 'Mobile App', freelancer: 'David Lee', status: 'Completed', budget: 3200 }
    ],
    recentMessages: [
      { id: 1, sender: 'Alex Smith', message: 'I\'ve completed the first milestone...', time: '1 hour ago' },
      { id: 2, sender: 'Maria Garcia', message: 'Here are the logo concepts...', time: '3 hours ago' }
    ]
  }

  const StatCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-${color}-500/20`}>
          <Icon className={`text-${color}-400 text-xl`} />
        </div>
        <span className="text-xs text-neutral-500 uppercase tracking-wide">This Month</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-neutral-400 text-sm">{title}</p>
      {subtitle && <p className="text-neutral-500 text-xs mt-1">{subtitle}</p>}
    </motion.div>
  )

  const QuickAction = ({ icon: Icon, title, description, href, color = "red" }) => (
    <Link to={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`p-4 rounded-lg border border-neutral-700/50 hover:border-${color}-500/50 bg-neutral-800/30 hover:bg-neutral-800/50 transition-all duration-200 group`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-${color}-500/20 group-hover:bg-${color}-500/30 transition-colors`}>
            <Icon className={`text-${color}-400 text-lg`} />
          </div>
          <div>
            <h4 className="text-white font-medium">{title}</h4>
            <p className="text-neutral-400 text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  )

  return (
    <div style={{height:"120vh"}} className=" bg-neutral-950">
      <Squares
        className="w-full min-h-screen absolute inset-0"
        speed={0.3}
        squareSize={60}
        direction="diagonal"
        borderColor="rgba(71, 10, 31, 0.03)"
        hoverFillColor="rgba(255, 255, 255, 0.01)"
      >
    <div className='bg-neutral-950'>
        <Header
          logoAlt="Company Logo"
          items={items}
          activeHref="/Dashboard"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#fb3c01"
          hoveredPillTextColor="#fb3c01"
          pillTextColor="#ffffff"
        />
        {token && (
          <button
            onClick={logout}
            className='px-4 py-1.5 z-50 mt-4 bg-black ms-385 text-orange-600 hover:bg-orange-600/20 border-orange-600 border-2 rounded-4xl font-bold transition-all duration-200'
          >
            LOGOUT
          </button>
        )}
      </div>

        <div className="relative z-10 pt-20 pb-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {userType === 'freelancer' ? 'Freelancer' : 'Client'} Dashboard
              </h1>
              <p className="text-neutral-400 text-lg">
                Welcome back! Here's what's happening with your {userType === 'freelancer' ? 'freelance work' : 'projects'}.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {userType === 'freelancer' ? (
                <>
                  <StatCard 
                    icon={FaBriefcase} 
                    title="Completed Projects" 
                    value={freelancerData.stats.completedProjects} 
                    color="green"
                  />
                  <StatCard 
                    icon={FaDollarSign} 
                    title="Total Earnings" 
                    value={`$${freelancerData.stats.totalEarnings.toLocaleString()}`}
                    color="emerald"
                  />
                  <StatCard 
                    icon={FaStar} 
                    title="Average Rating" 
                    value={freelancerData.stats.averageRating}
                    subtitle="Based on 12 reviews"
                    color="yellow"
                  />
                  <StatCard 
                    icon={FaClock} 
                    title="Active Applications" 
                    value={freelancerData.stats.activeApplications}
                    color="blue"
                  />
                </>
              ) : (
                <>
                  <StatCard 
                    icon={FaBriefcase} 
                    title="Posted Jobs" 
                    value={clientData.stats.postedJobs}
                    color="blue"
                  />
                  <StatCard 
                    icon={FaUser} 
                    title="Active Hires" 
                    value={clientData.stats.activeHires}
                    color="green"
                  />
                  <StatCard 
                    icon={FaCheckCircle} 
                    title="Completed Projects" 
                    value={clientData.stats.completedProjects}
                    color="emerald"
                  />
                  <StatCard 
                    icon={FaDollarSign} 
                    title="Total Spent" 
                    value={`$${clientData.stats.totalSpent.toLocaleString()}`}
                    color="red"
                  />
                </>
              )}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaPlus className="text-red-400" />
                    Quick Actions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userType === 'freelancer' ? (
                      <>
                        <QuickAction 
                          icon={FaEdit} 
                          title="Update Portfolio" 
                          description="Add new projects and skills"
                          href="/portfolio"
                          color="blue"
                        />
                        <QuickAction 
                          icon={FaBriefcase} 
                          title="Browse Jobs" 
                          description="Find new opportunities"
                          href="/hire-me"
                          color="green"
                        />
                        <QuickAction 
                          icon={FaUser} 
                          title="Edit Profile" 
                          description="Update your information"
                          href="/profile"
                          color="purple"
                        />
                        <QuickAction 
                          icon={FaCalendarAlt} 
                          title="Set Availability" 
                          description="Manage your schedule"
                          href="/profile"
                          color="orange"
                        />
                      </>
                    ) : (
                      <>
                        <QuickAction 
                          icon={FaPlus} 
                          title="Post New Job" 
                          description="Find the perfect freelancer"
                          href="/hire-me"
                          color="blue"
                        />
                        <QuickAction 
                          icon={FaUser} 
                          title="Browse Freelancers" 
                          description="Discover talented professionals"
                          href="/hire-me"
                          color="green"
                        />
                        <QuickAction 
                          icon={FaBriefcase} 
                          title="Manage Projects" 
                          description="Track ongoing work"
                          href="/dashboard"
                          color="purple"
                        />
                        <QuickAction 
                          icon={FaEdit} 
                          title="Edit Profile" 
                          description="Update company information"
                          href="/profile"
                          color="orange"
                        />
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaClock className="text-red-400" />
                    {userType === 'freelancer' ? 'Recent Applications' : 'Active Projects'}
                  </h2>
                  <div className="space-y-4">
                    {userType === 'freelancer' ? (
                      freelancerData.recentApplications.map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg border border-neutral-600/30">
                          <div>
                            <h4 className="text-white font-medium">{app.title}</h4>
                            <p className="text-neutral-400 text-sm">{app.client}</p>
                            <p className="text-neutral-500 text-xs">{app.appliedDate}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            app.status === 'Under Review' ? 'bg-blue-500/20 text-blue-300' :
                            app.status === 'Interview' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                      ))
                    ) : (
                      clientData.activeJobs.map((job) => (
                        <div key={job.id} className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg border border-neutral-600/30">
                          <div>
                            <h4 className="text-white font-medium">{job.title}</h4>
                            <p className="text-neutral-400 text-sm">{job.freelancer}</p>
                            <p className="text-neutral-500 text-xs">Budget: ${job.budget}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                            job.status === 'Review' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-green-500/20 text-green-300'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Messages */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50"
                >
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  {/* <FaMessage className="text-red-400" /> */}
                    Recent Messages
                  </h3>
                  <div className="space-y-3">
                    {(userType === 'freelancer' ? freelancerData.recentMessages : clientData.recentMessages).map((msg) => (
                      <div key={msg.id} className="p-3 bg-neutral-700/30 rounded-lg border border-neutral-600/30">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium text-sm">{msg.sender}</h4>
                          <span className="text-neutral-500 text-xs">{msg.time}</span>
                        </div>
                        <p className="text-neutral-400 text-sm">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                    View All Messages
                  </button>
                </motion.div>

                {/* Notifications */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50"
                >
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaBell className="text-red-400" />
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <FaCheckCircle className="text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium">Project Completed</p>
                        <p className="text-neutral-400 text-xs">Your logo design project is ready for review</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <FaExclamationTriangle className="text-yellow-400 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium">Payment Due</p>
                        <p className="text-neutral-400 text-xs">Invoice #1234 is due in 3 days</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Squares>
    </div>
  )
}

export default Dashboard