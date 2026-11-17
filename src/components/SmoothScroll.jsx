
import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerSync() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const handleScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on('scroll', handleScroll);

        // Recalculate trigger positions after the page is ready.
        ScrollTrigger.refresh();

        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis]);

    return null;
}

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis
            root
            options={{
                autoRaf: true,
                smoothWheel: true,
                syncTouch: false,
                lerp: 0.1,
            }}
        >
            <ScrollTriggerSync />
            {children}
        </ReactLenis>
    );
}
