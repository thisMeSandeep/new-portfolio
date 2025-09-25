"use client"

import { useState, useEffect } from 'react'
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react'

type Theme = 'light' | 'dark' | 'system'

const ThemeToggler = () => {
    const [theme, setTheme] = useState<Theme>('system')

    useEffect(() => {
        // Get saved theme or default to system
        const savedTheme = (localStorage.getItem('theme') as Theme) || 'system'
        setTheme(savedTheme)
        applyTheme(savedTheme)

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system')
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    const applyTheme = (newTheme: Theme) => {
        if (newTheme === 'system') {
            localStorage.removeItem('theme')
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            document.documentElement.classList.toggle('dark', systemPrefersDark)
        } else {
            localStorage.setItem('theme', newTheme)
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
        }
    }

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme)
        applyTheme(newTheme)
    }

    const getIcon = () => {
        switch (theme) {
            case 'light':
                return <IconSun className="w-5 h-5 text-yellow-500" />
            case 'dark':
                return <IconMoon className="w-5 h-5 text-blue-400" />
            case 'system':
                return <IconDeviceDesktop className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        }
    }

    return (
        <div className="relative">
            <button
                onClick={() => {
                    const themes: Theme[] = ['light', 'dark', 'system']
                    const currentIndex = themes.indexOf(theme)
                    const nextTheme = themes[(currentIndex + 1) % themes.length]
                    handleThemeChange(nextTheme)
                }}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={`Current theme: ${theme}. Click to cycle themes`}
                title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
                {getIcon()}
            </button>
        </div>
    )
}

export default ThemeToggler