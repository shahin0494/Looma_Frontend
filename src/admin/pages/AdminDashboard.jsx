import { motion } from 'framer-motion';
import Dock from '../components/FreelanceDashboardHeader'
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Activity, Briefcase, Smile, Star, ClipboardClock, Telescope, Baby, UserRound, Ratio, SquareChartGantt, House, Wrench, Power } from 'lucide-react';
import PageTransition from '../../users/components/PageTransition';
import { useState, useEffect } from 'react';


const StatCard = ({ title, value, icon, trend, delay = 0, gradient }) => {

  return (

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
      className={`  rounded-2xl hover:bg-gradient-to-br ${gradient} p-6 border border-white/10 hover:border-white/15 transition-all duration-500 backdrop-blur-md`}
    >



      <div className="relative z-10 ">
        <div className="flex items-center justify-between  mb-3">
          <div className="text-white/70 text-sm font-light tracking-wide">{title}</div>
          <div className="text-white/80">{icon}</div>
        </div>
        <div className="text-4xl font-light text-white mb-1">{value}</div>
        {trend && (
          <div className="text-white/50  text-xs font-light mt-1">{trend}</div>
        )}
      </div>
      <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/5 rounded-full blur-2xl" />
    </motion.div>
  );
};

function Dashboard() {

  const [token, setToken] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
    }
  }, [token])

  const logout = () => {
    sessionStorage.clear()
    setToken("")
    navigate("/")
  }

  const navigate = useNavigate();

  const items = [
    { icon: <House size={18} color='#BEF264' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color='#A3A3A3' />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <SquareChartGantt size={18} color='#A3A3A3' />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color='#A3A3A3' />, label: 'Settings', onClick: () => navigate('/admin-settings') },
    { icon: <Power size={18} color='red' />, label: 'Logout', onClick: logout },
  ];


  const stats = [
    {
      title: 'Completed Projects',
      value: 12,
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      trend: 'This month',
      gradient: 'from--600/10 to-green-800/15'
    },
    {
      title: 'Total Earnings',
      value: '$15,420',
      icon: <DollarSign className="w-5 h-5 text-amber-500" />,
      trend: 'This month',
      gradient: 'from--500/10 to-yellow-600/10'
    },
    {
      title: 'Average Rating',
      value: 4.8,
      icon: <Star className="w-5 h-5 text-purple-500" />,
      trend: 'Based on 12 reviews',
      gradient: 'from--500/10 to-violet-700/15'
    },
    {
      title: 'Active Applications',
      value: 3,
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      trend: 'This month',
      gradient: 'from--500/10 to-indigo-700/15'
    },
    {
      title: 'Pending Requests',
      value: 3,
      icon: <ClipboardClock className="w-5 h-5 text-red-700" />,
      trend: 'This month',
      gradient: 'from-500/10 to-red-700/10'
    },
    {
      title: 'Visits',
      value: "396",
      icon: <Telescope className="w-5 h-5 text-teal-700" />,
      trend: 'This month',
      gradient: 'from-gold-500/10 to-teal-700/10'
    },
    {
      title: 'Client Satisfaction',
      value: "76%",
      icon: <Smile className="w-5 h-5 text-amber-700" />,
      trend: 'This month',
      gradient: 'from-gold-500/10 to-amber-700/10'
    }
    ,
    {
      title: 'Completed Members',
      value: "76%",
      icon: <Baby className="w-5 h-5 text-lime-500" />,
      trend: 'This month',
      gradient: 'from-gold-500/10 to-lime-700/20'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white px-8">
        <div className=''>
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="mb-5 mt-3 "
        >
          <h1 className="text-6xl ms-2  font-extralight text-neutral-200 py-3 px-2 tracking-tight ">Admin Dashboard</h1>
          <hr className="mt-5 text-neutral-800" />
          {/* <p className="text-white/50 text-sm font-light">Welcome back! Here's what’s happening with your freelance work.</p> */}
        </motion.div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} {...stat} delay={0.4 * index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Quick Actions
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h2 className="text-lg font-light mb-4 text-white/90">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-xl py-3 text-sm text-white/80 font-light">Update Portfolio</button>
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-xl py-3 text-sm text-white/80 font-light">Browse Jobs</button>
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-xl py-3 text-sm text-white/80 font-light">Edit Profile</button>
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-xl py-3 text-sm text-white/80 font-light">Set Availability</button>
            </div>
          </div> */}
          {/* Notifications
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h2 className="text-lg font-light mb-4 text-white/90">Notifications</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/10 hover:bg-white/15 transition-all rounded-xl p-3">
                <p className="text-sm text-white/80">Project Completed</p>
                <span className="text-xs text-emerald-400">2h ago</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 hover:bg-white/15 transition-all rounded-xl p-3">
                <p className="text-sm text-white/80">Payment Due</p>
                <span className="text-xs text-amber-400">3 days left</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 hover:bg-white/15 transition-all rounded-xl p-3">
                <p className="text-sm text-white/80">New Message from Client</p>
                <span className="text-xs text-blue-400">Just now</span>
              </div>
            </div>
          </div> */}
        </motion.div>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default Dashboard;