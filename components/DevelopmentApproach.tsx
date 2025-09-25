"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconCode, IconRocket, IconUsers, IconTarget, IconBulb, IconRefresh } from "@tabler/icons-react";

const approachItems = [
    {
        icon: IconCode,
        title: "Clean Code",
        description: "Writing maintainable, readable code that follows best practices and industry standards.",
        color: "from-blue-500 to-cyan-500",
        delay: 0
    },
    {
        icon: IconTarget,
        title: "Performance First",
        description: "Optimizing applications for speed, efficiency, and seamless user interactions.",
        color: "from-purple-500 to-pink-500",
        delay: 0.1
    },
    {
        icon: IconUsers,
        title: "User-Centric Design",
        description: "Prioritizing user experience and accessibility in every design decision.",
        color: "from-green-500 to-teal-500",
        delay: 0.2
    },
    {
        icon: IconRocket,
        title: "Modern Technologies",
        description: "Leveraging cutting-edge frameworks and tools to build scalable solutions.",
        color: "from-orange-500 to-red-500",
        delay: 0.3
    },
    {
        icon: IconBulb,
        title: "Innovation Mindset",
        description: "Constantly exploring new approaches and creative solutions to complex problems.",
        color: "from-yellow-500 to-orange-500",
        delay: 0.4
    },
    {
        icon: IconRefresh,
        title: "Continuous Learning",
        description: "Adapting quickly to new technologies and expanding my skill set regularly.",
        color: "from-indigo-500 to-purple-500",
        delay: 0.5
    }
];

const DevelopmentApproach = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Floating Code Snippets */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-xs font-mono text-gray-300 dark:text-gray-700 opacity-40"
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -20, 30, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${15 + (i % 3) * 25}%`
                        }}
                    >
                        {['const', 'function', 'return', 'async', 'await', 'export', 'import', 'class'][i]}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setIsVisible(true)}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex mx-auto items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/30 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg shadow-lg text-gray-800 dark:text-gray-200 mb-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <motion.div
                            animate={{ rotate: isVisible ? 360 : 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            <IconBulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </motion.div>
                        <span>My Development Philosophy</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
                    >
                        My Development Approach
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        I approach development with a focus on{" "}
                        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            clean, maintainable code
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                            responsive design
                        </span>
                        . My experience with modern JavaScript frameworks enables me to build modern applications from concept to deployment, always prioritizing performance and user experience.
                    </motion.p>
                </motion.div>

                {/* Approach Cards Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {approachItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: item.delay,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                                />

                                {/* Floating Orb */}
                                <motion.div
                                    className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                    animate={hoveredCard === index ? {
                                        scale: [1, 1.2, 1],
                                        rotate: 360
                                    } : {}}
                                    transition={{ duration: 2 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.color} inline-block`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${hoveredCard === index
                                            ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`
                                            : "text-gray-900 dark:text-white"
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Progress Bar Animation */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: item.delay + 0.5 }}
                                    style={{
                                        background: `linear-gradient(90deg, transparent, rgb(${item.color.includes('blue') ? '59, 130, 246' : item.color.includes('purple') ? '147, 51, 234' : item.color.includes('green') ? '34, 197, 94' : item.color.includes('orange') ? '249, 115, 22' : item.color.includes('yellow') ? '234, 179, 8' : '99, 102, 241'}), transparent)`
                                    }}
                                />

                                {/* Particle Effect */}
                                {hoveredCard === index && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white rounded-full"
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
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        >
                            <IconRocket className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white">
                                Ready to bring your ideas to life?
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Let&apos;s build something amazing together
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentApproach;