"use client"

import Link from "next/link"
import { IconArrowUp, IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-300/30 dark:border-gray-700/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">

                {/* Left Section: Name and Contact */}
                <div className="space-y-2 text-center sm:text-left">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Sandeep Singh Nayal</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                            <IconMail size={16} />
                            <span>sandeepnayal50@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <IconPhone size={16} />
                            <span>+91-9305787991</span>
                        </div>
                    </div>
                </div>

                {/* Center Section: Socials */}
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/thisMeSandeep"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                        <IconBrandGithub size={20} className="text-gray-700 dark:text-gray-300" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sandeepsinghnayal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                        <IconBrandLinkedin size={20} className="text-gray-700 dark:text-gray-300" />
                    </Link>
                </div>

                {/* Right Section: Go to Top */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-1 px-4 py-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all text-gray-700 dark:text-gray-300 text-sm"
                >
                    <IconArrowUp size={16} />
                    Top
                </button>
            </div>
        </footer>
    )
}

export default Footer
