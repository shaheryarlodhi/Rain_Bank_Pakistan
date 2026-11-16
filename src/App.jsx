
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import OurWork from './components/OurWork';
import Gallery from './components/Gallery';
import Documentaries from './components/Documentaries';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

import './App.css';

function App() {
  return (
    <SmoothScroll>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Vision />
        <Mission />
        <HowItWorks />
        <OurWork />
        <Gallery />
        <Documentaries />
        <Team />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
