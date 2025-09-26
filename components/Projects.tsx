"use client"

import Image from "next/image"
import Link from "next/link"
import { IconCode, IconBrandGithub, IconExternalLink, IconCheck, IconArrowRight } from "@tabler/icons-react"
import { featuredProjects as projects } from "@/data/featuredProjects"

export default function Projects() {
    return (
        <section className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
            {/* Grid Background with fading mask */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, rgba(148,163,184,0.3) 1px, transparent 1px),
                            linear-gradient(-45deg, rgba(148,163,184,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.title}
                            className="group relative bg-white dark:bg-slate-800 rounded-xl border border-black/10 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-10`} />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center">
                                    <IconExternalLink size={16} className="text-slate-600 dark:text-slate-300" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{project.description}</p>

                                {/* Features */}
                                <ul className="mt-3 space-y-1">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                            <IconCheck size={16} className="text-green-500 dark:text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 5 && (
                                        <span className={`px-3 py-1.5 text-xs font-medium bg-gradient-to-r ${project.accent} text-white rounded-lg`}>
                                            +{project.technologies.length - 5}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-medium hover:opacity-80 transition"
                                    >
                                        <IconBrandGithub size={16} />
                                        Code
                                    </Link>
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.accent} text-white rounded-xl text-sm font-medium hover:opacity-80 transition`}
                                    >
                                        <IconExternalLink size={16} />
                                        Live
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Link */}
                <div className="mt-12 text-center">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-slate-900 dark:text-white">
                        <span>More projects</span>
                        <IconArrowRight size={20} className="arrow-slide-x" />
                    </Link>
                </div>


            </div>
        </section>
    )
}
