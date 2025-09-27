import { IconCode, IconBrandGithub, IconExternalLink, IconArrowLeft, IconStar, IconEye, IconCalendar } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import projects from "@/data/projects"

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Clean Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <IconArrowLeft size={18} />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Projects
              </h1>
            </div>

            <div className="w-16" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors"
                  >
                    <IconBrandGithub size={20} className="text-white" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors"
                  >
                    <IconExternalLink size={20} className="text-white" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                      <IconBrandGithub size={16} />
                      Code
                    </button>
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium">
                      <IconExternalLink size={16} />
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/*  Footer */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              More projects on{" "}
              <Link
                href="https://github.com/thisMeSandeep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:underline font-medium"
              >
                GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects