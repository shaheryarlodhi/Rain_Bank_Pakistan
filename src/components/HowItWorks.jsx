
import { useEffect, useRef } from 'react';
import {
    CloudRain,
    Database,
    Sprout,
    ArrowDown,
    ArrowUpRight,
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: '(max-width: 768px)',
                reduceMotion: '(prefers-reduced-motion: reduce)',
            },
            (context) => {
                const { isMobile, reduceMotion } = context.conditions;

                const distance = reduceMotion ? 0 : isMobile ? 18 : 40;
                const duration = reduceMotion ? 0 : isMobile ? 0.5 : 0.8;

                const section = sectionRef.current;
                const heading = section.querySelector('.process-heading');
                const grid = section.querySelector('.process-grid');

                // Heading animation
                gsap.from(heading.children, {
                    y: distance,
                    opacity: reduceMotion ? 1 : 0,
                    stagger: reduceMotion ? 0 : 0.1,
                    duration,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        once: true,
                    },
                });

                // Process cards animation
                gsap.from(grid.querySelectorAll('.process-card'), {
                    y: distance,
                    opacity: reduceMotion ? 1 : 0,
                    stagger: reduceMotion ? 0 : isMobile ? 0.1 : 0.15,
                    duration,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 90%',
                        once: true,
                    },
                });

                // Desktop connector animation only
                if (!isMobile && !reduceMotion) {
                    gsap.from(
                        grid.querySelector('.process-connector'),
                        {
                            scaleX: 0,
                            transformOrigin: 'left center',
                            duration: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: grid,
                                start: 'top 85%',
                                once: true,
                            },
                        }
                    );
                }
            },
            sectionRef
        );

        return () => mm.revert();
    }, []);

    const steps = [
        {
            number: '01',
            icon: <CloudRain size={32} />,
            title: 'Collect',
            subtitle: 'Capture The Rain',
            description:
                'Collect rainwater from rooftops and suitable surfaces through a properly designed collection system.',
            image:
                'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=75',
        },
        {
            number: '02',
            icon: <Database size={32} />,
            title: 'Store',
            subtitle: 'Preserve Every Drop',
            description:
                'Channel collected rainwater into appropriate storage tanks for responsible future utilization.',
            image:
                'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=75',
        },
        {
            number: '03',
            icon: <Sprout size={32} />,
            title: 'Utilize',
            subtitle: 'Give Water A Purpose',
            description:
                'Use stored rainwater for gardening, plant watering, outdoor washing and other suitable non-drinking purposes.',
            image:
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=75',
        },
    ];

    return (
        <section
            className="process-section"
            id="process"
            ref={sectionRef}
        >
            <div className="process-container">

                <div className="process-heading">

                    <span className="section-eyebrow">
                        <span></span> THE PROCESS
                    </span>

                    <h2>
                        From Rainfall
                        <br />
                        To <em>Real Impact.</em>
                    </h2>

                    <p>
                        A simple process can make a remarkable difference.
                        Every drop collected today can contribute to a more
                        sustainable tomorrow.
                    </p>

                </div>

                <div className="process-grid">

                    <div className="process-connector"></div>

                    {steps.map((step) => (
                        <div
                            className="process-card"
                            key={step.number}
                        >

                            <div className="process-image-wrapper">

                                <img
                                    src={step.image}
                                    alt={step.subtitle}
                                    loading="lazy"
                                    decoding="async"
                                />

                                <span className="process-number">
                                    {step.number}
                                </span>

                                <div className="process-icon">
                                    {step.icon}
                                </div>

                            </div>

                            <div className="process-card-content">

                                <span>{step.subtitle}</span>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                                <div className="process-card-bottom">
                                    <span>RAIN BANK PROCESS</span>
                                    <ArrowUpRight size={19} />
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                <div className="process-message">

                    <div className="process-message-icon">
                        <ArrowDown size={20} />
                    </div>

                    <p>
                        Collect responsibly. Store carefully. Utilize wisely.
                    </p>

                </div>

            </div>
        </section>
    );
}
