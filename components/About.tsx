"use client"

import { IconDownload, IconMail, IconMapPin, IconExternalLink } from '@tabler/icons-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.12]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Enhanced Dark Mode Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Side Masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 right-1/4 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/20 rounded-full blur-2xl"
        animate={{
          y: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-purple-500/5 dark:bg-purple-400/15 rounded-full blur-2xl"
        animate={{
          x: [-15, 15, -15],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/6 w-20 h-20 bg-indigo-500/5 dark:bg-indigo-400/12 rounded-full blur-xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/80 rounded-full px-4 py-2 text-sm text-slate-600 dark:text-slate-300 mb-6 shadow-sm dark:shadow-lg">
            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Passionate about crafting
            <span className="block text-blue-600 dark:text-blue-400 font-medium">digital experiences</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Left Column - Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800/80 dark:via-slate-700/60 dark:to-slate-800/80 p-6 shadow-xl dark:shadow-2xl border dark:border-slate-700/50">
                <Image
                  src="/mypic.jpg"
                  alt="Sandeep Singh Nayal"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 dark:from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Floating Location Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/60 dark:border-slate-600/80 rounded-xl px-4 py-3 shadow-xl dark:shadow-2xl"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">India</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Available Remote</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Bio Content */}
            <div className="space-y-6">
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hi there! I&apos;m <span className="font-semibold text-slate-900 dark:text-slate-100">Sandeep Singh Nayal</span>,
                a passionate full-stack developer who loves turning complex problems into simple,
                beautiful solutions. With over a year of hands-on experience, I specialize in
                building modern web applications that make a difference.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                My journey in web development started with curiosity and has evolved into a
                passion for creating seamless user experiences. I&apos;m proficient in the MERN
                stack and Next.js, always eager to learn new technologies and tackle challenging projects.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends,
                contributing to open-source projects, or sharing knowledge with the developer community.
                I believe in writing clean, maintainable code and creating applications that users love.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex-1 sm:flex-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="mailto:sandeepnayal@example.com"
                  className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <IconMail className="w-5 h-5" />
                  Contact Me
                  <motion.div
                    className="w-4 h-4"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <IconExternalLink className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className="flex-1 sm:flex-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 w-full sm:w-auto hover:shadow-lg"
                >
                  <IconDownload className="w-5 h-5" />
                  Download Resume
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="flex items-center gap-6 pt-6 text-sm text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>1+ years experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About