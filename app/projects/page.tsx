"use client"

import { motion } from "motion/react"
import { IconCode, IconBrandGithub, IconExternalLink, IconArrowLeft, IconStar, IconEye } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import projects from "@/data/projects"

const Projects = () => {
    // Animation variants for performance optimization
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)
            `,
                        backgroundSize: '32px 32px'
                    }}
                />

                {/* Subtle gradient orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 dark:bg-purple-400/3 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/3 dark:bg-emerald-400/2 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Back Button */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ x: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                        >
                            <IconArrowLeft size={18} />
                            Back to Portfolio
                        </motion.div>
                    </Link>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl">
                            <IconCode size={32} className="text-white" />
                        </div>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        All <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text">Projects</span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Explore my complete portfolio of projects ranging from full-stack applications to modern landing pages,
                        each built with cutting-edge technologies and best practices.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 mt-8">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <IconStar size={18} className="text-yellow-500" />
                            <span className="text-sm font-medium">{projects.length} Projects</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <IconEye size={18} className="text-blue-500" />
                            <span className="text-sm font-medium">Open Source</span>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Floating Actions */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <div className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform">
                                            <IconBrandGithub size={16} className="text-gray-700 dark:text-gray-300" />
                                        </div>
                                    </Link>
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <div className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform">
                                            <IconExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technology Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:scale-105 transition-transform cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:scale-105 transition-all duration-200 text-sm w-full">
                                            <IconBrandGithub size={16} />
                                            Code
                                        </div>
                                    </Link>
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg text-sm w-full">
                                            <IconExternalLink size={16} />
                                            Live
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Subtle border accent */}
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.article>
                    ))}
                </motion.div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        More projects coming soon! Follow me on{" "}
                        <Link
                            href="https://github.com/thisMeSandeep"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            GitHub
                        </Link>{" "}
                        to stay updated.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects