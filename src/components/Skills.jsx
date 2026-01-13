import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-hp-deep-black relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-harry text-hp-gold text-center mb-16"
                >
                    Magical Abilities
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-hp-dark border border-hp-gold/20 p-6 rounded-lg hover:border-hp-gold/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-hp-gold/10 rounded-full text-hp-gold">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-harry text-hp-parchment">{category.category}</h3>
                            </div>

                            <ul className="space-y-4">
                                {category.skills.map((skill) => (
                                    <li key={skill.name}>
                                        <div className="flex justify-between text-sm text-hp-parchment/80 mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-hp-gold/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-hp-gold to-yellow-600"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
