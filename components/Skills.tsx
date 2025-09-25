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
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">

            {/* Clean Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Subtle Radial Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-50/50 dark:to-slate-900/50" />

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex mx-auto items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-sm text-slate-700 dark:text-slate-300 mb-6"
                    >
                        <IconCode className="w-4 h-4" />
                        <span>My Skills</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-slate-900 dark:text-white"
                    >
                        Tech Stack &
                        <span className="block text-blue-600 dark:text-blue-400 font-medium">Tools</span>
                    </motion.h2>
                </div>

                {/* Logo Ticker */}

                <LogoTicker />


                {/* Clean Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center space-x-2 mt-20 mb-10"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-5 py-2 font-medium text-sm rounded-xl transition-all duration-300 
                  border ${activeTab === tab
                                    ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500"
                                    : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:bg-gray-200 dark:hover:bg-slate-700"
                                }`}
                        >
                            <span>{tab}</span>
                        </button>
                    ))}
                </motion.div>


                {/* Skills Grid - 3 columns on mobile */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto"
                    >
                        {filteredLogos.map((logo) => (
                            <div
                                key={logo.name}
                                className="group relative flex flex-col items-center text-center rounded-xl 
                   bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all 
                   duration-300 border border-slate-200/50 dark:border-slate-700/50 
                   cursor-pointer px-2 py-2"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                {/* Icon with Rotation */}
                                <motion.div
                                    whileHover={{ rotate: 12 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="relative mb-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-700 
                     group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                </motion.div>

                                {/* Skill Name */}
                                <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {logo.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Skills;
