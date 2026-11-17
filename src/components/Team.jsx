
import { useEffect, useRef } from 'react';
import { Lightbulb, Sprout, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Generic illustrated avatar — not a real person's photograph
function FemaleAvatar({
    hijab = false,
    hair = '#292321',
    outfit = '#174b35',
    background = '#dce9cb',
}) {
    return (
        <svg
            viewBox="0 0 120 120"
            className="female-avatar-svg"
            role="img"
            aria-label="Illustrated female avatar"
        >
            <circle cx="60" cy="60" r="59" fill={background} />

            {/* Hair behind face */}
            {!hijab && (
                <path
                    d="M25 57 Q22 14 60 14 Q99 15 96 61
                       L91 104 L29 104 Z"
                    fill={hair}
                />
            )}

            {/* Neck */}
            <path
                d="M48 77 L48 94 Q60 103 72 94 L72 77"
                fill="#e9b99b"
            />

            {/* Face */}
            <ellipse
                cx="60"
                cy="53"
                rx="24"
                ry="31"
                fill="#f2c8a9"
            />

            {/* Hair framing face */}
            {!hijab && (
                <>
                    <path
                        d="M36 47 Q34 17 60 17 Q86 17 84 47
                           Q77 31 68 29 Q50 40 36 47"
                        fill={hair}
                    />
                    <path
                        d="M37 48 Q29 64 37 87 L28 98
                           Q18 70 25 46 Z"
                        fill={hair}
                    />
                    <path
                        d="M83 48 Q92 65 83 87 L92 98
                           Q102 68 95 45 Z"
                        fill={hair}
                    />
                </>
            )}

            {/* Hijab */}
            {hijab && (
                <>
                    <path
                        d="M26 59 Q22 8 60 8 Q98 8 94 59
                           L104 111 Q83 103 60 109
                           Q37 103 16 111 Z"
                        fill={outfit}
                    />
                    <path
                        d="M37 52 Q33 18 60 17 Q87 18 83 52
                           Q80 79 60 92 Q40 79 37 52"
                        fill="#f3e9d9"
                    />
                    <path
                        d="M36 62 Q37 92 60 103 Q83 92 84 62
                           Q91 88 100 111 Q60 125 20 111 Z"
                        fill={outfit}
                    />
                </>
            )}

            {/* Simple facial details */}
            <path
                d="M48 55 Q52 58 55 55"
                fill="none"
                stroke="#49352e"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M65 55 Q69 58 72 55"
                fill="none"
                stroke="#49352e"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M55 69 Q60 73 65 69"
                fill="none"
                stroke="#b66f65"
                strokeWidth="1.6"
                strokeLinecap="round"
            />

            {/* Outfit */}
            <path
                d="M17 120 Q20 91 45 88
                   L60 101 L75 88
                   Q100 91 103 120 Z"
                fill={outfit}
            />
            <path
                d="M47 91 L60 104 L73 91
                   L68 120 L52 120 Z"
                fill="#fffaf0"
            />
        </svg>
    );
}

const teamMembers = [
    {
        name: 'Ayesha Saleem',
        role: 'Managing Director',
        hijab: false,
        hair: '#292321',
        outfit: '#174b35',
    },
    {
        name: 'Wajeeha Farhat',
        role: 'Co-Managing Director',
        hijab: true,
        outfit: '#202d28',
        background: '#e5ead9',
    },
    {
        name: 'Saba Shah',
        role: 'Director Administration',
        hijab: false,
        hair: '#382a25',
        outfit: '#245b43',
    },
    {
        name: 'Aiza Afzaal',
        role: 'Director Marketing',
        hijab: false,
        hair: '#211e1d',
        outfit: '#174b35',
    },
    {
        name: 'Saliha Sabbih',
        role: 'Director Coordination',
        hijab: true,
        outfit: '#7b8463',
        background: '#e8ecd9',
    },
    {
        name: 'Rukha',
        role: 'Director of Production',
        hijab: false,
        hair: '#392b27',
        outfit: '#315a42',
    },
    {
        name: 'Irsa Saman',
        role: 'HR Director',
        hijab: true,
        outfit: '#202d28',
        background: '#e4ebd9',
    },
    {
        name: 'Suniya Iqbal',
        role: 'Additional Director HR',
        hijab: false,
        hair: '#342723',
        outfit: '#245b43',
    },
    {
        name: 'Hajra Malik',
        role: 'Additional Director Marketing',
        hijab: true,
        outfit: '#a49b82',
        background: '#e8ecd9',
    },
];

export default function Team() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.ideas-heading > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ideas-heading',
                    start: 'top 85%',
                    once: true,
                },
            });

            gsap.from('.ideas-intro', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ideas-intro',
                    start: 'top 85%',
                    once: true,
                },
            });

            gsap.from('.ideas-mentor-card', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ideas-mentor-card',
                    start: 'top 85%',
                    once: true,
                },
            });

            gsap.from('.ideas-member-card', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ideas-members-grid',
                    start: 'top 85%',
                    once: true,
                },
            });

            gsap.from('.ideas-quote', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.ideas-quote',
                    start: 'top 90%',
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="team-section ideas-team-section" id="team" ref={sectionRef}>
            <div className="team-container ideas-team-container">

                {/* Heading */}
                <div className="ideas-heading">
                    <span className="section-eyebrow">
                        <span></span>
                        THE PEOPLE BEHIND THE PURPOSE
                    </span>

                    <div className="ideas-main-heading">
                        <h2>
                            Meet the
                            <br />
                            <em>Ideas Lab Organization.</em>
                        </h2>

                        <div className="ideas-heading-icon">
                            <Lightbulb size={35} />
                        </div>
                    </div>
                </div>

                {/* About Ideas Lab */}
                <div className="ideas-intro">
                    <div className="ideas-intro-icon">
                        <Sprout size={43} />
                    </div>

                    <div className="ideas-intro-content">
                        <span>ABOUT IDEAS LAB</span>

                        <h3>
                            Innovation, Leadership & Meaningful Change.
                        </h3>

                        <p>
                            Ideas Lab is an organization dedicated to
                            innovation, leadership, and meaningful
                            initiatives for a sustainable future. As the
                            organizational platform behind Rain Bank
                            Pakistan, Ideas Lab brings together dedicated
                            individuals working towards water conservation,
                            community awareness, and positive environmental
                            change.
                        </p>
                    </div>
                </div>

                {/* Mentor */}
                <div className="ideas-mentor-section">
                    <div className="ideas-subheading">
                        <span></span>
                        <p>OUR MENTOR</p>
                        <span></span>
                    </div>

                    <div className="ideas-mentor-card">
                        <div className="ideas-mentor-avatar">
                            <FemaleAvatar
                                hijab
                                outfit="#174b35"
                                background="#dce9cb"
                            />
                        </div>

                        <div className="ideas-mentor-info">
                            <h3>Prof. Dr. Noreen Saher</h3>
                            <span>PROJECT MENTOR</span>
                            <p>
                                Guiding the vision towards meaningful
                                environmental impact and sustainable change.
                            </p>
                        </div>

                        <div className="ideas-mentor-decoration">
                            <Sprout size={65} />
                        </div>
                    </div>
                </div>

                {/* Members */}
                <div className="ideas-members-heading">
                    <span>THE PEOPLE MAKING IT HAPPEN</span>
                    <h2>
                        Team <em>Ideas Lab</em>
                    </h2>
                </div>

                <div className="ideas-members-grid">
                    {teamMembers.map((member, index) => (
                        <article className="ideas-member-card" key={member.name}>
                            <div className="ideas-member-avatar">
                                <FemaleAvatar
                                    hijab={member.hijab}
                                    hair={member.hair}
                                    outfit={member.outfit}
                                    background={member.background || '#dce9cb'}
                                />
                            </div>

                            <div className="ideas-member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Closing Quote */}
                <div className="ideas-quote">
                    <HeartHandshake size={27} />
                    <p>
                        Together, we turn ideas into action and action
                        into meaningful change.
                    </p>
                </div>

            </div>
        </section>
    );
}
