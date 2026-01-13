import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MagicalButton from './shared/MagicalButton';
import { Sparkles, Scroll } from 'lucide-react';

const Hero = () => {
    const text = "Software Wizard";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= text.length) {
                setDisplayText(text.slice(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Ambience handled by ParticleSystem globally, but specific Hero elements here */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,rgba(10,10,10,0)_70%)]" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-6"
                >
                    <p className="text-hp-gold-dim font-harry tracking-[0.2em] text-lg mb-4">The Portfolio of</p>
                    <h1 className="text-6xl md:text-8xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-hp-gold to-yellow-700 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        Yuvraj Singh
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="h-12 mb-8"
                >
                    <p className="text-2xl md:text-3xl text-hp-parchment font-body font-light">
                        I am a <span className="text-hp-gold font-semibold">{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <MagicalButton
                        icon={Scroll}
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Spells (Projects)
                    </MagicalButton>

                    <MagicalButton
                        className='!bg-transparent !border-hp-parchment text-hp-parchment hover:!bg-hp-parchment/10'
                        icon={Sparkles}
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Send Owl (Contact)
                    </MagicalButton>
                </motion.div>
            </div>

            {/* Floating Elements (e.g. Golden Snitch placeholder or just mystical shapes) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 opacity-20 hidden md:block"
            >
                <img src="https://img.icons8.com/ios/100/d4af37/deathly-hallows.png" alt="Relics" className="w-24 h-24" />
            </motion.div>
        </section>
    );
};

export default Hero;
