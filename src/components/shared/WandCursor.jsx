import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const WandCursor = () => {
    const [clicks, setClicks] = useState([]);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring animation for cursor
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        const handleClick = (e) => {
            const newClick = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY
            };
            setClicks(prev => [...prev, newClick]);

            // Remove click effect after animation
            setTimeout(() => {
                setClicks(prev => prev.filter(click => click.id !== newClick.id));
            }, 1500);
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('click', handleClick);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Wand Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                {/* Wand SVG - Proper wand shape */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="transform rotate-45"
                >
                    {/* Wand handle (thicker) */}
                    <path
                        d="M4 28 L8 24"
                        stroke="#8B4513"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    {/* Wand shaft */}
                    <path
                        d="M8 24 L24 8"
                        stroke="#D2691E"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Wand tip (glowing) */}
                    <circle
                        cx="26"
                        cy="6"
                        r="2"
                        fill="#d4af37"
                        style={{ filter: "drop-shadow(0 0 4px #d4af37)" }}
                    />
                    <circle
                        cx="26"
                        cy="6"
                        r="1"
                        fill="#ffd700"
                    />
                </svg>
            </motion.div>

            {/* Sparkle Trail */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 rounded-full bg-hp-gold pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    boxShadow: '0 0 8px 2px rgba(212, 175, 55, 0.6)',
                    opacity: 0.7
                }}
            />

            {/* Click Light Effects (Lumos!) */}
            <AnimatePresence>
                {clicks.map((click) => (
                    <motion.div
                        key={click.id}
                        className="fixed pointer-events-none z-[9997]"
                        style={{
                            left: click.x,
                            top: click.y,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 2, 3] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Radial light burst */}
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                width: '200px',
                                height: '200px',
                                background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(212,175,55,0.3) 30%, transparent 70%)',
                            }}
                        />

                        {/* Bright center flash */}
                        <motion.div
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                            style={{
                                width: '20px',
                                height: '20px',
                                boxShadow: '0 0 30px 10px rgba(255, 215, 0, 0.8)',
                            }}
                            animate={{
                                scale: [1, 1.5, 0],
                                opacity: [1, 0.5, 0]
                            }}
                            transition={{ duration: 0.8 }}
                        />

                        {/* Sparkle particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-hp-gold rounded-full"
                                style={{
                                    left: '0px',
                                    top: '0px',
                                }}
                                animate={{
                                    x: Math.cos((i * Math.PI * 2) / 8) * 60,
                                    y: Math.sin((i * Math.PI * 2) / 8) * 60,
                                    opacity: [1, 0],
                                    scale: [1, 0]
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                ))}
            </AnimatePresence>
        </>
    );
};

export default WandCursor;
