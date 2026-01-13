import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleSystem from './components/shared/ParticleSystem';
import WandCursor from './components/shared/WandCursor';
import Dementors from './components/shared/Dementors';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading "Lumos" effect
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-hp-dark flex items-center justify-center z-[10000]">
                <div className="text-center">
                    <h1 className="text-6xl font-harry text-hp-gold animate-pulse mb-4">Lumos...</h1>
                    <div className="w-16 h-16 border-4 border-hp-gold border-t-transparent rounded-full animate-spin mx-auto" />
                </div>
            </div>
        )
    }

    return (
        <div className="bg-hp-dark min-h-screen text-hp-parchment font-body selection:bg-hp-gold selection:text-hp-dark relative">
            <WandCursor />
            <ParticleSystem />
            <Dementors />

            <Navigation />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Noise Texture Overlay for ancient feel (optional, using CSS if preferred) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
        </div>
    );
}

export default App;
