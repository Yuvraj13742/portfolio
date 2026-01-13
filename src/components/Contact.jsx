import { motion } from 'framer-motion';
import MagicalButton from './shared/MagicalButton';
import { Mail, Github, Linkedin, Instagram, FileDown } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Footer Mist/Fog */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-hp-gold/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-harry text-hp-gold mb-12"
                >
                    Send an Owl
                </motion.h2>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-hp-parchment/5 border border-hp-gold/20 p-8 rounded-lg max-w-2xl mx-auto backdrop-blur-sm"
                >
                    <p className="text-hp-parchment text-lg mb-8 font-body">
                        Whether you want to collaborate on a spell-binding project or just discuss the latest Quidditch match, my owlery is always open.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <a href="https://github.com/Yuvraj13742" target="_blank" rel="noopener noreferrer">
                            <MagicalButton icon={Github}>GitHub</MagicalButton>
                        </a>
                        <a href="https://www.linkedin.com/in/yuvraj-singh-a29272297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <MagicalButton icon={Linkedin}>LinkedIn</MagicalButton>
                        </a>
                        <a href="https://www.instagram.com/yuvraj_syngh_?igsh=NHp0ZGFyazNvMA==" target="_blank" rel="noopener noreferrer">
                            <MagicalButton icon={Instagram}>Instagram</MagicalButton>
                        </a>
                    </div>

                    <div className="flex justify-center flex-col items-center gap-4">
                        <p className="text-hp-gold-dim text-sm italic">Looking for the full parchment?</p>
                        <a href="/resume.pdf" download="Yuvraj_Singh_CV.pdf">
                            <MagicalButton icon={FileDown} className="!bg-hp-gold !text-hp-dark !font-bold hover:!bg-white">
                                Download Resume
                            </MagicalButton>
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-20 text-hp-parchment/40 text-sm">
                    <p>© {new Date().getFullYear()} Yuvraj Singh. Mischief Managed.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
