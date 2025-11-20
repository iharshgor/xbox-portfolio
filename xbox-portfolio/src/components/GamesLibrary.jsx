import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './GamesLibrary.scss';

const GamesLibrary = () => {
    const projects = [
        {
            id: 1,
            title: 'Fintech Lending Platform',
            company: 'SofGuruz LLP',
            description: 'Developed CI/CD pipelines for fintech applications handling loans and bill payments',
            tech: ['Python', 'Jenkins', 'GitLab', 'Docker'],
            period: '2024 - Present',
            color: '#107C10'
        },
        {
            id: 2,
            title: 'AWS CI/CD Pipeline',
            company: 'AeonX Digital Solutions',
            description: 'Orchestrated fully automated containerized deployment using AWS CodePipeline, CodeBuild, and CodeDeploy',
            tech: ['AWS', 'Docker', 'Terraform', 'Python'],
            period: '2022 - 2024',
            color: '#FF9900'
        },
        {
            id: 3,
            title: 'Digital Signature Platform',
            company: 'AeonX Digital Solutions',
            description: 'Led development of secure API-driven digital signature platform with PFX certificate uploads and PDF signing',
            tech: ['Python', 'FastAPI', 'AWS S3', 'CloudFront'],
            period: '2022 - 2024',
            color: '#0078D7'
        },
        {
            id: 4,
            title: 'QR Voucher System',
            company: 'AeonX Digital Solutions',
            description: 'Built QR-coded voucher system with campaign management and multi-level approvals',
            tech: ['Python', 'FastAPI', 'MySQL', 'ReactJS'],
            period: '2022 - 2024',
            color: '#800080'
        },
        {
            id: 5,
            title: 'RESTful API Development',
            company: 'Arkay Apps',
            description: 'Designed RESTful APIs for seamless mobile/web communication and enhanced UX',
            tech: ['Python', 'FastAPI', 'AWS Lambda', 'ReactJS'],
            period: '2019 - 2022',
            color: '#C4302B'
        },
        {
            id: 6,
            title: 'Image Processing Pipeline',
            company: 'Oviyum Technologies',
            description: 'Developed comprehensive image processing pipeline using Python, RabbitMQ, and Machine Learning',
            tech: ['Python', 'RabbitMQ', 'ML', 'OCR'],
            period: '2018 - 2019',
            color: '#1DB954'
        },
    ];

    return (
        <div className="games-library">
            <div className="library-header">
                <h1>My Projects & Experience</h1>
                <p className="subtitle">Professional work across fintech, cloud infrastructure, and API development</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="project-accent" style={{ backgroundColor: project.color }} />
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <div className="company-info">
                                <Briefcase size={14} />
                                <span>{project.company}</span>
                            </div>
                        </div>
                        <p className="description">{project.description}</p>
                        <div className="project-footer">
                            <div className="tech-stack">
                                {project.tech.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="tech-badge more">+{project.tech.length - 3}</span>
                                )}
                            </div>
                            <div className="period">
                                <Calendar size={12} />
                                <span>{project.period}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default GamesLibrary;
