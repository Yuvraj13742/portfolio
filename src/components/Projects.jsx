import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import MagicalButton from './shared/MagicalButton';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-harry text-hp-gold text-center mb-16"
                >
                    Magical Inventions
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-hp-dark border border-hp-gold/30 rounded-lg overflow-hidden flex flex-col group relative"
                        >
                            {/* Image Overlay */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-hp-gold/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-harry text-hp-gold mb-2">{project.title}</h3>
                                <p className="text-hp-parchment/80 text-sm mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs border border-hp-gold/30 px-2 py-1 rounded text-hp-gold-dim">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} className="text-hp-parchment hover:text-hp-gold transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="text-hp-parchment hover:text-hp-gold transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
