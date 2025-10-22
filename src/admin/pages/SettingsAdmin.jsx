import { motion } from "framer-motion";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { UserRound, Ratio, SquareChartGantt, House, Wrench } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";

const SettingsAdmin = () => {
  const settingsSections = [
    {
      id: 1,
      title: "Profile",
      description: "Update your admin profile information such as name, email, and password.",
    },
    {
      id: 2,
      title: "Preferences",
      description: "Manage dashboard preferences, notifications, and display settings.",
    }
  ];

  const navigate = useNavigate();
  const items = [
    { icon: <House size={18}  color='#A3A3A3'  />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18}  color='#A3A3A3'  />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <Ratio size={18}  color='#A3A3A3'  />, label: 'Portfolio', onClick: () => navigate('/admin-portfolio') },
    { icon: <SquareChartGantt size={18}  color='#A3A3A3'  />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color="#991B1B" />, label: 'Settings', onClick: () => navigate('/admin-settings') },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 ">
       <Dock 
           items={items}
           panelHeight={68}
           baseItemSize={50}
           magnification={70}
         />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className=" ms-3 mt-5 mb-8"
      >
        <h2 className="text-6xl font-extralight  tracking-tight text-neutral-200 mb-2">
          Admin Settings
        </h2>
        <hr className="mt-5 text-neutral-800" />
      </motion.div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 * i }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl p-6 border border-white/10 bg-white/2 backdrop-blur-sm"
          >
            <div className="relative z-10">
              <h3 className="text-xl text-white font-light mb-2">{section.title}</h3>
              <p className="text-sm text-white/60 mb-4">{section.description}</p>

              <button className="px-4 py-2 rounded-xl text-sm font-medium border border-neutral-800 text-emerald-400 hover:bg-emerald-500 hover:text-black transition">
                Edit
              </button>
            </div>

            {/* Minimal Glow */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default SettingsAdmin;