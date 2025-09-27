"use client"

import { IconCode, IconDownload, IconArrowRight } from '@tabler/icons-react'
import { FlipWords } from './ui/flip-words'
import { motion } from 'motion/react'
import Link from 'next/link'

const words = ["Frontend", "Backend", "Mobile", "Full Stack"]

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Side Mask Effects */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>

      {/* Top and Bottom Mask Effects */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/60 dark:to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/70 dark:to-transparent z-10"></div>

      {/* Animated Accent Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-400/30 rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-blue-500/15 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">

          {/* Professional Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-lg px-4 py-2 mt-10 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for opportunities
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 dark:text-white">
              Sandeep Singh Nayal
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light">
              <FlipWords words={words} className="text-blue-600 dark:text-blue-400 font-medium" /> Developer
            </div>
          </motion.div>

          {/* Professional Description */}
          <motion.div
            className="max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Building scalable web applications with modern technologies. Experienced in the MERN stack, Next.js, and delivering high-performance functional applications.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <IconCode className="w-5 h-5" />
                View Projects
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-900/50"
              >
                <IconDownload className="w-5 h-5" />
                Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Stats/Links */}
          <motion.div
            className="flex items-center justify-center gap-8 pt-12 text-sm text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              <span>1+ Years Experience</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              <span>30+ Projects built</span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.span
              className="text-xs font-medium tracking-wider uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll
            </motion.span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-600"
              animate={{ scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
    </div>
  )
}

export default Hero