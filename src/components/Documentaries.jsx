
import { useEffect, useRef } from 'react';
import {
    ArrowUpRight,
    Play,
    Clapperboard,
    Droplets,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videoTopics = [
    {
        number: '01',
        title: 'Understanding Rainwater Harvesting',
        description:
            'Discover how rainwater can be collected, stored and reused for everyday non-drinking purposes.',
        category: 'RAINWATER HARVESTING',
        search: 'rainwater harvesting educational documentary',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=900&q=85',
    },
    {
        number: '02',
        title: 'The Importance of Water Conservation',
        description:
            'Explore why responsible water use and conservation matter for our communities and future.',
        category: 'WATER CONSERVATION',
        search: 'water conservation awareness documentary',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=85',
    },
    {
        number: '03',
        title: 'Greener Spaces, Sustainable Living',
        description:
            'Learn how responsible water use can support gardening, plants and greener surroundings.',
        category: 'SUSTAINABLE LIVING',
        search: 'sustainable gardening water conservation video',
        image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=900&q=85',
    },
];

export default function Documentaries() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.documentary-heading > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.documentary-card', {
                y: 45,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.documentary-grid',
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="documentary-section"
            id="documentaries"
            ref={sectionRef}
        >
            <div className="documentary-container">

                <div className="documentary-heading">
                    <span className="section-eyebrow light">
                        <span></span> WATCH & LEARN
                    </span>

                    <div className="documentary-title-row">
                        <h2>
                            Stories That
                            <br />
                            <em>Inspire Change.</em>
                        </h2>

                        <p>
                            Knowledge creates awareness, and awareness
                            inspires action. Explore educational topics
                            that help us understand the importance of
                            protecting every drop.
                        </p>
                    </div>
                </div>

                <div className="documentary-grid">
                    {videoTopics.map((video) => (
                        <a
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.search)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="documentary-card"
                            key={video.number}
                        >
                            <div className="documentary-image">
                                <img src={video.image} alt={video.title} loading="lazy" decoding="async" />

                                <div className="documentary-play">
                                    <Play size={22} fill="currentColor" />
                                </div>

                                <span className="documentary-number">
                                    {video.number}
                                </span>
                            </div>

                            <div className="documentary-content">
                                <span>{video.category}</span>

                                <h3>{video.title}</h3>

                                <p>{video.description}</p>

                                <div className="documentary-link">
                                    <span>EXPLORE VIDEOS</span>
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="documentary-note">
                    <div className="documentary-note-icon">
                        <Clapperboard size={23} />
                    </div>

                    <div>
                        <h3>Awareness Begins With Knowledge</h3>
                        <p>
                            Learn, share and inspire others to make
                            responsible water conservation a daily habit.
                        </p>
                    </div>

                    <Droplets className="documentary-water-icon" size={45} />
                </div>

            </div>
        </section>
    );
}
