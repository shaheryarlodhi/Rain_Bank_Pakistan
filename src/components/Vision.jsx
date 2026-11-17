
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import {
    Eye,
    Droplets,
    Sprout,
    Globe,
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: <Droplets size={25} />,
        title: 'Value Every Drop',
        text: 'Recognize rainwater as a valuable natural resource.',
    },
    {
        icon: <Sprout size={25} />,
        title: 'Sustainable Living',
        text: 'Encourage responsible water use in daily life.',
    },
    {
        icon: <Globe size={25} />,
        title: 'Collective Action',
        text: 'Build communities that care for our water future.',
    },
];

export default function Vision() {
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

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.vision-heading',
                                '.vision-description',
                                '.vision-pill',
                                '.vision-top',
                                '.vision-card',
                            ],
                            { clearProps: 'all' }
                        );
                        return;
                    }

                    const distance = isMobile ? 20 : 40;
                    const duration = isMobile ? 0.6 : 0.85;

                    // TOP EYEBROW AND ICON
                    gsap.from('.vision-top', {
                        y: 20,
                        opacity: 0,
                        duration,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 82%',
                            once: true,
                        },
                    });

                    // MAIN HEADING
                    gsap.from('.vision-heading', {
                        y: distance,
                        opacity: 0,
                        duration,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.vision-heading',
                            start: 'top 85%',
                            once: true,
                        },
                    });

                    // DESCRIPTION
                    gsap.from('.vision-description', {
                        y: 25,
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.vision-description',
                            start: 'top 88%',
                            once: true,
                        },
                    });

                    // VISION PILL
                    gsap.from('.vision-pill', {
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'back.out(1.5)',
                        scrollTrigger: {
                            trigger: '.vision-pill',
                            start: 'top 90%',
                            once: true,
                        },
                    });

                    // CARDS STAGGER
                    gsap.from('.vision-card', {
                        y: distance,
                        opacity: 0,
                        scale: 0.96,
                        duration,
                        stagger: isMobile ? 0.1 : 0.16,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.vision-cards',
                            start: 'top 88%',
                            once: true,
                        },
                    });
                }
            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    const hoverAnimation = shouldReduceMotion
        ? {}
        : {
            y: -8,
            scale: 1.02,
        };

    return (
        <section
            className="vision-section"
            ref={sectionRef}
        >

            <div className="vision-container">

                {/* TOP AREA */}

                <div className="vision-top">

                    <span className="section-eyebrow light">
                        <span></span>
                        OUR VISION
                    </span>

                    <div className="vision-icon">
                        <Eye size={28} />
                    </div>

                </div>


                {/* HEADING */}

                <h2 className="vision-heading">
                    A Future Where
                    <br />
                    <em>Every Drop Matters.</em>
                </h2>


                {/* DESCRIPTION */}

                <p className="vision-description">
                    Our vision is to create a water-conscious society
                    where rainwater is recognized as a valuable resource
                    and every household and institution is encouraged
                    to adopt rainwater harvesting practices.
                </p>


                {/* PILL */}

                <div className="vision-pill">
                    <Droplets size={17} />
                    WATER CONSCIOUSNESS FOR EVERYONE
                </div>


                {/* VISION CARDS */}

                <div className="vision-cards">

                    {values.map((item, index) => (

                        <motion.div
                            className="vision-card"
                            key={item.title}
                            whileHover={hoverAnimation}
                            whileTap={
                                shouldReduceMotion
                                    ? {}
                                    : { scale: 0.98 }
                            }
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                        >

                            <motion.div
                                className="vision-card-icon"
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { rotate: 8, scale: 1.1 }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                {item.icon}
                            </motion.div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                            <span className="vision-card-number">
                                0{index + 1}
                            </span>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}
