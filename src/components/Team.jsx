
import { useEffect, useRef } from 'react';
import {
    Users,
    Sprout,
    Megaphone,
    Handshake,
    ArrowUpRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamRoles = [
    {
        icon: <Sprout size={27} />,
        number: '01',
        title: 'Project Coordination',
        description:
            'Supporting the planning and coordination of rainwater harvesting initiatives and practical activities.',
    },
    {
        icon: <Megaphone size={27} />,
        number: '02',
        title: 'Awareness & Outreach',
        description:
            'Promoting water conservation through educational activities, awareness campaigns and community engagement.',
    },
    {
        icon: <Handshake size={27} />,
        number: '03',
        title: 'Community Collaboration',
        description:
            'Encouraging households, institutions and partners to participate in sustainable water management.',
    },
];

export default function Team() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.team-heading > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.team-card', {
                y: 45,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.team-grid',
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="team-section" id="team" ref={sectionRef}>
            <div className="team-container">

                <div className="team-heading">
                    <span className="section-eyebrow">
                        <span></span> PEOPLE BEHIND THE PURPOSE
                    </span>

                    <div className="team-title-row">
                        <h2>
                            United By Purpose,
                            <br />
                            <em>Driven By Change.</em>
                        </h2>

                        <p>
                            Meaningful change happens when people come
                            together. Rain Bank Pakistan encourages
                            collaboration, shared responsibility and
                            collective action for water conservation.
                        </p>
                    </div>
                </div>

                <div className="team-grid">
                    {teamRoles.map((role) => (
                        <div className="team-card" key={role.number}>

                            <div className="team-card-top">
                                <div className="team-role-icon">
                                    {role.icon}
                                </div>
                                <span>{role.number}</span>
                            </div>

                            <h3>{role.title}</h3>

                            <p>{role.description}</p>

                            <div className="team-card-bottom">
                                <span>WORKING TOGETHER</span>
                                <Users size={19} />
                            </div>

                        </div>
                    ))}
                </div>

                <div className="team-quote">
                    <span>“</span>
                    <p>
                        Every meaningful drop of change begins
                        with people who care.
                    </p>
                </div>

            </div>
        </section>
    );
}
