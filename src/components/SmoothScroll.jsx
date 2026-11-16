
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { frame, cancelFrame } from 'motion/react';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update({ timestamp }) {
            lenisRef.current?.lenis?.raf(timestamp);
        }

        frame.setup(update, true);

        return () => {
            cancelFrame(update);
        };
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                duration: 1.2,
                smoothWheel: true,
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
