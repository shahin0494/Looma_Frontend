import { motion } from "framer-motion";
import Header from '../components/FreelanceDashboardHeader'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer';

const ManageProjectRequests = () => {
  const projectRequests = [
    {
      id: 1,
      title: "Website Redesign",
      client: "Acme Co.",
      budget: "$1,200",
      date: "Oct 20, 2025",
      description: "Full redesign of client portfolio site with responsive sections and animations."
    },
    {
      id: 2,
      title: "Mobile App UI",
      client: "Pixel Labs",
      budget: "$900",
      date: "Oct 18, 2025",
      description: "Design screens for onboarding, dashboard and profile flows."
    },
    {
      id: 3,
      title: "E‑commerce Setup",
      client: "ShopEasy",
      budget: "$2,400",
      date: "Oct 15, 2025",
      description: "Set up storefront, product pages, and payment integration."
    },
    {
      id: 4,
      title: "Marketing Campaign Assets",
      client: "Brandly",
      budget: "$700",
      date: "Oct 12, 2025",
      description: "Create banners, social media posts, and video snippets for online marketing."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
        
        <Header
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Dashboard', href: '/admin-dashboard' },
            { label: 'Settings', href: '/admin-settings' },
            { label: 'Clients', href: '/admin-clients' },
            { label: 'Portfolio', href: '/admin-portfolio' },
            { label: 'Project', href: '/admin-projects' },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#171717"
          pillColor="#262626"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#f5f5f5"/>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="ms-3 mt-10 mb-8"
      >
        <h2 className="text-5xl font-extralight tracking-tight text-neutral-400 mb-2">
          Manage Project Requests
        </h2>
        <hr className="mt-5 text-neutral-800" />
       
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectRequests.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-white/2 backdrop-blur-md"
          >
            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-sm text-white/70 font-medium">{project.client}</div>
                  <div className="text-lg text-white font-light">{project.title}</div>
                </div>
                <div className="text-xs text-white/50 text-right">
                  <div>{project.date}</div>
                  <div className="mt-2 text-white/60">{project.budget}</div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-white/60 mb-4 line-clamp-3">{project.description}</p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded text-sm font-medium hover:bg-emerald-500 hover:text-black text-emerald-400 border border-neutral-800 hover:brightness-105 transition">
                    Accept
                  </button>
                  <button className="px-4 py-2 rounded text-sm font-medium border-neutral-800 border hover:text-white text-neutral-500 hover:bg-white/20 transition">
                    Update
                  </button>
                </div>
                <button className="px-4 py-2 rounded text-sm font-medium border border-neutral-800 text-red-500 hover:bg-red-700 hover:text-white hover:brightness-95 transition">
                  Reject
                </button>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ManageProjectRequests;