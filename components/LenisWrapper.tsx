"use client"

import { ReactLenis } from 'lenis/react'

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08,
                wheelMultiplier: 1.1,
                touchMultiplier: 1.1,
                syncTouch: true,
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisWrapper