import React from 'react';
import { Home, Gamepad2, Trophy, User, Settings } from 'lucide-react';
import './Sidebar.scss';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'projects', icon: Gamepad2, label: 'My Games' },
        { id: 'skills', icon: Trophy, label: 'Achievements' },
        { id: 'about', icon: User, label: 'Profile' },
    ];

    return (
        <div className="xbox-sidebar glass-panel">
            <div className="user-mini-profile">
                <div className="avatar-circle">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Avatar" />
                </div>
            </div>

            <nav className="nav-menu">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(item.id);
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        aria-label={item.label}
                    >
                        <item.icon size={24} />
                        <span className="nav-label">{item.label}</span>
                        {activeTab === item.id && <div className="active-indicator" />}
                    </button>
                ))}
            </nav>

            <div className="system-tray">
                <button className="nav-item" aria-label="Settings">
                    <Settings size={20} />
                </button>
                <div className="clock">12:00 PM</div>
            </div>
        </div>
    );
};

export default Sidebar;
