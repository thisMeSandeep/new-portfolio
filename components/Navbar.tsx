"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX } from '@tabler/icons-react'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('Home')

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sandeepsinghnayal/',
            icon: <IconBrandLinkedin className="w-4 h-4" />
        },
        {
            name: 'GitHub',
            href: 'https://github.com/thisMeSandeep',
            icon: <IconBrandGithub className="w-4 h-4" />
        },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        >
            {/* Main Navbar Container */}
            <div className="relative">

                {/* Main Navbar */}
                <div className="relative bg-white/30 dark:bg-black/10 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-10 py-3 ">
                    <div className="flex items-center justify-between gap-12">

                        {/* Logo with */}
                        <motion.div className="flex items-center gap-2">
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                />
                            </div>
                            <Link
                                href="/"
                                className="text-xl font-light tracking-wider text-gray-900 dark:text-white"
                            >
                                SANDEEP
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation*/}
                        <div className="hidden md:flex items-center relative">
                            <div className="flex items-center bg-gray-200/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full p-1.5 relative">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setActiveLink(link.name)}
                                        className={`relative px-6 py-2.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap rounded-full ${activeLink === link.name
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        {activeLink === link.name && (
                                            <motion.div
                                                layoutId="activeLink"
                                                className="absolute inset-0 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full shadow-xl border border-white/50 dark:border-gray-600/50 -z-10"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">

                            {/* Social Icons */}
                            <div className="hidden md:flex items-center gap-1">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -10, 10, 0],
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            rotate: { duration: 0.4 },
                                            scale: { duration: 0.2 }
                                        }}
                                        className="p-2.5 rounded-full bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-600 dark:text-gray-400 border border-gray-300/50 dark:border-gray-700/50"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Theme Toggler */}
                            <div className="pl-1 border-l border-gray-200/50 dark:border-gray-700/50">
                                <ThemeToggler />
                            </div>

                            {/* Mobile Menu */}
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2.5 rounded-full bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-600 dark:text-gray-400 border border-gray-300/50 dark:border-gray-700/50"
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? <IconX className="w-4 h-4" /> : <IconMenu2 className="w-4 h-4" />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden absolute top-full left-0 right-0 mt-4"
                    >
                        <div className="bg-white/60 dark:bg-black/10 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/10 dark:shadow-white/5">

                            {/* Mobile Navigation */}
                            <div className="space-y-1 mb-6">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => {
                                                setActiveLink(link.name)
                                                setIsOpen(false)
                                            }}
                                            className="block px-4 py-3 text-lg font-medium text-gray-800 dark:text-gray-200 rounded-2xl active:bg-white/50 dark:active:bg-gray-800/50 backdrop-blur-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile Social */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                            >
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-2xl bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-600 dark:text-gray-400 border border-gray-300/30 dark:border-gray-700/30"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar