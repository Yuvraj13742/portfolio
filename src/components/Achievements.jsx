import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "2nd Runner-up",
            event: "Internal Smart India Hackathon (SIH) 2025",
            image: "/WhatsApp Image 2026-01-13 at 9.47.52 PM.jpeg",
            house: "gryffindor",
            position: "2nd",
            description: "Demonstrated exceptional problem-solving skills and innovation"
        },
        {
            id: 2,
            title: "3rd Runner-up",
            event: "Hack-CSE Hackathon by SIT",
            image: "/WhatsApp Image 2026-01-13 at 9.47.53 PM.jpeg",
            house: "ravenclaw",
            position: "3rd",
            description: "Showcased technical excellence and creative solutions"
        }
    ];

    return (
        <section id="achievements" className="min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Magical Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Floating Golden Snitches */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-8 h-8 opacity-20"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    >
                        <Sparkles className="w-full h-full text-hp-gold" />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Trophy className="w-12 h-12 text-hp-gold" />
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-harry text-transparent bg-clip-text bg-gradient-to-r from-hp-gold via-yellow-500 to-hp-gold">
                            House Cup Victories
                        </h2>
                        <motion.div
                            animate={{ rotate: [0, -15, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Award className="w-12 h-12 text-hp-gold" />
                        </motion.div>
                    </div>
                    <p className="text-hp-parchment/80 text-lg font-body">
                        Magical Achievements & Honors Bestowed
                    </p>
                </motion.div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 50, rotateY: -20 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* Magical Border Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-hp-gold via-yellow-500 to-hp-gold rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500" />

                            {/* Card Content */}
                            <div className="relative bg-gradient-to-br from-hp-dark via-gray-900 to-hp-dark border-2 border-hp-gold/30 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Trophy Icon Overlay */}
                                <div className="absolute top-4 right-4 z-20">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="bg-hp-gold/20 backdrop-blur-sm p-3 rounded-full border border-hp-gold/50"
                                    >
                                        <Trophy className="w-8 h-8 text-hp-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                                    </motion.div>
                                </div>

                                {/* Image Container */}
                                <div className="relative h-72 md:h-80 overflow-hidden">
                                    {/* Magical Shimmer Effect */}
                                    <motion.div
                                        className="absolute inset-0 z-10"
                                        animate={{
                                            background: [
                                                'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)',
                                                'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)'
                                            ],
                                            x: ['-100%', '200%']
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    <img
                                        src={achievement.image}
                                        alt={achievement.event}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-hp-dark via-hp-dark/50 to-transparent" />
                                </div>

                                {/* Achievement Details */}
                                <div className="p-6 relative">
                                    {/* Position Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                                        className="inline-block mb-3"
                                    >
                                        <div className="bg-gradient-to-r from-hp-gold to-yellow-600 text-hp-dark px-4 py-1 rounded-full font-harry text-sm font-bold shadow-lg">
                                            {achievement.position} Place
                                        </div>
                                    </motion.div>

                                    <h3 className="text-2xl md:text-3xl font-harry text-hp-gold mb-2 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                                        {achievement.title}
                                    </h3>

                                    <p className="text-hp-parchment font-body text-lg mb-3 font-semibold">
                                        {achievement.event}
                                    </p>

                                    <p className="text-hp-parchment/70 font-body text-sm">
                                        {achievement.description}
                                    </p>

                                    {/* Magical Sparkles on Hover */}
                                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-hp-gold rounded-full"
                                                animate={{
                                                    scale: [0, 1, 0],
                                                    opacity: [0, 1, 0],
                                                    x: [0, (i - 1) * 20],
                                                    y: [0, -20 - i * 10]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-hp-gold/60 font-harry text-xl italic">
                        "It is our choices that show what we truly are, far more than our abilities."
                    </p>
                    <p className="text-hp-parchment/40 font-body text-sm mt-2">
                        — Albus Dumbledore
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
