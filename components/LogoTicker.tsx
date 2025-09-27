"use client"
import { motion } from 'motion/react'
import Image from 'next/image'

const logos = [
    { name: 'React', src: '/react-svgrepo-com.svg' },
    { name: 'Next.js', src: '/next-js-svgrepo-com.svg' },
    { name: 'JavaScript', src: '/js-svgrepo-com.svg' },
    { name: 'TypeScript', src: '/typescript-svgrepo-com.svg' },
    { name: 'Node.js', src: '/nodejs-svgrepo-com.svg' },
    { name: 'MongoDB', src: '/mongo-svgrepo-com.svg' },
    { name: 'Express', src: '/express-svgrepo-com.svg' },
    { name: 'Tailwind CSS', src: '/tailwind-svgrepo-com.svg' },
    { name: 'Git', src: '/git-svgrepo-com.svg' },
    { name: 'VS Code', src: '/vs-code-svgrepo-com.svg' },
    { name: 'PostgreSQL', src: '/postgresql-logo-svgrepo-com.svg' },
    { name: 'Python', src: '/python-svgrepo-com.svg' },
    { name: 'HTML5', src: '/html-5-svgrepo-com.svg' },
    { name: 'CSS3', src: '/css-3-svgrepo-com.svg' },
    { name: 'Java', src: '/java-svgrepo-com.svg' },
    { name: 'Firebase', src: '/firebase-svgrepo-com.svg' },
    { name: 'Supabase', src: '/SupabaseIcon.svg' },
    { name: 'Prisma', src: '/light-prisma-svgrepo-com.svg' },
    { name: 'Redux', src: '/redux-logo-svgrepo-com.svg' },
    { name: 'React Query', src: '/ReactQueryIcon.svg' },
    { name: 'Zustand', src: '/zustand.svg' },
    { name: 'Socket.io', src: '/socket-dot-io-svgrepo-com.svg' },
    { name: 'Vite', src: '/vite.svg' },
    { name: 'Expo', src: '/expo-svgrepo-com.svg' },
    { name: 'React Router', src: '/react-router-svgrepo-com.svg' },
    { name: 'Storybook', src: '/storybook-icon-svgrepo-com.svg' },
    { name: 'Framer Motion', src: '/framer-svgrepo-com.svg' },
    { name: 'JWT', src: '/JwtIcon.svg' },
    { name: 'Auth0', src: '/auth0-svgrepo-com.svg' },
    { name: 'Zod', src: '/Zod.svg' },
    { name: 'Postman', src: '/postman-icon-svgrepo-com.svg' },
    { name: 'GitHub', src: '/github-142-svgrepo-com.svg' },
    { name: 'Vercel', src: '/vercel-svgrepo-com.svg' },
    { name: 'Netlify', src: '/netlify-svgrepo-com.svg' },
    { name: 'MongoDB (Mongoose)', src: '/mongoose-svgrepo-com.svg' },
    { name: 'MySQL', src: '/mysql-logo-svgrepo-com.svg' },
    { name: 'SQL', src: '/sql-database-generic-svgrepo-com.svg' }
]

const LogoTicker = () => {
  

    // Duplicate logos for  infinite scroll
    const duplicatedLogos = [...logos, ...logos]

    return (
        <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-8">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            {/* Left Fade Mask */}
            <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent pointer-events-none" />

            {/* Right Fade Mask */}
            <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent pointer-events-none" />

            {/* Ticker Container */}
            <div className="relative ticker-paused">
                <div
                    className="ticker-anim flex items-center gap-8 md:gap-12 lg:gap-16"
                >
                    {duplicatedLogos.map((logo, index) => (
                        <motion.div
                            key={`${logo.name}-${index}`}
                            className="flex-shrink-0 group cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                y: -5
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                        >
                            <div className="relative">
                                {/* Logo Container */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg dark:group-hover:shadow-2xl group-hover:border-blue-200 dark:group-hover:border-blue-800/50 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-950/30">

                                    {/*  Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Logo Image */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-lg "
                                        />
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                    {logo.name}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900 dark:border-t-slate-700" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Speed Lines Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform translate-y-2" />
            </div>
        </div>
    )
}

export default LogoTicker
