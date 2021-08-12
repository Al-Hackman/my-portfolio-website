import React from 'react';
import './projectsPage.scss';





function ProjectsPage() {
    return (
        <div className="projects">
            <section className="projects__num1 projects__details">
                <span className="projects__title">FindMe</span>
                <p className="projects__content">This is a Responsive Service Management Application that 
                seeks to help users find Artisans (i.e. Service Providers) for a quick fix in their households. 
                Users are able to create account and manage their services accordingly.</p>

                <span className="projects__title">Tech Stack</span>
                <p className="projects__content">React, JavaScript, Firebase, HTML, SASS, CSS</p>
            </section>

            <section className="projects__num2 projects__details">
                <span className="projects__title">InStock</span>
                <p className="projects__content">This is a Responsive Service Management Application that 
                seeks to help users find Artisans (i.e. Service Providers) for a quick fix in their households. 
                Users are able to create account and manage their services accordingly.</p>

                <span className="projects__title">Tech Stack</span>
                <p className="projects__content">Express.js, Axios, HTML, SASS, CSS, React, JavaScript</p>
            </section>
        </div>
    )
}

export default ProjectsPage


