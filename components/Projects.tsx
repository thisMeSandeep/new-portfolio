"use client"

import { useState, useCallback, useMemo, memo, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { LayoutGroup } from "motion/react"
import { IconCode, IconBrandGithub, IconExternalLink, IconX } from "@tabler/icons-react"
import { featuredProjects as projects } from "@/data/featuredProjects"
import Image from "next/image"

// Memoized ProjectCard component for better performance
const ProjectCard = memo(({ project, idx, onCardClick }: {
    project: typeof projects[0];
    idx: number;
    onCardClick: (idx: number) => void;
}) => (
    <motion.article
        key={project.title}
        layoutId={`project-${idx}`}
        className="group relative cursor-pointer"
        onClick={() => onCardClick(idx)}
        whileHover={{
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            layout: { type: "spring", stiffness: 400, damping: 40 }
        }}
        style={{ willChange: "transform" }}
    >
        {/* Card Container */}
        <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-black/20 dark:border-white/10 rounded-xl overflow-hidden  transition-all duration-300">

            {/* Project Image */}
            <motion.div
                layoutId={`image-${idx}`}
                className="relative h-52 overflow-hidden"
                transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill={true}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ willChange: "transform" }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-200`} />

                {/* Floating indicator */}
                <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <IconExternalLink size={16} className="text-slate-600 dark:text-slate-300" />
                </motion.div>
            </motion.div>

            {/* Card Content */}
            <motion.div
                layoutId={`content-${idx}`}
                className="p-8"
                transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
            >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 leading-tight">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className={`px-3 py-1.5 text-xs font-medium bg-gradient-to-r ${project.accent} text-white rounded-lg`}>
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </motion.div>

            {/* Subtle accent border */}
            <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
    </motion.article>
))

ProjectCard.displayName = 'ProjectCard'

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    // Memoized callbacks for better performance
    const handleCloseModal = useCallback(() => {
        setSelectedIndex(null)
    }, [])

    const handleCardClick = useCallback((idx: number) => {
        setSelectedIndex(idx)
    }, [])

    // Prevent body scroll when modal is open and handle keyboard events
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden'
            
            // Handle escape key to close modal
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    handleCloseModal()
                }
            }
            
            document.addEventListener('keydown', handleEscape)
            
            return () => {
                document.removeEventListener('keydown', handleEscape)
            }
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedIndex, handleCloseModal])

    // Memoize the selected project to prevent unnecessary re-renders
    const selectedProject = useMemo(() => {
        return selectedIndex !== null ? projects[selectedIndex] : null
    }, [selectedIndex])

    return (
        <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">

            {/* Skewed Grid Background */}
            {/* Skewed Grid Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
        linear-gradient(45deg, rgba(148,163,184,0.6) 2px, transparent 2px),
        linear-gradient(-45deg, rgba(148,163,184,0.6) 2px, transparent 2px)
      `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>



            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 shadow-xl">
                            <IconCode className="text-white dark:text-slate-900" size={28} />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Showcasing innovative solutions built with modern technologies and thoughtful user experience design.
                    </p>
                </div>

                <LayoutGroup>
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                idx={idx}
                                onCardClick={handleCardClick}
                            />
                        ))}
                    </div>

                    {/* Project Modal */}
                    <AnimatePresence mode="wait">
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                                onClick={handleCloseModal}
                                style={{ backdropFilter: "blur(8px)" }}
                            >
                                <motion.div
                                    layoutId={`project-${selectedIndex}`}
                                    className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        layout: { type: "spring", stiffness: 400, damping: 40 }
                                    }}
                                    style={{ willChange: "transform" }}
                                >
                                    {/* Close button */}
                                    <motion.button
                                        onClick={handleCloseModal}
                                        className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <IconX size={20} />
                                    </motion.button>

                                    <div 
                                        ref={modalRef}
                                        className="max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
                                        style={{ scrollbarWidth: 'thin' }}
                                    >
                                        {/* Hero Image */}
                                        <motion.div
                                            layoutId={`image-${selectedIndex}`}
                                            className="relative h-72 flex-shrink-0"
                                            transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
                                        >
                                            <Image
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                fill={true}
                                                className="w-full h-full object-cover"
                                                priority
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.accent} opacity-20`} />
                                        </motion.div>

                                        {/* Modal Content */}
                                        <motion.div
                                            layoutId={`content-${selectedIndex}`}
                                            className="p-8 lg:p-12"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 0.1,
                                                duration: 0.3,
                                                layout: { type: "spring", stiffness: 400, damping: 40 }
                                            }}
                                        >
                                            <div className="mb-8">
                                                <h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white mb-4">
                                                    {selectedProject.title}
                                                </h3>
                                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            {/* Features */}
                                            <div className="mb-8">
                                                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Key Features</h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {selectedProject.features.map((feature, idx) => (
                                                        <motion.div
                                                            key={feature}
                                                            className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                                                        >
                                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.accent} mt-2.5 flex-shrink-0`} />
                                                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Technologies */}
                                            <div className="mb-10">
                                                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Tech Stack</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.technologies.map((tech, idx) => (
                                                        <motion.span
                                                            key={tech}
                                                            className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:scale-105 transition-transform cursor-default"
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ delay: 0.3 + idx * 0.02, type: "spring", stiffness: 400, damping: 25 }}
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action buttons */}
                                            <motion.div
                                                className="flex flex-col sm:flex-row gap-4"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.3 }}
                                            >
                                                <motion.a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-medium"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                >
                                                    <IconBrandGithub size={20} />
                                                    View Code
                                                </motion.a>
                                                <motion.a
                                                    href={selectedProject.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${selectedProject.accent} text-white rounded-2xl font-medium shadow-lg`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                >
                                                    <IconExternalLink size={20} />
                                                    Live Demo
                                                </motion.a>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </LayoutGroup>
            </div>
        </section>
    )
}