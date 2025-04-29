'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Character animation
  const text = "Hi, I'm ";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      className="relative flex flex-col justify-center min-h-screen w-full bg-white overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,235,255,0.4),transparent)]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto px-4 py-24 max-w-7xl w-full">
        <div className="text-center max-w-3xl mx-auto overflow-hidden">
          {/* Animated Title - Character by Character */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 mb-6">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: text.length * 0.08 + 0.3,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-sky-700 to-cyan-700"
            >
              Hamza
            </motion.span>
          </h1>
          
          {/* Subtitle with curtain reveal */}
          <motion.p 
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
            className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto"
          >
            Full-stack Developer | UI/UX Enthusiast | Open Source Contributor
          </motion.p>
          
          {/* Buttons with staggered entrance */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.2
                }
              }
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['View Projects', 'Contact Me'].map((text, i) => (
              <motion.a
                key={text}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { 
                      type: "spring",
                      stiffness: 100,
                      damping: 12
                    }
                  }
                }}
                whileHover={{ 
                  y: -3,
                  transition: { type: "spring", bounce: 0.5 }
                }}
                whileTap={{ scale: 0.95 }}
                href={`#${text.includes('Projects') ? 'projects' : 'contact'}`}
                className={`rounded-lg px-6 py-3 font-medium ${
                  i === 0 
                    ? 'bg-cyan-700 text-white hover:bg-cyan-800' 
                    : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                } transition-all`}
              >
                {text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}