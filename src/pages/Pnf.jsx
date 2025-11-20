import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, ArrowLeft, Rocket, Stars, Zap } from 'lucide-react';

const NotFound = () => {
  const containerRef = useRef(null);

  // 1. Mouse Position Tracking for Parallax & Cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, springy mouse movement for elements to follow
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ clientX, clientY }) {
    // Guard clause if ref isn't ready
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Calculate normalized mouse position from -0.5 to 0.5 for parallax
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  }

  // Parallax transform functions for different layers
  const backgroundX = useTransform(mouseX, [-0.5, 0.5], ["5%", "-5%"]);
  const backgroundY = useTransform(mouseY, [-0.5, 0.5], ["5%", "-5%"]);
  const foregroundX = useTransform(mouseX, [-0.5, 0.5], ["-10%", "10%"]);
  const foregroundY = useTransform(mouseY, [-0.5, 0.5], ["-10%", "10%"]);

  // Custom Cursor Position
  const cursorX = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);


  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center p-6 cursor-none selection:bg-fuchsia-500/50 selection:text-white"
    >
      {/* --- CUSTOM CURSOR --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <Rocket className="text-white w-8 h-8 rotate-45" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-[2px]"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>

      {/* --- MAXIMALIST BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: Deep Space Gradient */}
        <motion.div
          className="absolute inset-[-20%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black opacity-80"
          style={{ x: backgroundX, y: backgroundY, scale: 1.2 }}
        />

        {/* Layer 2: Colorful Nebulae */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-60 filter blur-[100px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] bg-yellow-500/10 rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Layer 3: Stars and Glitches */}
        <motion.div style={{ x: foregroundX, y: foregroundY }} className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              {i % 2 === 0 ? <Stars size={Math.random() * 20 + 10} /> : <Zap size={Math.random() * 20 + 10}  />}
            </motion.div>
          ))}
        </motion.div>
      </div>


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* --- INTERACTIVE DRAGGABLE 404 --- */}
        <motion.div
          className="flex items-center justify-center font-black text-[12rem] leading-none tracking-tighter select-none"
          style={{ x: foregroundX, y: foregroundY }}
        >
          {['4', '0', '4'].map((digit, index) => (
            <motion.h1
              key={index}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              whileHover={{
                scale: 1.1,
                rotate: Math.random() * 10 - 5,
                color: ["#ffffff", "#fb3c01", "red", "green"][index],
                textShadow: "0 0 20px currentColor"
              }}
              whileTap={{ scale: 0.9 }}
              className="cursor-grab active:cursor-grabbing relative bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              style={{
                // Give each digit a slightly different parallax intensity
                x: useTransform(mouseX, [-0.5, 0.5], [`${(index - 1) * -20}%`, `${(index - 1) * 20}%`]),
                y: useTransform(mouseY, [-0.5, 0.5], [`${(index - 1) * -10}%`, `${(index - 1) * 10}%`]),
              }}
            >
              {digit}
              {/* Glitch Layer */}
              <motion.span
                className="absolute inset-0 text-red-500 mix-blend-screen opacity-0"
                whileHover={{ opacity: 1, x: -5, y: 2 }}
              >
                {digit}
              </motion.span>
              <motion.span
                className="absolute inset-0 text-teal-500 mix-blend-screen opacity-0"
                whileHover={{ opacity: 1, x: 5, y: -2 }}
              >
                {digit}
              </motion.span>
            </motion.h1>
          ))}
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-4 space-y-4 max-w-lg"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Houston, we have a <span className="text-red-400">problem</span>.
          </h2>
          <p className="text-lg text-indigo-200 font-medium">
            The page you're looking for has been sucked into a black hole or abducted by aliens.
          </p>
        </motion.div>

        {/* --- FUN BUBBLY BUTTONS --- */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {/* Go Back Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: -3, backgroundColor: "red",  }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            className="group relative px-8 py-4 text-red-500 hover:text-white font-bold rounded-full  border-4 border-red-400/50 overflow-hidden"
            onClick={() => window.history.back()}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              Warp Back
            </span>
            {/* Button Glare effect */}
            {/* <div className="absolute inset-0 translate-y-1/2 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-md" /> */}
          </motion.button>

          {/* Home Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 3, backgroundColor: "#22d3ee", boxShadow: "0 0 30px #22d3ee" }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            className="group relative px-8 py-4 text-emerald-500 hover:text-black text- font-bold rounded-full  border-4 border-emerald-400/50 overflow-hidden"
            onClick={() => window.location.href = '/'}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-6 h-6" />
              Return to Base
            </span>
            {/* Button Glare effect */}
            {/* <div className="absolute inset-0 translate-y-1/2 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-md" /> */}
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;