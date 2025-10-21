import { motion } from "framer-motion";
import Header from '../components/FreelanceDashboardHeader'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer';

const ClientAdmin = () => {
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
          activeHref="/admin-clients"
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
        <h2 className="text-6xl font-extralight tracking-tight text-neutral-400 mb-2">
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