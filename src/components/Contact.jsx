
import { useEffect, useRef, useState } from 'react';
import {
    ArrowUpRight,
    Droplets,
    Mail,
    MapPin,
    Handshake,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Frontend confirmation only.
        // Email/backend integration will be added later.
        setSubmitted(true);
        e.target.reset();
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-content > *', {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });

            gsap.from('.contact-form-card', {
                x: 40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>
            <div className="contact-container">

                {/* LEFT CONTENT */}

                <div className="contact-content">
                    <span className="section-eyebrow light">
                        <span></span> GET IN TOUCH
                    </span>

                    <h2>
                        Let's Make
                        <br />
                        Every Drop <em>Count.</em>
                    </h2>

                    <p className="contact-lead">
                        Have an idea, want to collaborate or interested
                        in promoting rainwater harvesting?
                        We'd love to hear from you.
                    </p>

                    <p className="contact-description">
                        Connect with Rain Bank Pakistan and become
                        part of the movement towards responsible
                        water use, rainwater harvesting and
                        sustainable communities.
                    </p>

                    <div className="contact-info-list">

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <MapPin size={20} />
                            </div>

                            <div>
                                <span>OUR LOCATION</span>
                                <p>Islamabad, Pakistan</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <Handshake size={20} />
                            </div>

                            <div>
                                <span>WORK WITH US</span>
                                <p>Partnerships & Collaborations</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <Mail size={20} />
                            </div>

                            <div>
                                <span>GENERAL INQUIRIES</span>
                                <p>Send us a message using the form</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT CONTACT FORM */}

                <div className="contact-form-card">

                    <div className="contact-form-heading">
                        <div>
                            <span>LET'S CONNECT</span>
                            <h3>Send Us a Message</h3>
                        </div>

                        <div className="contact-form-icon">
                            <Droplets size={25} />
                        </div>
                    </div>

                    {submitted && (
                        <div className="form-success">
                            <strong>Thank you for reaching out!</strong>
                            <p>
                                Your form has been submitted in this
                                demo. Email delivery will be enabled
                                after backend integration.
                            </p>
                        </div>
                    )}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name">
                                    Your Name *
                                </label>

                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">
                                    Email Address *
                                </label>

                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-phone">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    placeholder="Optional"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-organization">
                                    Organization
                                </label>

                                <input
                                    type="text"
                                    id="contact-organization"
                                    name="organization"
                                    placeholder="Your organization"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject">
                                Subject *
                            </label>

                            <select
                                id="contact-subject"
                                name="subject"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select a subject
                                </option>

                                <option value="Collaboration">
                                    Collaboration
                                </option>

                                <option value="Partnership">
                                    Institutional Partnership
                                </option>

                                <option value="Rainwater Harvesting">
                                    Rainwater Harvesting
                                </option>

                                <option value="Awareness">
                                    Awareness & Campaigns
                                </option>

                                <option value="General Inquiry">
                                    General Inquiry
                                </option>

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">
                                Your Message *
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Tell us how we can work together..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-button">
                            Submit Message
                            <ArrowUpRight size={19} />
                        </button>

                        <p className="form-note">
                            * Required fields
                        </p>

                    </form>

                </div>

            </div>
        </section>
    );
}
