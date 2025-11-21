import { motion } from "framer-motion";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { UserRound, Ratio, SquareChartGantt, House, Wrench } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";
import PageTransition from "../../users/components/PageTransition";

const ManagePortfolioRequests = () => {
  const portfolioRequests = [
    {
      id: 1,
      project: "Wedding Photoshoot",
      client: "Alicia & John",
      category: "Photography",
      date: "Oct 20, 2025",
      description: "Highlighting key moments of the wedding ceremony and reception."
    },
    {
      id: 2,
      project: "Product Branding",
      client: "Pixel Labs",
      category: "Graphic Design",
      date: "Oct 18, 2025",
      description: "Redesigned product packaging and promotional materials."
    },
    {
      id: 3,
      project: "Mobile App UI",
      client: "TechNova",
      category: "UI/UX",
      date: "Oct 15, 2025",
      description: "Designed onboarding and dashboard screens for the app."
    },
    {
      id: 4,
      project: "Fashion Editorial",
      client: "StyleMag",
      category: "Photography",
      date: "Oct 12, 2025",
      description: "Captured editorial shots for magazine publication with minimalistic styling."
    }
  ];

  const navigate = useNavigate();
  const items = [
    { icon: <House size={18} color='#A3A3A3' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color='#A3A3A3' />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <Ratio size={18} color="#A855F7" />, label: 'Portfolio', onClick: () => navigate('/admin-portfolio') },
    { icon: <SquareChartGantt size={18} color='#A3A3A3' />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color='#A3A3A3' />, label: 'Settings', onClick: () => navigate('/admin-settings') },
  ];

  return (
    <PageTransition>
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
          className="ms-3 mt-5 mb-8"
        >
          <h2 className="text-6xl font-extralight tracking-tight text-neutral-200 mb-2">
            Manage Portfolio Requests
          </h2>
      
          <hr className="mt-5 text-neutral-800" />
        </motion.div>
        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioRequests.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl p-5 border border-white/10 bg-white/2 backdrop-blur-sm"
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col mb-3">
                  <div className="text-sm text-white/60 font-medium">{item.client}</div>
                  <div className="text-lg text-white font-light">{item.project}</div>
                  <div className="text-xs text-white/50 mt-1">{item.category}</div>
                </div>
                {/* Description */}
                <p className="text-sm text-white/60 mb-4 line-clamp-3">{item.description}</p>
                {/* Action Buttons */}
                <div className="flex items-center justify-start gap-2">
                  <button className="px-3 py-1 rounded text-sm font-medium border border-neutral-800 text-emerald-400 hover:bg-emerald-500 hover:text-black transition">
                    Add
                  </button>
                  <button className="px-3 py-1 rounded text-sm font-medium border border-neutral-800 text-neutral-400 hover:bg-white/20 hover:text-white transition">
                    Edit
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
    </PageTransition>
  );
};

export default ManagePortfolioRequests;