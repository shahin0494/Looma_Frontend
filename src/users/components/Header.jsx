import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Ensure react-icons is installed
import { useNavigate, useLocation } from "react-router-dom";

/**
 * MASTERSWITCH COMPONENT
 * Usage: <Navbar variant="glass" items={...} />
 */
const Navbar = ({ variant = 'glass', items }) => {
  const navItems = items || [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Studio', href: '/studio' },
    { label: 'Contact', href: '/contact' },
  ];

  switch (variant) {
    case 'liquid': return <div className="text-white">Liquid Nav Placeholder</div>; // Add your other variants back here
    case 'glass': default: return <GlassNav items={navItems} />;
  }
};

// ============================================================================
// THE GLASS NAV (Responsive)
// Desktop: Horizontal Pill
// Mobile: Expandable Vertical Menu
// ============================================================================
const GlassNav = ({ items }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync active state with current URL
  useEffect(() => {
    const index = items.findIndex(item => item.href === location.pathname);
    if (index !== -1) setActive(index);
  }, [location.pathname, items]);

  // Helper to handle navigation logic
  const handleItemClick = (item, index) => {
    setActive(index);
    setIsMobileMenuOpen(false); // Close mobile menu on click

    if (item.onClick) {
      item.onClick();
    } else {
      navigate(item.href);
    }
  };

  return (
    <>
      {/* =======================
          DESKTOP VIEW (md:flex)
         ======================= */}
      <div className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex gap-1 p-1.5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full shadow-lg shadow-black/10">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(item, i)}
              className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full"
            >
              {active === i && (
                <motion.div
                  layoutId="glass-pill-desktop"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* =======================
          MOBILE VIEW (md:hidden)
         ======================= */}
      <div className="md:hidden fixed top-6 right-6 z-50 flex flex-col items-end">
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-black/20 border border-white/10 backdrop-blur-xl rounded-full text-white shadow-lg active:scale-95 transition-transform"
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10, originY: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-14 right-0 w-48 p-2 bg-neutral-900/80 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col gap-1"
            >
              {items.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item, i)}
                  className={`relative w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === i 
                      ? "text-white bg-white/10 border border-white/5" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {active === i && (
                    <motion.span
                       layoutId="mobile-indicator"
                       className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" 
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;