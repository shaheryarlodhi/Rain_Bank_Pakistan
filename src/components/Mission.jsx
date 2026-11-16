
import { useEffect, useRef } from 'react';
import {
    Home,
    Database,
    Sprout,
    Megaphone,
    Users,
    Leaf,
    ArrowUpRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.mission-heading', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.mission-card', {
                y: 45,
                opacity: 0,
                duration: 0.7,
                stagger: 0.13,
                scrollTrigger: {
                    trigger: '.mission-grid',
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const missions = [
        {
            icon: <Home size={27} />,
            number: '01',
            title: 'Household Harvesting',
            description:
                'Promote rainwater harvesting at household and institutional levels.',
        },
        {
            icon: <Database size={27} />,
            number: '02',
            title: 'Collection & Storage',
            description:
                'Encourage the proper collection and safe storage of rainwater.',
        },
        {
            icon: <Sprout size={27} />,
            number: '03',
            title: 'Practical Utilization',
            description:
                'Promote harvested rainwater for cleaning, washing and gardening.',
        },
        {
            icon: <Megaphone size={27} />,
            number: '04',
            title: 'Public Awareness',
            description:
                'Create awareness through educational campaigns and community engagement.',
        },
        {
            icon: <Users size={27} />,
            number: '05',
            title: 'Community Participation',
            description:
                'Mobilize communities to become active participants in water conservation.',
        },
        {
            icon: <Leaf size={27} />,
            number: '06',
            title: 'Sustainable Development',
            description:
                'Support responsible water management for a sustainable future.',
        },
    ];

    return (
        <section className="mission-section" id="mission" ref={sectionRef}>

            <div className="mission-container">

                <div className="mission-heading">
                    <span className="section-eyebrow">
                        <span></span> WHAT WE STAND FOR
                    </span>

                    <div className="mission-title-row">
                        <h2>
                            Our Mission,
                            <br />
                            <em>Our Responsibility.</em>
                        </h2>

                        <p>
                            Real change begins with simple actions.
                            We are committed to making rainwater
                            conservation a shared responsibility.
                        </p>
                    </div>
                </div>

                <div className="mission-grid">
                    {missions.map((item) => (
                        <div className="mission-card" key={item.number}>

                            <div className="mission-card-top">
                                <div className="mission-icon">
                                    {item.icon}
                                </div>
                                <span>{item.number}</span>
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <div className="mission-card-bottom">
                                <span>OUR COMMITMENT</span>
                                <ArrowUpRight size={19} />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
