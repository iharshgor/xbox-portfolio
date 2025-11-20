import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Award, Code2, Cloud, Database } from 'lucide-react';
import Tile from './Tile';
import heroImage from '../assets/hero.png';
import './Dashboard.scss';

const Dashboard = () => {
  const quickLinks = [
    { id: 1, title: 'Resume', icon: FileText, color: '#0078D7', size: 'medium', action: 'download' },
    { id: 2, title: 'GitHub', icon: Github, color: '#333', size: 'small', link: 'https://github.com/iharshgor' },
    { id: 3, title: 'LinkedIn', icon: Linkedin, color: '#0077B5', size: 'small', link: 'https://linkedin.com/in/iharshgor' },
    { id: 4, title: 'Contact', icon: Mail, color: '#107C10', size: 'wide', link: 'mailto:harshmgor@gmail.com' },
    { id: 5, title: 'AWS Certified', icon: Award, color: '#FF9900', size: 'small' },
    { id: 6, title: 'Python Expert', icon: Code2, color: '#3776AB', size: 'small' },
    { id: 7, title: 'Cloud Architect', icon: Cloud, color: '#00A4EF', size: 'medium' },
    { id: 8, title: 'DevOps', icon: Database, color: '#326CE5', size: 'small' },
  ];

  return (
    <div className="xbox-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Welcome, Harsh!</h1>
          <p className="subtitle">Application Developer & DevOps Engineer</p>
        </div>
        <div className="header-badges">
          <span className="badge">Sr. Engineer</span>
          <span className="badge">AWS Certified</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Hero Tile - Featured Project */}
        <Tile size="large" className="hero-tile" delay={0}>
          <div className="hero-image-container">
             <img src={heroImage} alt="Featured" />
             <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <h2>Sr. Software Engineer</h2>
            <p>Building scalable fintech & cloud solutions</p>
            <button className="xbox-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>
        </Tile>

        {/* Quick Links */}
        {quickLinks.map((item, index) => (
          <Tile 
            key={item.id} 
            size={item.size} 
            delay={index + 1}
            onClick={() => item.link && window.open(item.link, '_blank')}
          >
            <div className="app-icon-wrapper" style={{ backgroundColor: item.color }}>
              <item.icon size={item.size === 'medium' ? 32 : 24} color="#fff" />
            </div>
            <span className="app-title">{item.title}</span>
          </Tile>
        ))}
        
        {/* Fun Tile */}
        <Tile size="medium" delay={9}>
          <div className="ad-content">
            <span>Available for</span>
            <h3>Hire Me!</h3>
            <p>Full-time opportunities</p>
          </div>
        </Tile>
      </div>
    </div>
  );
};

export default Dashboard;
