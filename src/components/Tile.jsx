import React from 'react';
import { motion } from 'framer-motion';
import './Tile.scss';

const Tile = ({
    children,
    size = 'medium', // small, medium, large, wide
    onClick,
    delay = 0,
    className = ''
}) => {

    const playHoverSound = () => {
        // Placeholder for sound effect
        // const audio = new Audio('/sounds/hover.mp3');
        // audio.play();
    };

    return (
        <motion.div
            className={`xbox-tile tile-${size} ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHoverSound}
            onClick={onClick}
            tabIndex={0} // Make focusable
        >
            <div className="tile-content">
                {children}
            </div>
            <div className="tile-glow" />
        </motion.div>
    );
};

export default Tile;
