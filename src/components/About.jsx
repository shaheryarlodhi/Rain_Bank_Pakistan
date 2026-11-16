
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-image', {
                x: -60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.about-content > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="about-container">

                <div className="about-visual">
                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1000&q=85"
                        alt="Natural waterfall surrounded by greenery"
                    />

                    <div className="about-image-label">
                        <Droplets size={23} />
                        <div>
                            <strong>Protect Every Drop</strong>
                            <span>Preserve Our Future</span>
                        </div>
                    </div>

                    <div className="about-image-number">01</div>
                </div>

                <div className="about-content">

                    <span className="section-eyebrow">
                        <span></span> WHO WE ARE
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

                    <a href="#work" className="about-link">
                        Explore Our Initiative
                        <ArrowUpRight size={19} />
                    </a>

                </div>
            </div>
        </section>
    );
}
