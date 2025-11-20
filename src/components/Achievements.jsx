import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Code2, Cloud, Wrench, Database } from 'lucide-react';
import './Achievements.scss';

const Achievements = () => {
    const skills = {
        languages: ['Python', 'JavaScript'],
        devops: ['Jenkins', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
        cloud: ['AWS', 'DigitalOcean'],
        frameworks: ['FastAPI', 'ReactJS'],
        databases: ['MySQL', 'RabbitMQ']
    };

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

    const skillCategories = [
        { name: 'Languages', icon: Code2, items: skills.languages, color: '#3776AB' },
        { name: 'DevOps & Tools', icon: Wrench, items: skills.devops, color: '#326CE5' },
        { name: 'Cloud', icon: Cloud, items: skills.cloud, color: '#FF9900' },
        { name: 'Frameworks', icon: Code2, items: skills.frameworks, color: '#61DAFB' },
        { name: 'Databases', icon: Database, items: skills.databases, color: '#4479A1' },
    ];

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
                {/* Skills Section */}
                <div className="skills-panel">
                    <h2>Technical Skills</h2>
                    <div className="skills-compact">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-row"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="skill-header">
                                    <category.icon size={16} style={{ color: category.color }} />
                                    <span>{category.name}</span>
                                </div>
                                <div className="skill-tags">
                                    {category.items.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
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
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="cert-icon" style={{ color: item.color }}>
                                    <item.icon size={24} />
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
