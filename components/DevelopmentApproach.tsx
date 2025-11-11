"use client";

import { motion } from "motion/react";
import { IconCode, IconRocket, IconUsers, IconTarget, IconBulb, IconRefresh } from "@tabler/icons-react";
import { CardSpotlight } from "./ui/card-spotlight";

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

    return (
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Subtle Background Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex mx-auto items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/30 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg shadow-lg text-gray-800 dark:text-gray-200 mb-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <IconBulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        <span>My Development Philosophy</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
                    >
                        My Development Approach
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {approachItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="relative">
                                <CardSpotlight
                                    className="group cursor-pointer hidden dark:block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
                                    radius={350}
                                    color="#0a0a0a"
                                >
                                    <Icon className="w-8 h-8 text-gray-200" />

                                    <h3 className="text-xl font-semibold mt-4 text-white">{item.title}</h3>

                                    <p className="mt-2 text-gray-400">{item.description}</p>
                                </CardSpotlight>

                                {/* Fallback card for light mode */}
                                <div className="group cursor-pointer block dark:hidden p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-gray-100  border border-gray-200 ">
                                    <Icon className="w-8 h-8 text-gray-800" />

                                    <h3 className="text-xl font-semibold mt-4 text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentApproach;
