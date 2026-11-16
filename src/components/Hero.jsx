
import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Droplets } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-eyebrow', {
                y: 25,
                opacity: 0,
                duration: 0.8,
            })
                .from('.hero-title', {
                    y: 65,
                    opacity: 0,
                    duration: 1.1,
                }, '-=0.4')
                .from('.hero-description', {
                    y: 25,
                    opacity: 0,
                    duration: 0.8,
                }, '-=0.6')
                .from('.hero-actions', {
                    y: 25,
                    opacity: 0,
                    duration: 0.8,
                }, '-=0.5')
                .from('.hero-bottom', {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                }, '-=0.3');

            gsap.to('.hero-scroll-icon', {
                y: 8,
                repeat: -1,
                yoyo: true,
                duration: 1,
                ease: 'power1.inOut',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section" id="home" ref={heroRef}>

            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">

                <div className="hero-eyebrow">
                    <Droplets size={17} />
                    <span>WATER IS LIFE. CONSERVE IT.</span>
                </div>

                <h1 className="hero-title">
                    Every Drop
                    <br />
                    <span>Creates</span> A Future.
                </h1>

                <p className="hero-description">
                    Rain is not just a gift from nature.
                    It is a resource we must protect, preserve
                    and put to purpose. Together, let's make
                    every drop count.
                </p>

                <div className="hero-actions">
                    <a href="#about" className="primary-btn">
                        Discover Our Mission
                        <ArrowUpRight size={19} />
                    </a>

                    <a href="#work" className="secondary-btn">
                        Explore Our Work
                    </a>
                </div>

            </div>

            <div className="hero-bottom">

                <div className="hero-location">
                    <span className="location-line"></span>
                    <span>ISLAMABAD, PAKISTAN</span>
                </div>

                <a href="#about" className="scroll-indicator">
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown className="hero-scroll-icon" size={18} />
                </a>

                <div className="hero-tagline">
                    EVERY DROP COUNTS. EVERY ACTION MATTERS.
                </div>

            </div>

        </section>
    );
}
