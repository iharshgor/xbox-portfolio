import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import './UserSelect.scss';

const UserSelect = ({ onLogin }) => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const user = {
        id: 1,
        name: 'Harsh',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh',
        color: '#107C10'
    };

    useEffect(() => {
        // Auto-select/login effect
        const timer = setTimeout(() => {
            setIsSigningIn(true);
            setTimeout(() => {
                onLogin(user);
            }, 1500); // Wait a bit to show "Signing in..."
        }, 1000); // Wait a bit before starting sign in

        return () => clearTimeout(timer);
    }, [onLogin]);

    return (
        <div className="user-select-screen">
            <motion.div
                className="logo-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="xbox-logo-text">PORTFOLIO</div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {isSigningIn ? 'Signing in...' : "Who's playing today?"}
            </motion.h2>

            <div className="users-grid">
                <motion.button
                    className={`user-card ${isSigningIn ? 'signing-in' : ''}`}
                    onClick={() => !isSigningIn && onLogin(user)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: isSigningIn ? 1.1 : 1,
                        borderColor: isSigningIn ? user.color : 'transparent'
                    }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.1, borderColor: user.color }}
                >
                    <div className="avatar-wrapper" style={{ borderColor: isSigningIn ? user.color : 'transparent' }}>
                        <img src={user.avatar} alt={user.name} />
                    </div>
                    <span className="user-name">{user.name}</span>
                    {isSigningIn && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="spinner-container"
                        >
                            <Loader2 className="spinner" size={24} />
                        </motion.div>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default UserSelect;
