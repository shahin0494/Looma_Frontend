import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, RefreshCcw, AlertCircle, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Sub-component for the particle burst (Red/Orange theme)
const ErrorParticleBurst = () => {
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
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
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
      duration: 5, 
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

const PaymentFailed = () => {
  const [key, setKey] = useState(0);

  const handleRetry = () => {
    setKey(prev => prev + 1);
  };

  // Background elements for failure context
  const backgroundElements = useMemo(() => [
    { emoji: "⚠️", x: "10%", y: "20%", delay: 0 },
    { emoji: "🛑", x: "85%", y: "15%", delay: 1.5 },
    { emoji: "💸", x: "15%", y: "75%", delay: 2.5 },
    { emoji: "🔒", x: "80%", y: "80%", delay: 3.5 },
    { emoji: "🚫", x: "50%", y: "10%", delay: 4.5 },
  ], []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-sans text-zinc-100 overflow-hidden relative selection:bg-red-500/30">
      
        {/* Ambient Background Glows - Warning Red/Rose */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[20%] w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[20%] w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"
          />
        </div>
        {/* Floating Minimal Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElements.map((el, i) => (
            <FloatingEmoji key={i} {...el} />
          ))}
        </div>
        {/* Main Card Container with Shake Effect */}
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: [0, -5, 5, -5, 5, 0] // Shake animation
          }}
          transition={{
            duration: 0.6,
            x: { duration: 0.4, delay: 0.2 }, // Delay shake slightly
            ease: "easeOut"
          }}
          className="relative w-full max-w-md bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/60 rounded-[2rem] p-10 shadow-2xl shadow-black/80 flex flex-col items-center text-center z-10"
        >
      
          {/* Animated Error Icon Area */}
          <div className="relative mb-10 group cursor-pointer" onClick={handleRetry}>
            <ErrorParticleBurst />
      
            {/* Glowing backing for the icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"
            />
      
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-28 h-28 bg-zinc-900/80 rounded-full flex items-center justify-center border border-zinc-700/50 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]"
            >
               {/* Rotating ring - Warning Red */}
               <motion.div
                className="absolute inset-[4px] rounded-full border border-red-500/20 border-t-red-500/80"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
               {/* Counter-rotating ring */}
               <motion.div
                className="absolute inset-[-4px] rounded-full border border-zinc-700/30 border-b-zinc-600"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <svg className="w-14 h-14 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Draw X - Line 1 */}
                <motion.path
                  d="M18 6L6 18"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "circOut" }}
                />
                {/* Draw X - Line 2 */}
                <motion.path
                  d="M6 6l12 12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, ease: "circOut" }}
                />
              </svg>
            </motion.div>
          </div>
          {/* Text Content */}
          <div className="space-y-3 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-red-400 font-medium text-xs uppercase tracking-widest bg-red-500/10 py-1 px-3 rounded-full w-fit mx-auto border border-red-500/20"
            >
              <AlertCircle size={12} fill="currentColor" className="text-red-500" /> Failed
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400"
            >
              Payment Declined
            </motion.h1>
      
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-zinc-400 text-sm leading-relaxed max-w-[280px] mx-auto"
            >
              We couldn't process your payment. <br/> Please check your details or try a different card.
            </motion.p>
          </div>
          {/* Error Details Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-full bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 rounded-xl border border-red-500/20 p-0 overflow-hidden mb-8"
          >
            <div className="p-5">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-zinc-500">Error Code</span>
                <span className="text-red-200 font-mono text-xs bg-red-500/20 px-2 py-0.5 rounded">ERR_INV_CARD</span>
              </div>
              <div className="flex justify-between items-center text-xs mt-3">
                <span className="text-zinc-600">Bank Response</span>
                <div className="flex items-center gap-1 text-zinc-400">
                  Insufficient Funds
                </div>
              </div>
            </div>
      
            {/* Decorative striped bottom edge */}
            <div className="h-1.5 w-full bg-red-900/20 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.2)_25%,rgba(239,68,68,0.2)_50%,transparent_50%,transparent_75%,rgba(239,68,68,0.2)_75%,rgba(239,68,68,0.2)_100%)] bg-[length:10px_10px]" />
          </motion.div>
          {/* Action Buttons */}
          <div className="w-full space-y-3">
              <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="w-full py-4 rounded-2xl bg-white text-zinc-950 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
              onClick={handleRetry}
              >
              <span className="relative z-10 flex items-center gap-2">
                  <RefreshCcw className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  Try Again
              </span>
              </motion.button>
              <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="w-full py-3 rounded-xl text-zinc-400 text-xs hover:text-white hover:bg-zinc-800/50 transition-colors"
              >
                  Contact Support
              </motion.button>
          </div>
      
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest"
          >
              <ShieldAlert size={12} /> 256-bit Encryption
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default PaymentFailed;