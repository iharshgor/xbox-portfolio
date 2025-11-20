import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './StartupAnimation.scss';

const StartupAnimation = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequence timing
        const timers = [
            setTimeout(() => setStage(1), 1000), // Orb expand
            setTimeout(() => setStage(2), 2500), // Logo reveal
            setTimeout(() => onComplete(), 4500), // Finish
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div className="startup-screen">
            {stage >= 0 && (
                <motion.div
                    className="orb-container"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: stage === 1 ? 1 : stage === 2 ? 20 : 0,
                        opacity: stage === 2 ? 0 : 1
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div className="orb-glow" />
                    <div className="orb-core" />
                </motion.div>
            )}

            {stage >= 1 && (
                <motion.div
                    className="logo-reveal"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1>XBOX</h1>
                    <p>PORTFOLIO</p>
                </motion.div>
            )}
        </div>
    );
};

export default StartupAnimation;
