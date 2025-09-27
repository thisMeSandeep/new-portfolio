import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Portfolio Showcase",
    description: "Explore my portfolio of web applications and mobile apps built with modern technologies including MERN stack, Next.js, React Native, and more.",
    openGraph: {
        title: "Projects - Sandeep Singh Nayal Portfolio",
        description: "Explore my portfolio of web applications and mobile apps built with modern technologies including MERN stack, Next.js, React Native, and more.",
        type: "website",
        images: [
            {
                url: "/favicon.ico",
                width: 64,
                height: 64,
                alt: "Sandeep Singh Nayal Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Projects - Sandeep Singh Nayal Portfolio",
        description: "Explore my portfolio of web applications and mobile apps built with modern technologies.",
        images: ["/favicon.ico"], 
    },
    alternates: {
        canonical: "https://sandeepsinghnayal.dev/projects",
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
