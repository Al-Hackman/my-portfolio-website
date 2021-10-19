import React from 'react';
import './projectsPage.scss';
import react from '../../assets/images/react-2.png';


function ProjectsPage() {
    return (
        <>
            <section className="projects">
                <div className="projects__num1 projects__details">
                    <span className="projects__title">FindMe</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">This is a Responsive Service Management Application that 
                    seeks to help users find Artisans (i.e. Service Providers) for a quick fix in their households. 
                    Users are able to create account and manage their services accordingly.</p>
                    <span className="projects__title-underline"></span>
                    {/* <span className="projects__title">Tech Stack</span> */}
                    {/* <p className="projects__content">React, JavaScript, Firebase, HTML, SASS, CSS</p> */}
                    <img src={react} alt="" className="projects__icons"/>
                </div>

                <div className="projects__num2 projects__details">
                    <span className="projects__title">InStock</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">This is a Responsive Service Management Application that 
                    seeks to help users find Artisans (i.e. Service Providers) for a quick fix in their households. 
                    Users are able to create account and manage their services accordingly.</p>
                    <span className="projects__title-underline"></span>
                    {/* <span className="projects__title">Tech Stack</span> */}
                    <p className="projects__content">Express.js, Axios, HTML, SASS, CSS, React, JavaScript</p>
                </div>
            </section>
        </>    
    )
}

export default ProjectsPage;


