"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LogoTicker from "./LogoTicker";
import Image from "next/image";
import { IconCode } from "@tabler/icons-react";

const logos = [
    { name: "React", src: "/react-svgrepo-com.svg", category: "frontend" },
    { name: "Next.js", src: "/next-js-svgrepo-com.svg", category: "frontend" },
    { name: "JavaScript", src: "/js-svgrepo-com.svg", category: "frontend" },
    { name: "TypeScript", src: "/typescript-svgrepo-com.svg", category: "frontend" },
    { name: "Tailwind CSS", src: "/tailwind-svgrepo-com.svg", category: "frontend" },
    { name: "Redux", src: "/redux-logo-svgrepo-com.svg", category: "frontend" },
    { name: "React Query", src: "/ReactQueryIcon.svg", category: "frontend" },
    { name: "Zustand", src: "/zustand.svg", category: "frontend" },
    { name: "React Router", src: "/react-router-svgrepo-com.svg", category: "frontend" },
    { name: "Storybook", src: "/storybook-icon-svgrepo-com.svg", category: "frontend" },
    { name: "Framer Motion", src: "/framer-svgrepo-com.svg", category: "frontend" },

    { name: "Node.js", src: "/nodejs-svgrepo-com.svg", category: "backend" },
    { name: "Express", src: "/express-svgrepo-com.svg", category: "backend" },
    { name: "MongoDB", src: "/mongo-svgrepo-com.svg", category: "backend" },
    { name: "PostgreSQL", src: "/postgresql-logo-svgrepo-com.svg", category: "backend" },
    { name: "MySQL", src: "/mysql-logo-svgrepo-com.svg", category: "backend" },
    { name: "MongoDB (Mongoose)", src: "/mongoose-svgrepo-com.svg", category: "backend" },
    { name: "Prisma", src: "/light-prisma-svgrepo-com.svg", category: "backend" },
    { name: "Socket.io", src: "/socket-dot-io-svgrepo-com.svg", category: "backend" },
    { name: "Firebase", src: "/firebase-svgrepo-com.svg", category: "backend" },
    { name: "Supabase", src: "/SupabaseIcon.svg", category: "backend" },
    { name: "JWT", src: "/JwtIcon.svg", category: "backend" },
    { name: "Auth0", src: "/auth0-svgrepo-com.svg", category: "backend" },
    { name: "Zod", src: "/Zod.svg", category: "backend" },

    // Common/All
    { name: "Git", src: "/git-svgrepo-com.svg", category: "all" },
    { name: "GitHub", src: "/github-142-svgrepo-com.svg", category: "all" },
    { name: "Postman", src: "/postman-icon-svgrepo-com.svg", category: "all" },
    { name: "VS Code", src: "/vs-code-svgrepo-com.svg", category: "all" },
    { name: "Vercel", src: "/vercel-svgrepo-com.svg", category: "all" },
    { name: "Netlify", src: "/netlify-svgrepo-com.svg", category: "all" },
    { name: "Python", src: "/python-svgrepo-com.svg", category: "all" },
    { name: "Java", src: "/java-svgrepo-com.svg", category: "all" },
    { name: "HTML5", src: "/html-5-svgrepo-com.svg", category: "frontend" },
    { name: "CSS3", src: "/css-3-svgrepo-com.svg", category: "frontend" },
    { name: "SQL", src: "/sql-database-generic-svgrepo-com.svg", category: "backend" },
    { name: "Vite", src: "/vite.svg", category: "frontend" },
    { name: "Expo", src: "/expo-svgrepo-com.svg", category: "frontend" },
];

const tabs = ["All", "Frontend", "Backend"];

const Skills = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const filteredLogos =
        activeTab === "All"
            ? logos
            : logos.filter((logo) => logo.category === activeTab.toLowerCase());

    return (
        <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10">
                {/* Enhanced Badge + Heading */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex mx-auto items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border border-white/20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-lg text-gray-800 dark:text-gray-200 hover:shadow-xl transition-shadow duration-300"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <IconCode className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.div>
                        <span>My Skills</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                    >
                        Tech Stack & Tools
                    </motion.h2>
                </div>

                {/* Logo Ticker with enhanced styling */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="my-16"
                >
                    <LogoTicker />
                </motion.div>

                {/* Enhanced Tabs with gradient backgrounds */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center space-x-2 mb-10"
                >
                    {tabs.map((tab, index) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`relative px-6 py-3 font-medium text-sm rounded-xl transition-all duration-300 ${activeTab === tab
                                ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 shadow-lg transform -translate-y-0.5"
                                : "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 shadow-md"
                                }`}
                        >
                            {/* Active tab indicator */}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>

                            {/* Tab counter */}
                            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full transition-colors ${activeTab === tab
                                ? "bg-white/20 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                                }`}>
                                {tab === "All" ? logos.length : logos.filter(logo => logo.category === tab.toLowerCase()).length}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Enhanced Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
                    >
                        {filteredLogos.map((logo, index) => (
                            <motion.div
                                key={logo.name}
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    y: -8,
                                    rotate: [0, -1, 1, 0],
                                    transition: { duration: 0.3 }
                                }}
                                onHoverStart={() => setHoveredSkill(logo.name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer overflow-hidden"
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                {/* Skill icon with enhanced animation */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative mb-3 p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </motion.div>

                                {/* Skill name with gradient on hover */}
                                <p className={`text-sm font-semibold transition-all duration-300 ${hoveredSkill === logo.name
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent scale-105"
                                    : "text-gray-800 dark:text-gray-200"
                                    }`}>
                                    {logo.name}
                                </p>

                                {/* Proficiency level indicator */}
                                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </div>

                                {/* Floating particles on hover */}
                                {hoveredSkill === logo.name && (
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                                initial={{
                                                    x: "50%",
                                                    y: "50%",
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    x: `${Math.random() * 100}%`,
                                                    y: `${Math.random() * 100}%`,
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: i * 0.1,
                                                    repeat: Infinity
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Skills summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Showing {filteredLogos.length} {activeTab.toLowerCase() === 'all' ? '' : activeTab.toLowerCase() + ' '}
                        skill{filteredLogos.length !== 1 ? 's' : ''}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
