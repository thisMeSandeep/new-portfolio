"use client"

import { ReactLenis } from 'lenis/react'

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, 
                wheelMultiplier: 1,
                touchMultiplier: 1,
                syncTouch: false, 
                duration: 1.2, 
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisWrapper