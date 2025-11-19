import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Receipt, ShoppingBag, Star, Zap } from 'lucide-react';
import {Link} from "react-router-dom"

// Sub-component for the particle burst around the checkmark
const ParticleBurst = () => {
  const particles = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {particles.map((_, i) => {
        const angle = (i / 12) * 360;
        const radius = 60;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.cos((angle * Math.PI) / 180) * radius,
              y: Math.sin((angle * Math.PI) / 180) * radius,
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
        );
      })}
    </div>
  );
};

// Sub-component for floating background emojis
const FloatingEmoji = ({ emoji, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x }}
    animate={{
      opacity: [0, 0.3, 0],
      y: [20, -40],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 5
    }}
    className="absolute text-2xl pointer-events-none filter grayscale opacity-20 select-none"
    style={{ left: x, top: y }}
  >
    {emoji}
  </motion.div>
);

const PaymentSuccess = () => {
  const [key, setKey] = useState(0);

  // Generate random positions for background elements
  const backgroundElements = useMemo(() => [
    { emoji: "✨", x: "15%", y: "20%", delay: 0 },
    { emoji: "🎉", x: "80%", y: "15%", delay: 1.5 },
    { emoji: "💳", x: "10%", y: "70%", delay: 2.5 },
    { emoji: "🛍️", x: "85%", y: "80%", delay: 3.5 },
    { emoji: "💎", x: "50%", y: "10%", delay: 4.5 },
  ], []);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-sans text-zinc-100 overflow-hidden relative selection:bg-emerald-500/30">

      {/* Ambient Background Glows - Pulse Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[20%] w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating Minimal Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements.map((el, i) => (
          <FloatingEmoji key={i} {...el} />
        ))}
      </div>

      {/* Main Card Container */}
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.90, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 1
        }}
        className="relative w-full max-w-md bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/60 rounded-[2rem] p-10 shadow-2xl shadow-black/80 flex flex-col items-center text-center z-10"
      >

        {/* Animated Success Icon Area */}
        <div className="relative mb-10 group cursor-pointer" >
          <ParticleBurst />

          {/* Glowing backing for the icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute inset-0 bg-green-500/30 blur-2xl rounded-full"
          />

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-28 h-28 bg-zinc-900/80 rounded-full flex items-center justify-center border border-zinc-700/50 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-full border border-green-500/20 border-t-green-400/40"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-[4px] rounded-full border border-zinc-700/30 border-b-zinc-500"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <svg className="w-14 h-14 text-green-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                d="M20 6L9 17l-5-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "circOut" }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Text Content with Staggered Entry */}
        <div className="space-y-3 mb-10">
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-emerald-400 font-medium text-xs uppercase tracking-widest bg-emerald-500/10 py-1 px-3 rounded-full w-fit mx-auto border border-emerald-500/20"
          >
            <Zap size={12} fill="currentColor" /> Success
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400"
          >
            Payment Received!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-zinc-400 text-sm leading-relaxed max-w-[285px] mx-auto"
          >
            Your request has been processed. <br /> The freelancer will get in touch with you soon.
          </motion.p>
        </div>

        {/* Minimalist Receipt Card */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="w-full bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 rounded-xl border border-zinc-800/60 p-0 overflow-hidden mb-8"
        >
          <div className="p-5">
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-zinc-500">Amount</span>
              <span className="text-white font-semibold text-lg tracking-tight">$124.50</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-600">Via Apple Pay</span>
              <div className="flex items-center gap-1 text-emerald-500/80">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Confirmed
              </div>
            </div>
          </div> */}

          {/* Decorative bottom edge */}
          {/* <div className="h-1.5 w-full bg-zinc-950/50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTAgTDUgMCBMMTAgMTAgWiIgZmlsbD0iIzE4MTgxYiIgLz48L3N2Zz4=')] opacity-50" />
        </motion.div> */}

        {/* Action Button */}
        <motion.button
         
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="w-full py-4 rounded-2xl bg-neutral-100 text-zinc-950 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
        >
          <Link to={"/hire-me"}>
            <span className="relative z-10 flex items-center gap-2">
              Continue
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest"
        >
          Secure Transaction
        </motion.div>

      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;