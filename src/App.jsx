import { lazy, Suspense, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmoothScroll from './components/SmoothScroll';

import './App.css';

// Everything below the hero is loaded in separate chunks.
const About = lazy(() => import('./components/About'));
const Vision = lazy(() => import('./components/Vision'));
const Mission = lazy(() => import('./components/Mission'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const OurWork = lazy(() => import('./components/OurWork'));
const Gallery = lazy(() => import('./components/Gallery'));
const Documentaries = lazy(() => import('./components/Documentaries'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Mounts only after every lazy section has loaded, then re-measures scroll triggers.
function SectionsReady() {
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}

function App() {
  return (
    <SmoothScroll>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div style={{ minHeight: '100vh' }} aria-hidden="true" />}>
          <About />
          <Vision />
          <Mission />
          <HowItWorks />
          <OurWork />
          <Gallery />
          <Documentaries />
          <Team />
          <Contact />
          <SectionsReady />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </SmoothScroll>
  );
}

export default App;
