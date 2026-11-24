import { useState } from 'react';
import { Droplets, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Work', href: '#work' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Our Team', href: '#team' },
    ];

    return (
        <header className="navbar">
            <a href="#home" className="brand">
                <span className="brand-icon">
                    <Droplets size={25} strokeWidth={2} />
                </span>

                <span className="brand-text">
                    <strong>RAIN BANK</strong>
                    <small>PAKISTAN</small>
                </span>
            </a>

            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}

                <a
                    href="#contact"
                    className="nav-contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Get Involved <ArrowUpRight size={17} />
                </a>
            </nav>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
        </header>
    );
}
