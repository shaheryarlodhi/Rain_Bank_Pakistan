
import { useEffect, useRef } from 'react';
import {
    MapPin,
    Sprout,
    Droplets,
    ArrowUpRight,
    Leaf,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.work-image', {
                x: -60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.work-content > *', {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="work-section" id="work" ref={sectionRef}>

            <div className="work-container">

                <div className="work-image-wrapper">
                    <img
                        className="work-image"
                        src="/images/garden.webp"
                        width="1200"
                        height="800"
                        alt="Green vegetable garden with thriving plants"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="work-image-overlay">
                        <span>OUR FIRST PRACTICAL INITIATIVE</span>
                        <h3>Growing Green,<br />Saving Water.</h3>
                    </div>

                    <div className="work-image-badge">
                        <Sprout size={25} />
                        <span>Kitchen Garden</span>
                    </div>
                </div>

                <div className="work-content">

                    <span className="section-eyebrow light">
                        <span></span> OUR PRACTICAL WORK
                    </span>

                    <span className="work-location">
                        <MapPin size={16} />
                        INTERNATIONAL ISLAMIC UNIVERSITY ISLAMABAD
                    </span>

                    <h2>
                        Small Actions.
                        <br />
                        <em>Meaningful Impact.</em>
                    </h2>

                    <p className="work-lead">
                        Turning the idea of rainwater conservation into
                        a practical reality.
                    </p>

                    <p className="work-description">
                        At the International Islamic University Islamabad
                        (IIUI), Rain Bank Pakistan has demonstrated the
                        practical use of harvested rainwater through
                        the establishment of a Kitchen Garden.
                    </p>

                    <p className="work-description">
                        Stored rainwater was successfully utilized for
                        gardening, showing how collected rainfall can
                        become a useful resource for nurturing plants
                        and supporting greener spaces.
                    </p>

                    <div className="work-highlights">

                        <div>
                            <Droplets size={22} />
                            <span>Harvested Rainwater</span>
                        </div>

                        <div>
                            <Leaf size={22} />
                            <span>Kitchen Garden</span>
                        </div>

                    </div>

                    <a href="#future" className="work-link">
                        Discover Our Future Goals
                        <ArrowUpRight size={19} />
                    </a>

                </div>

            </div>
        </section>
    );
}
