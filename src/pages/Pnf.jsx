import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const [time, setTime] = useState(new Date());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const blinkTimer = setInterval(() => setBlink(prev => !prev), 500);
    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  const glitchVariants = {
    initial: { opacity: 1, x: 0 },
    glitch: {
      opacity: [1, 0.8, 1, 0.9, 1],
      x: [0, -2, 2, -1, 0],
      transition: { duration: 0.3, repeat: Infinity, repeatDelay: 3 }
    }
  };

  return (
    <div className="min-h-screen bg-lime-400 text-black overflow-hidden relative font-mono">
      {/* Top bar */}
      <div className="flex justify-between items-start p-4 md:p-6 text-xs md:text-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>— 01</div>
          <div className="mt-1">.NEW MERCAT</div>
          <div className="mt-4">
            <div>.01 › HORIZONTAL</div>
            <div>.02 › VERTICAL</div>
            <div>.03 › PIXEL</div>
            <div>.04 › BRICK LANE</div>
            <div>.05 › FULL</div>
            <div>.06 › INFLATED</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          <div>& DESIGNED BY SOMEBODY</div>
          <div>& 2025</div>
          <div className="mt-2">
            {[...Array(8)].map((_, i) => (
              <div key={i}>........</div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base mb-8"
        >
          ⟨.⟩ DOWNLOADING......           ❯❯❯❯❯❯❯❯❯
        </motion.div>

        {/* Main ERROR text */}
        <motion.div
          variants={glitchVariants}
          initial="initial"
          animate="glitch"
          className="text-center mb-8"
        >
          <div id='errr' className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            ERROR 404
          </div>
          <div className="text-xl md:text-3xl mt-4 tracking-wider">
            PAGE NOT FOUND
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-right mt-8"
        >
          <div>— — — — INSERT USER</div>
          <div className="ml-16">PASSWORD</div>
          <div className="mt-2">
            <Link to={"/login"}><span className="cursor-pointer hover:bg-black hover:text-lime-400 transition-colors px-2">⟨ LOGIN ⟩</span></Link>
            {' '}
            <Link to={"/register"}><span className="cursor-pointer hover:bg-black hover:text-lime-400 transition-colors px-2">⟨ REGISTER ⟩</span></Link>
          </div>
          <Link to={"/"}>
            <div className="cursor-pointer hover:bg-black hover:text-lime-400 transition-colors inline-block px-2 mt-1">⟨ HOME ⟩</div>
          </Link>
          <div className="mt-2">⟨⟩ END 404</div>
        </motion.div>

        {/* Number line */}
        <div className="flex gap-8 md:gap-16 text-xl md:text-3xl mt-12">
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
        </div>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <div className="flex justify-between items-end text-xs md:text-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div>PLEASE_ _ _ _ INSERT USER _ _ _AGAIN</div>
            <div className="ml-20">PASSWORD</div>
            <div className="mt-4">
              ._
            </div>
            <div className="mt-1">
              .— — — — — — — —
            </div>
            <div className="mt-8">//</div>
            <div>— END OF TEST PAGE</div>
            <div>NUMBER 01 AES</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-right"
          >
            {/* Barcode */}
            <div className="flex gap-px mb-4">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="w-1 h-12 bg-black" style={{
                  opacity: Math.random() > 0.3 ? 1 : 0
                }} />
              ))}
            </div>
            <div className="mb-2">⟨         ❯❯❯❯❯❯❯❯❯         .⟩</div>
            <div className="mb-8">._</div>
            <div>ERROR 50555</div>
          </motion.div>
        </div>

        {/* Bottom decorations */}
        <div className="mt-4 text-xs">
          <div className="flex justify-between">
            <div>= 01234</div>
            <div>5678</div>
            <div>12</div>
          </div>
        </div>
      </div>

      {/* Scattered elements */}
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/3 left-8 text-xs"
      >
        = 01234
      </motion.div>

      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/2 right-12 text-xs"
      >
        5678
      </motion.div>

      <div className="absolute top-1/4 right-1/4 text-xs">//</div>
      
      {/* Blinking cursor */}
      <span className="absolute bottom-24 left-16 text-xl">
        {blink ? '|' : ' '}
      </span>
    </div>
  );
}