
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Images } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
    {
        image: '/images/waterfall.webp', width: 1000, height: 1500,
        title: 'The Beauty of Water',
        category: 'NATURE & WATER',
        size: 'large',
    },
    {
        image: '/images/garden.webp', width: 1200, height: 800,
        title: 'Growing a Greener Future',
        category: 'GARDENING',
        size: 'small',
    },
    {
        image: '/images/img-1518.webp', width: 800, height: 533,
        title: 'Every Drop Matters',
        category: 'WATER CONSERVATION',
        size: 'small',
    },
    {
        image: '/images/img-1530.webp', width: 800, height: 600,
        title: 'Responsible Water Use',
        category: 'SUSTAINABILITY',
        size: 'small',
    },
    {
        image: '/images/img-1501004.webp', width: 1000, height: 751,
        title: 'Nature in Every Corner',
        category: 'GREEN LIVING',
        size: 'large',
    },
];

export default function Gallery() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-heading > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.gallery-item', {
                y: 45,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.gallery-grid',
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="gallery-section" id="gallery" ref={sectionRef}>
            <div className="gallery-container">

                <div className="gallery-heading">
                    <span className="section-eyebrow">
                        <span></span> MOMENTS THAT MATTER
                    </span>

                    <div className="gallery-title-row">
                        <h2>
                            A Closer Look at
                            <br />
                            <em>Our Natural World.</em>
                        </h2>

                        <p>
                            Explore the beauty of water, nature and
                            sustainable living. Every image tells a
                            story of why every drop deserves care.
                        </p>
                    </div>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <a
                            href={item.image}
                            target="_blank"
                            rel="noreferrer"
                            className={`gallery-item gallery-${item.size}`}
                            key={item.title}
                        >
                            <img src={item.image} alt={item.title} width={item.width} height={item.height} loading="lazy" decoding="async" />

                            <div className="gallery-overlay">
                                <span>{item.category}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <ArrowUpRight size={22} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="gallery-bottom">
                    <div className="gallery-bottom-icon">
                        <Images size={21} />
                    </div>

                    <p>
                        Celebrating nature. Inspiring conservation.
                        Building a water-conscious future.
                    </p>
                </div>

            </div>
        </section>
    );
}
