
import { useEffect, useRef } from 'react';
import { Eye, Droplets, Sprout, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.vision-heading, .vision-description, .vision-pill', {
                y: 35,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.vision-card', {
                y: 45,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.vision-cards',
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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

    return (
        <section className="vision-section" ref={sectionRef}>

            <div className="vision-container">

                <div className="vision-top">
                    <span className="section-eyebrow light">
                        <span></span> OUR VISION
                    </span>

                    <div className="vision-icon">
                        <Eye size={28} />
                    </div>
                </div>

                <h2 className="vision-heading">
                    A Future Where
                    <br />
                    <em>Every Drop Matters.</em>
                </h2>

                <p className="vision-description">
                    Our vision is to create a water-conscious society
                    where rainwater is recognized as a valuable resource
                    and every household and institution is encouraged
                    to adopt rainwater harvesting practices.
                </p>

                <div className="vision-pill">
                    <Droplets size={17} />
                    WATER CONSCIOUSNESS FOR EVERYONE
                </div>

                <div className="vision-cards">
                    {values.map((item, index) => (
                        <div className="vision-card" key={index}>
                            <div className="vision-card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <span className="vision-card-number">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
