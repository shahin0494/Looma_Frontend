import { motion } from "framer-motion";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import {UserRound, Ratio, SquareChartGantt, House, Wrench } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";


const ClientAdmin = () => {
  const navigate = useNavigate();
  const items = [
    { icon: <House size={18} color='#A3A3A3' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color="#0EA5E9" />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <Ratio size={18}  color='#A3A3A3'/>, label: 'Portfolio', onClick: () => navigate('/admin-portfolio') },
    { icon: <SquareChartGantt size={18} color='#A3A3A3' />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color='#A3A3A3' />, label: 'Settings', onClick: () => navigate('/admin-settings') },
  ];

  const clients = [
    {
      id: 1,
      name: "Alicia Johnson",
      email: "alicia@example.com",
      joined: "Jan 12, 2025",
      status: "Active"
    },
    {
      id: 2,
      name: "Michael Smith",
      email: "michael@example.com",
      joined: "Feb 8, 2025",
      status: "Inactive"
    },
    {
      id: 3,
      name: "Sophia Lee",
      email: "sophia@example.com",
      joined: "Mar 15, 2025",
      status: "Active"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      joined: "Apr 2, 2025",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8">
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
        className="ms-3 mt-5 mb-8"
      >
        <h2 className="text-6xl font-extralight tracking-tight text-neutral-200 mb-2">
          Manage Clients
        </h2>
        <hr className="mt-5 text-neutral-800" />
       
      </motion.div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl p-5 border border-white/10  hover:bg-gradient-to-br from-700/10 to-emerald-300/5  backdrop-blur-sm"
          >
            <div className="relative z-10">
              {/* Client Info */}
              <div className="flex flex-col mb-3">
                <div className="text-lg text-white font-light">{client.name}</div>
                <div className="text-sm text-white/60">{client.email}</div>
                <div className="text-xs text-white/50 mt-1">Joined: {client.joined}</div>
                <div className={`text-xs mt-1 font-medium ${
                  client.status === "Active" ? "text-emerald-400" :
                  client.status === "Inactive" ? "text-rose-500" :
                  "text-yellow-400"
                }`}>
                  {client.status}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-start gap-2 mt-4">
                <button className="px-3 py-1 rounded text-sm font-medium border border-neutral-800 text-emerald-400 hover:bg-emerald-500 hover:text-black transition">
                  Edit
                </button>
                <button className="px-3 py-1 rounded text-sm font-medium border border-neutral-800 text-rose-500 hover:bg-rose-600 hover:text-white transition">
                  Deactivate
                </button>
              </div>
            </div>

            {/* Minimal Glow */}
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ClientAdmin;