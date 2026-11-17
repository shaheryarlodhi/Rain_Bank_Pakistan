
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
    ArrowDown,
    ArrowUpRight,
    Droplets,
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isMobile: '(max-width: 768px)',
                    reduceMotion: '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const { isMobile, reduceMotion } = context.conditions;

                    // Respect reduced motion preferences
                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.hero-eyebrow',
                                '.hero-title',
                                '.hero-description',
                                '.hero-actions',
                                '.hero-bottom',
                            ],
                            { clearProps: 'all' }
                        );

                        return;
                    }

                    const distance = isMobile ? 20 : 45;
                    const duration = isMobile ? 0.6 : 0.85;

                    // HERO CONTENT ENTRANCE
                    const tl = gsap.timeline({
                        defaults: {
                            ease: 'power3.out',
                        },
                    });

                    tl.from('.hero-eyebrow', {
                        y: distance,
                        opacity: 0,
                        duration,
                    })
                        .from(
                            '.hero-title',
                            {
                                y: distance + 15,
                                opacity: 0,
                                duration: duration + 0.2,
                            },
                            '-=0.35'
                        )
                        .from(
                            '.hero-description',
                            {
                                y: distance,
                                opacity: 0,
                                duration,
                            },
                            '-=0.4'
                        )
                        .from(
                            '.hero-actions',
                            {
                                y: distance,
                                opacity: 0,
                                duration,
                            },
                            '-=0.4'
                        )
                        .from(
                            '.hero-bottom',
                            {
                                y: 15,
                                opacity: 0,
                                duration,
                            },
                            '-=0.3'
                        );

                    // BACKGROUND PARALLAX
                    if (!isMobile) {
                        gsap.to('.hero-background', {
                            yPercent: 12,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: '.hero-section',
                                start: 'top top',
                                end: 'bottom top',
                                scrub: 1,
                            },
                        });
                    }

                    // SCROLL INDICATOR
                    if (!isMobile) {
                        gsap.to('.hero-scroll-icon', {
                            y: 8,
                            repeat: -1,
                            yoyo: true,
                            duration: 1,
                            ease: 'power1.inOut',
                        });
                    }
                }
            );

            return () => mm.revert();

        }, heroRef);

        return () => ctx.revert();

    }, []);

    const buttonTransition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.3, ease: 'easeOut' };

    return (
        <section
            className="hero-section"
            id="home"
            ref={heroRef}
        >

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

                    <motion.a
                        href="#about"
                        className="primary-btn"
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : { y: -4, scale: 1.03 }
                        }
                        whileTap={
                            shouldReduceMotion
                                ? {}
                                : { scale: 0.97 }
                        }
                        transition={buttonTransition}
                    >
                        Discover Our Mission
                        <ArrowUpRight size={19} />
                    </motion.a>

                    <motion.a
                        href="#work"
                        className="secondary-btn"
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : { y: -4, scale: 1.03 }
                        }
                        whileTap={
                            shouldReduceMotion
                                ? {}
                                : { scale: 0.97 }
                        }
                        transition={buttonTransition}
                    >
                        Explore Our Work
                    </motion.a>

                </div>

            </div>

            <div className="hero-bottom">

                <div className="hero-location">
                    <span className="location-line"></span>
                    <span>ISLAMABAD, PAKISTAN</span>
                </div>

                <a
                    href="#about"
                    className="scroll-indicator"
                >
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown
                        className="hero-scroll-icon"
                        size={18}
                    />
                </a>

                <div className="hero-tagline">
                    EVERY DROP COUNTS. EVERY ACTION MATTERS.
                </div>

            </div>

        </section>
    );
}
