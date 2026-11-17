
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Droplets } from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
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

                    const distance = isMobile ? 22 : 50;
                    const duration = isMobile ? 0.6 : 0.9;

                    // Reduced motion: show content without movement
                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.about-image',
                                '.about-content > *',
                                '.about-image-label',
                            ],
                            {
                                clearProps: 'all',
                            }
                        );
                        return;
                    }

                    // IMAGE REVEAL
                    gsap.from('.about-image', {
                        x: -distance,
                        opacity: 0,
                        scale: 1.04,
                        duration,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.about-visual',
                            start: 'top 82%',
                            once: true,
                        },
                    });

                    // IMAGE LABEL
                    gsap.from('.about-image-label', {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                        delay: 0.25,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.about-visual',
                            start: 'top 82%',
                            once: true,
                        },
                    });

                    // TEXT STAGGER
                    gsap.from('.about-content > *', {
                        y: distance,
                        opacity: 0,
                        duration,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.about-content',
                            start: 'top 82%',
                            once: true,
                        },
                    });

                    // SUBTLE IMAGE PARALLAX
                    if (!isMobile) {
                        gsap.to('.about-image', {
                            yPercent: 6,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: '.about-section',
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: 1,
                            },
                        });
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <section
            className="about-section"
            id="about"
            ref={sectionRef}
        >
            <div className="about-container">

                {/* IMAGE AREA */}

                <div className="about-visual">

                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1000&q=85"
                        alt="Natural waterfall surrounded by greenery"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="about-image-label">

                        <Droplets size={23} />

                        <div>
                            <strong>Protect Every Drop</strong>
                            <span>Preserve Our Future</span>
                        </div>

                    </div>

                    <div className="about-image-number">
                        01
                    </div>

                </div>


                {/* CONTENT AREA */}

                <div className="about-content">

                    <span className="section-eyebrow">
                        <span></span>
                        WHO WE ARE
                    </span>

                    <h2>
                        Turning Rain
                        <br />
                        Into <em>Opportunity.</em>
                    </h2>

                    <p className="about-lead">
                        Rain Bank Pakistan is an initiative dedicated to
                        promoting rainwater harvesting, water conservation
                        and the sustainable utilization of rainwater.
                    </p>

                    <p className="about-description">
                        We believe that rainwater should never go to waste.
                        Through responsible collection, storage and reuse,
                        we encourage households, educational institutions
                        and communities to transform rain into a valuable
                        resource for everyday needs.
                    </p>

                    <p className="about-description">
                        From cleaning and washing to gardening and
                        watering plants, harvested rainwater can help
                        reduce pressure on our existing water resources.
                    </p>

                    <motion.a
                        href="#work"
                        className="about-link"
                        whileHover={
                            shouldReduceMotion ? {} : { x: 6 }
                        }
                        whileTap={
                            shouldReduceMotion ? {} : { scale: 0.97 }
                        }
                        transition={{ duration: 0.25 }}
                    >
                        Explore Our Initiative
                        <ArrowUpRight size={19} />
                    </motion.a>

                </div>

            </div>
        </section>
    );
}
