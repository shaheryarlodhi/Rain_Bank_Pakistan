
import { Droplets, ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Mission', href: '#mission' },
        { name: 'Our Work', href: '#work' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Our Team', href: '#team' },
    ];

    return (
        <footer className="footer-section">

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand-area">
                        <a href="#home" className="footer-brand">
                            <Droplets size={30} />

                            <span>
                                <strong>RAIN BANK</strong>
                                <small>PAKISTAN</small>
                            </span>
                        </a>

                        <p>
                            Promoting rainwater harvesting,
                            responsible water use and a more
                            sustainable future for Pakistan.
                        </p>

                        <span className="footer-tagline">
                            EVERY DROP COUNTS. EVERY ACTION MATTERS.
                        </span>
                    </div>

                    <div className="footer-navigation">
                        <h4>EXPLORE</h4>

                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.name}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="footer-navigation">
                        <h4>GET INVOLVED</h4>

                        <a href="#contact">Collaborate With Us</a>
                        <a href="#contact">Community Engagement</a>
                        <a href="#documentaries">Awareness & Learning</a>
                        <a href="#work">Our Practical Work</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} Rain Bank Pakistan.
                        All rights reserved.
                    </p>

                    <a href="#home" className="back-to-top">
                        BACK TO TOP
                        <ArrowUp size={17} />
                    </a>
                </div>

            </div>

        </footer>
    );
}
