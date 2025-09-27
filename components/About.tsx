"use client"

import { IconDownload, IconMail, IconMapPin, IconExternalLink } from '@tabler/icons-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Side Masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/80 rounded-full px-4 py-2 text-sm text-slate-600 dark:text-slate-300 mb-6 shadow-sm dark:shadow-lg"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
            About Me
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Passionate about crafting
            <motion.span
              className="block text-blue-600 dark:text-blue-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              digital experiences
            </motion.span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Left Column - Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800/80 dark:via-slate-700/60 dark:to-slate-800/80 p-6 shadow-xl dark:shadow-2xl border dark:border-slate-700/50">
                <Image
                  src="/mypic.jpg"
                  alt="Sandeep Singh Nayal"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 dark:from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/60 dark:border-slate-600/80 rounded-xl px-4 py-3 shadow-xl dark:shadow-2xl">
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">India</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Available Remote</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Bio Content */}
            <div className="space-y-6">
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hi there! I&apos;m <span className="font-semibold text-slate-900 dark:text-slate-100">Sandeep Singh Nayal</span>,
                a passionate full-stack developer who loves turning complex problems into simple,
                beautiful solutions. With over a year of hands-on experience, I specialize in
                building modern web applications that make a difference.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                My journey in web development started with curiosity and has evolved into a
                passion for creating seamless user experiences. I&apos;m proficient in the MERN
                stack , Next.js , React Native and various other technologies, always eager to learn new technologies and tackle challenging projects.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, technologies and exploring AI integration.
                I believe in writing clean, maintainable code and creating applications that users love.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:sandeepnayal50@gmail.com"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <IconMail className="w-5 h-5" />
                Contact Me
                <IconExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>


              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 w-full sm:w-auto hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <IconDownload className="w-5 h-5" />
                Download Resume
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="flex items-center gap-6 pt-6 text-sm text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
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