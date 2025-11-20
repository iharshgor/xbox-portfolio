import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './AboutConsole.scss';

const AboutConsole = () => {
    return (
        <div className="about-console">
            <h1>About Me</h1>

            <div className="bento-grid">
                {/* Profile Tile - Large Hero */}
                <div className="bento-tile profile-tile">
                    <div className="profile-content">
                        <div className="avatar-container">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh" alt="Harsh Gor" />
                            <div className="online-status" />
                        </div>
                        <div className="profile-text">
                            <h2>Harsh Gor</h2>
                            <p className="gamertag">iharshgor</p>
                            <p className="title">Application Developer & DevOps Engineer</p>
                            <div className="badges">
                                <span className="badge">Pro</span>
                                <span className="badge">Dev</span>
                                <span className="badge">Ops</span>
                            </div>
                            <p className="bio">"I am an enthusiast, hungry to learn, and easily adaptable."</p>
                            <p className="tagline">💻 Software developer by day, gamer by night. 🎮</p>
                        </div>
                    </div>
                </div>

                {/* Current Role Tile - "Current Quest" */}
                <div className="bento-tile role-tile">
                    <div className="tile-header">
                        <h3>Current Quest</h3>
                        <span className="xp-badge">ACTIVE</span>
                    </div>
                    <div className="role-content">
                        <h4>Sr. Software Engineer</h4>
                        <p className="company">SofGuruz LLP</p>
                        <p className="location">Ahmedabad, India</p>
                        <div className="quest-objectives">
                            <p><strong>Objectives:</strong></p>
                            <ul>
                                <li>Develop fintech solutions (Python/FastAPI)</li>
                                <li>Orchestrate CI/CD pipelines (Jenkins/GitLab)</li>
                                <li>Manage cloud infrastructure (AWS/Docker)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Tile - "Player Stats" */}
                <div className="bento-tile contact-tile">
                    <div className="tile-header">
                        <h3>Player Stats</h3>
                    </div>
                    <div className="stats-list">
                        <div className="stat-item">
                            <Mail size={20} className="icon" />
                            <div className="stat-info">
                                <span className="label">Email</span>
                                <span className="value">harshmgor@gmail.com</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <Phone size={20} className="icon" />
                            <div className="stat-info">
                                <span className="label">Phone</span>
                                <span className="value">+91 95861 42795</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <MapPin size={20} className="icon" />
                            <div className="stat-info">
                                <span className="label">Base</span>
                                <span className="value">Ahmedabad, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Tile - "Level History" */}
                <div className="bento-tile education-tile">
                    <div className="tile-header">
                        <h3>Level History</h3>
                    </div>
                    <div className="education-list">
                        <div className="edu-item">
                            <div className="year">2019</div>
                            <div className="details">
                                <h4>M.Sc. IT</h4>
                                <p>K.S.K.V. Kachchh University</p>
                                <span className="grade">Rank: A+</span>
                            </div>
                        </div>
                        <div className="edu-item">
                            <div className="year">2017</div>
                            <div className="details">
                                <h4>BCA</h4>
                                <p>Sanskar Institute</p>
                                <span className="grade">Rank: A+</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Socials Tile - "Join Party" */}
                <div className="bento-tile social-tile">
                    <div className="tile-header">
                        <h3>Join Party</h3>
                    </div>
                    <div className="social-buttons">
                        <button className="social-btn github" onClick={() => window.open('https://github.com/iharshgor', '_blank')}>
                            <Github size={24} />
                            <span>GitHub</span>
                        </button>
                        <button className="social-btn linkedin" onClick={() => window.open('https://linkedin.com/in/iharshgor', '_blank')}>
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </button>
                        <button className="social-btn email" onClick={() => window.open('mailto:harshmgor@gmail.com')}>
                            <Mail size={24} />
                            <span>Email</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutConsole;
