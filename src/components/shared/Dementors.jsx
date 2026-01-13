import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dementors = () => {
    const [dementors, setDementors] = useState([]);

    useEffect(() => {
        // Create initial dementors
        const initialDementors = Array.from({ length: 3 }, (_, i) => ({
            id: i,
            startY: Math.random() * 60 + 10, // Random vertical position (10-70%)
            duration: Math.random() * 20 + 25, // 25-45 seconds to cross screen
            delay: Math.random() * 10, // Stagger appearance
            size: Math.random() * 0.4 + 0.8, // Size variation (0.8-1.2)
        }));
        setDementors(initialDementors);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            <AnimatePresence>
                {dementors.map((dementor) => (
                    <motion.div
                        key={dementor.id}
                        className="absolute"
                        style={{
                            top: `${dementor.startY}%`,
                            left: '-15%',
                            transform: `scale(${dementor.size})`,
                        }}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{
                            x: ['0vw', '115vw'],
                            opacity: [0, 0.7, 0.7, 0],
                            y: [0, -30, -60, -40, -80, -50, -100], // Floating up and down
                        }}
                        transition={{
                            duration: dementor.duration,
                            delay: dementor.delay,
                            repeat: Infinity,
                            ease: 'linear',
                            y: {
                                duration: dementor.duration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }
                        }}
                    >
                        <DementorSVG />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

const DementorSVG = () => {
    return (
        <svg
            width="150"
            height="250"
            viewBox="0 0 150 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_40px_rgba(0,0,0,0.95)]"
        >
            {/* Misty dark aura - background */}
            <motion.ellipse
                cx="75"
                cy="125"
                rx="70"
                ry="110"
                fill="rgba(10, 10, 10, 0.4)"
                style={{ filter: 'blur(30px)' }}
                animate={{
                    rx: [70, 75, 70],
                    ry: [110, 115, 110],
                    opacity: [0.4, 0.5, 0.4]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Heavy hooded robe - main body */}
            <motion.path
                d="M 40 60 Q 35 100, 30 140 Q 25 180, 20 230 L 50 230 Q 52 180, 55 140 Q 58 100, 60 60 Z"
                fill="url(#darkRobe)"
                opacity="0.95"
                animate={{
                    d: [
                        "M 40 60 Q 35 100, 30 140 Q 25 180, 20 230 L 50 230 Q 52 180, 55 140 Q 58 100, 60 60 Z",
                        "M 40 60 Q 33 100, 28 140 Q 23 180, 18 230 L 48 230 Q 50 180, 53 140 Q 56 100, 60 60 Z",
                        "M 40 60 Q 35 100, 30 140 Q 25 180, 20 230 L 50 230 Q 52 180, 55 140 Q 58 100, 60 60 Z",
                    ]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.path
                d="M 60 60 Q 65 100, 70 140 Q 75 180, 80 230 L 110 230 Q 108 180, 105 140 Q 102 100, 100 60 Z"
                fill="url(#darkRobe)"
                opacity="0.95"
                animate={{
                    d: [
                        "M 60 60 Q 65 100, 70 140 Q 75 180, 80 230 L 110 230 Q 108 180, 105 140 Q 102 100, 100 60 Z",
                        "M 60 60 Q 67 100, 72 140 Q 77 180, 82 230 L 112 230 Q 110 180, 107 140 Q 104 100, 100 60 Z",
                        "M 60 60 Q 65 100, 70 140 Q 75 180, 80 230 L 110 230 Q 108 180, 105 140 Q 102 100, 100 60 Z",
                    ]
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            {/* Hood */}
            <ellipse
                cx="75"
                cy="35"
                rx="35"
                ry="40"
                fill="url(#darkRobe)"
                opacity="0.98"
            />

            {/* Deep hood shadow */}
            <ellipse
                cx="75"
                cy="40"
                rx="28"
                ry="30"
                fill="#000000"
                opacity="0.95"
            />

            {/* SCREAMING SKULL FACE */}
            {/* Skull outline */}
            <ellipse
                cx="75"
                cy="42"
                rx="18"
                ry="22"
                fill="#2a2a2a"
                opacity="0.9"
            />

            {/* Hollow eye sockets - LEFT */}
            <motion.ellipse
                cx="68"
                cy="38"
                rx="4"
                ry="6"
                fill="#000000"
                animate={{
                    ry: [6, 7, 6],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Hollow eye sockets - RIGHT */}
            <motion.ellipse
                cx="82"
                cy="38"
                rx="4"
                ry="6"
                fill="#000000"
                animate={{
                    ry: [6, 7, 6],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* Eerie glow in eyes */}
            <circle cx="68" cy="38" r="1.5" fill="#1a472a" opacity="0.6" />
            <circle cx="82" cy="38" r="1.5" fill="#1a472a" opacity="0.6" />

            {/* Nasal cavity */}
            <path
                d="M 73 44 L 75 48 L 77 44 Z"
                fill="#000000"
            />

            {/* SCREAMING MOUTH - open wide */}
            <motion.ellipse
                cx="75"
                cy="52"
                rx="8"
                ry="10"
                fill="#000000"
                animate={{
                    ry: [10, 12, 10],
                    rx: [8, 9, 8]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Teeth */}
            <rect x="70" y="48" width="2" height="3" fill="#3a3a3a" />
            <rect x="73" y="48" width="2" height="3" fill="#3a3a3a" />
            <rect x="76" y="48" width="2" height="3" fill="#3a3a3a" />
            <rect x="79" y="48" width="2" height="3" fill="#3a3a3a" />

            {/* Skeletal cheekbones */}
            <path
                d="M 58 42 Q 62 45, 65 43"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
            />
            <path
                d="M 92 42 Q 88 45, 85 43"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
            />

            {/* LEFT SKELETAL HAND reaching out */}
            <g transform="translate(15, 120)">
                {/* Wrist/arm bone */}
                <motion.rect
                    x="0"
                    y="0"
                    width="8"
                    height="25"
                    rx="2"
                    fill="#4a4a4a"
                    animate={{
                        x: [0, -2, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Palm */}
                <ellipse cx="4" cy="28" rx="8" ry="10" fill="#3a3a3a" />

                {/* Fingers - skeletal */}
                <motion.rect x="-2" y="30" width="3" height="18" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [18, 20, 18] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect x="2" y="28" width="3" height="22" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [22, 24, 22] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.rect x="6" y="28" width="3" height="21" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [21, 23, 21] }}
                    transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.rect x="10" y="30" width="3" height="16" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [16, 18, 16] }}
                    transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />

                {/* Finger joints */}
                <circle cx="0" cy="40" r="1.5" fill="#2a2a2a" />
                <circle cx="3.5" cy="42" r="1.5" fill="#2a2a2a" />
                <circle cx="7.5" cy="42" r="1.5" fill="#2a2a2a" />
                <circle cx="11.5" cy="40" r="1.5" fill="#2a2a2a" />
            </g>

            {/* RIGHT SKELETAL HAND reaching out */}
            <g transform="translate(125, 120)">
                {/* Wrist/arm bone */}
                <motion.rect
                    x="0"
                    y="0"
                    width="8"
                    height="25"
                    rx="2"
                    fill="#4a4a4a"
                    animate={{
                        x: [0, 2, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                {/* Palm */}
                <ellipse cx="4" cy="28" rx="8" ry="10" fill="#3a3a3a" />

                {/* Fingers - skeletal */}
                <motion.rect x="-2" y="30" width="3" height="16" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [16, 18, 16] }}
                    transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.rect x="2" y="28" width="3" height="21" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [21, 23, 21] }}
                    transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.rect x="6" y="28" width="3" height="22" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [22, 24, 22] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
                <motion.rect x="10" y="30" width="3" height="18" rx="1.5" fill="#4a4a4a"
                    animate={{ height: [18, 20, 18] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                />

                {/* Finger joints */}
                <circle cx="0" cy="40" r="1.5" fill="#2a2a2a" />
                <circle cx="3.5" cy="42" r="1.5" fill="#2a2a2a" />
                <circle cx="7.5" cy="42" r="1.5" fill="#2a2a2a" />
                <circle cx="11.5" cy="40" r="1.5" fill="#2a2a2a" />
            </g>

            {/* Tattered robe edges */}
            <motion.path
                d="M 20 230 L 15 210 L 20 215 L 17 200"
                stroke="#0a0a0a"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
                animate={{
                    d: [
                        "M 20 230 L 15 210 L 20 215 L 17 200",
                        "M 20 230 L 13 210 L 18 215 L 15 200",
                        "M 20 230 L 15 210 L 20 215 L 17 200",
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.path
                d="M 130 230 L 133 210 L 128 215 L 131 200"
                stroke="#0a0a0a"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
                animate={{
                    d: [
                        "M 130 230 L 133 210 L 128 215 L 131 200",
                        "M 130 230 L 135 210 L 130 215 L 133 200",
                        "M 130 230 L 133 210 L 128 215 L 131 200",
                    ]
                }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                }}
            />

            {/* Gradient definitions */}
            <defs>
                <linearGradient id="darkRobe" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.98" />
                    <stop offset="40%" stopColor="#0f0f0f" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#050505" stopOpacity="0.85" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Dementors;
