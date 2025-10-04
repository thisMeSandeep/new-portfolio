"use client"

import { useState } from "react"
import Link from "next/link"
import { IconMail, IconUser, IconMessage, IconSend, IconMapPin, IconPhone, IconBrandLinkedin, IconBrandGithub} from "@tabler/icons-react"

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setFormData({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
    }

    return (
        <section id="contact" className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-4 text-gray-900 dark:text-white">Let&#39;s Connect</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have an opportunity in mind or just want to say hello? I&#39;d love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reach Out</h3>
                            <p className="text-gray-600 dark:text-gray-400">Whether you have a question or want to collaborate, feel free to contact me. I&#39;m happy to connect!</p>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-4">
                            <InfoCard icon={<IconMail size={20} />} title="Email" value="sandeepnayal50@gmail.com" />
                            <InfoCard icon={<IconMapPin size={20} />} title="Location" value="Lucknow, India" />
                            <InfoCard icon={<IconPhone size={20} />} title="Phone" value="9305787991" />
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">Follow me</p>
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/thisMeSandeep"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 transition-colors hover:bg-white/60 dark:hover:bg-gray-800/60"
                                >
                                    <IconBrandGithub size={20} className="text-gray-700 dark:text-gray-300" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/sandeepsinghnayal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 transition-colors hover:bg-white/60 dark:hover:bg-gray-800/60"
                                >
                                    <IconBrandLinkedin size={20} className="text-gray-700 dark:text-gray-300" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <InputField
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                icon={<IconUser size={18} />}
                                placeholder="Enter your full name"
                            />
                            <InputField
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                icon={<IconMail size={18} />}
                                placeholder="Enter your email"
                            />
                            <InputField
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                icon={<IconMessage size={18} />}
                                placeholder="Write you message..."
                                textarea
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-200/70 via-gray-300/70 to-gray-400/70 dark:from-gray-700/70 dark:via-gray-600/70 dark:to-gray-800/70 border border-gray-300/30 dark:border-gray-600/30 backdrop-blur-xl hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : <>
                                    <IconSend size={18} /> Send Message
                                </>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Glassmorphic Info Card
const InfoCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
    <div className="flex items-center gap-4 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30">
        <div className="p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">{icon}</div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-gray-900 dark:text-white font-medium">{value}</p>
        </div>
    </div>
)

// Glassmorphic Input Field
const InputField = ({
    label,
    name,
    value,
    onChange,
    icon,
    placeholder,
    textarea = false
}: {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    icon: React.ReactNode
    placeholder: string
    textarea?: boolean
}) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">{icon}</div>
            {textarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={5}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            )}
        </div>
    </div>
)

export default ContactSection
