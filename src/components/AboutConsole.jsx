import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './AboutConsole.scss';

const AboutConsole = () => {
    return (
        <div className="about-console">
            <h1>About Me</h1>

            <div className="profile-section">
                <div className="profile-header">
                    <div className="avatar-large">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh" alt="Harsh Gor" />
                    </div>
                    <div className="profile-info">
                        <h2>Harsh Gor</h2>
                        <p className="title">Application Developer & DevOps Engineer</p>
                        <p className="bio">I am an enthusiast, hungry to learn, and easily adaptable.</p>
                    </div>
                </div>
            </div>

            <div className="settings-group">
                <h2>Contact Information</h2>
                <div className="setting-item">
                    <span className="label"><Mail size={18} /> Email</span>
                    <span className="value">harshmgor@gmail.com</span>
                </div>
                <div className="setting-item">
                    <span className="label"><Phone size={18} /> Phone</span>
                    <span className="value">+91 95861 42795</span>
                </div>
                <div className="setting-item">
                    <span className="label"><MapPin size={18} /> Location</span>
                    <span className="value">Ahmedabad, India</span>
                </div>
                <div className="setting-item">
                    <span className="label"><Linkedin size={18} /> LinkedIn</span>
                    <span className="value">linkedin.com/in/iharshgor</span>
                </div>
                <div className="setting-item">
                    <span className="label"><Github size={18} /> GitHub</span>
                    <span className="value">github.com/iharshgor</span>
                </div>
            </div>

            <div className="settings-group">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>M.Sc. IT</h3>
                    <p>K.S.K.V. Kachchh University, Bhuj</p>
                    <span className="period">2017 - 2019</span>
                    <span className="grade">Grade: A+</span>
                </div>
                <div className="education-item">
                    <h3>Bachelor of Computer Application</h3>
                    <p>Sanskar Institute of Management & Information Technology, Bhuj</p>
                    <span className="period">2014 - 2017</span>
                    <span className="grade">Grade: A+</span>
                </div>
            </div>

            <div className="settings-group">
                <h2>Current Role</h2>
                <div className="role-card">
                    <h3>Sr. Software Engineer</h3>
                    <p className="company">SofGuruz LLP, Ahmedabad</p>
                    <p className="period">April 2024 - Present</p>
                    <ul>
                        <li>Working as a Python Developer and DevOps Engineer</li>
                        <li>Experience in CI/CD processes using Jenkins and GitLab</li>
                        <li>Developing fintech applications for loans and bill payments</li>
                        <li>Streamlined build, test, and deploy processes</li>
                    </ul>
                </div>
            </div>

            <div className="settings-group">
                <h2>Let's Connect</h2>
                <div className="action-buttons">
                    <button className="xbox-btn" onClick={() => window.open('mailto:harshmgor@gmail.com')}>
                        Send Email
                    </button>
                    <button className="xbox-btn secondary" onClick={() => window.open('https://github.com/iharshgor', '_blank')}>
                        View GitHub
                    </button>
                    <button className="xbox-btn secondary" onClick={() => window.open('https://linkedin.com/in/iharshgor', '_blank')}>
                        View LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutConsole;
