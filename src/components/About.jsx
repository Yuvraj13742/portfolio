import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-harry text-hp-gold text-center mb-16"
                >
                    About The Wizard
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-hp-parchment/5 p-8 rounded-lg border border-hp-gold/30 backdrop-blur-sm relative group"
                    >
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-hp-gold" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-hp-gold" />

                        <p className="text-hp-parchment leading-loose text-lg font-body">
                            I am a passionate <span className="text-hp-gold">Software Developer</span> dedicated to crafting magical digital experiences.
                            Like a wizard mastering spells, I have honed my skills in React, Vite, and modern CSS to bring creative visions to life.
                            <br /><br />
                            My journey began in the muggle world of basic HTML, but I soon discovered the magic of component-based architecture and interactive UI.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Simple visual representation if no image is ready */}
                        <div className="w-full h-80 border-2 border-hp-gold rounded-full flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-hp-gold/10 animate-pulse" />
                            <span className="text-6xl">🧙‍♂️</span>
                            <div className="absolute inset-0 border-4 border-hp-dark rounded-full animate-spin-slow border-t-hp-gold border-r-transparent border-b-hp-gold border-l-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
