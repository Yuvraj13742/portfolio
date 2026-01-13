import { motion } from 'framer-motion';

const MagicalButton = ({ children, onClick, className = "", icon: Icon }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        relative px-6 py-3 
        bg-hp-deep-black 
        text-hp-gold 
        font-harry 
        border-2 border-hp-gold 
        rounded-sm
        overflow-hidden
        group
        transition-all duration-300
        hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]
        ${className}
      `}
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-hp-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            {/* Corner borders for that ancient look */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hp-parchment opacity-50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hp-parchment opacity-50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hp-parchment opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hp-parchment opacity-50" />

            <span className="relative z-10 flex items-center justify-center gap-2 tracking-wider">
                {Icon && <Icon className="w-5 h-5 animate-pulse" />}
                {children}
            </span>
        </motion.button>
    );
};

export default MagicalButton;
