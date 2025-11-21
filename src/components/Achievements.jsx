import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Code2, Server, Cloud, Database, Wrench, Terminal, Box, Boxes, Package } from 'lucide-react';
import './Achievements.scss';

const Achievements = () => {
    // Skills with icons
    const allSkills = [
        { name: 'Python', category: 'language', icon: Code2 },
        { name: 'JavaScript', category: 'language', icon: Code2 },
        { name: 'Jenkins', category: 'devops', icon: Wrench },
        { name: 'CI/CD', category: 'devops', icon: Package },
        { name: 'Docker', category: 'devops', icon: Box },
        { name: 'Kubernetes', category: 'devops', icon: Boxes },
        { name: 'Terraform', category: 'devops', icon: Server },
        { name: 'Linux', category: 'devops', icon: Terminal },
        { name: 'AWS', category: 'cloud', icon: Cloud },
        { name: 'DigitalOcean', category: 'cloud', icon: Cloud },
        { name: 'FastAPI', category: 'framework', icon: Code2 },
        { name: 'ReactJS', category: 'framework', icon: Code2 },
        { name: 'MySQL', category: 'database', icon: Database },
        { name: 'RabbitMQ', category: 'database', icon: Database },
    ];

    const certifications = [
        {
            id: 1,
            title: 'Google Associate Cloud Engineer',
            issuer: 'Google Cloud',
            score: 100,
            icon: Award,
            color: '#4285F4'
        },
        {
            id: 2,
            title: 'Build Infrastructure with Terraform on Google Cloud',
            issuer: 'Google Cloud',
            score: 75,
            icon: CheckCircle2,
            color: '#7B42BC'
        },
        {
            id: 3,
            title: 'GitHub Foundations',
            issuer: 'GitHub',
            score: 50,
            icon: CheckCircle2,
            color: '#333'
        },
        {
            id: 4,
            title: 'AWS Partner: Technical Accredited',
            issuer: 'Amazon Web Services',
            score: 100,
            icon: Award,
            color: '#FF9900'
        },
        {
            id: 5,
            title: 'AWS Partner: Sales Accreditation',
            issuer: 'Amazon Web Services',
            score: 75,
            icon: CheckCircle2,
            color: '#FF9900'
        },
    ];

    const totalScore = certifications.reduce((acc, curr) => acc + curr.score, 0);

    return (
        <div className="achievements-view">
            <div className="section-header">
                <div className="header-left">
                    <h1>Skills & Certifications</h1>
                    <p className="subtitle">Technical expertise and professional achievements</p>
                </div>
                <div className="score-badge">
                    <Trophy size={24} />
                    <div>
                        <div className="score">{totalScore}</div>
                        <div className="label">Points</div>
                    </div>
                </div>
            </div>

            <div className="content-grid">
                {/* Skills Section - Tag Cloud */}
                <div className="skills-panel">
                    <h2>Technical Skills</h2>
                    <div className="skills-cloud">
                        {allSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className={`skill-box ${skill.category}`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <skill.icon size={24} />
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="certifications-panel">
                    <h2>Certifications</h2>
                    <div className="certifications-grid">
                        {certifications.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="cert-card"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="cert-icon" style={{ color: item.color }}>
                                    <item.icon size={20} />
                                </div>
                                <div className="cert-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.issuer}</p>
                                </div>
                                <div className="cert-score">{item.score}G</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
