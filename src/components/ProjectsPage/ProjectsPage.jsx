import React from 'react';
import './projectsPage.scss';
import reactLogo from '../../assets/images/react.png';
import JS from '../../assets/images/JS.png';
import HTML from '../../assets/images/HTML.png';
import FB from '../../assets/images/FB.png';
import SASS from '../../assets/images/SASS.png';
import CSS from '../../assets/images/CSS.png';
import NODE from '../../assets/images/node.png';
import Express from '../../assets/images/exp.png';
import AXIOS from '../../assets/images/axios.png';
import arrow from '../../assets/images/arrow2.png';
import { useHistory } from "react-router-dom";


function ProjectsPage() {

    let history = useHistory();

    return (
        <>
            <section className="projects__top">
                <div className="projects__header">
                    <div className="projects__backarrow"><img src={arrow} alt="" className="projects__arrow" onClick={() => history.goBack()}/></div>
                    <div className="projects__head">Projects</div>
                </div>
            </section>
            <section className="projects">
                <div className="projects__num1 projects__details">
                    <span className="projects__title">FindMe</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">This is a Responsive Service Management Application that 
                    seeks to help users find Artisans (i.e. Service Providers) for a quick fix in their households. 
                    Users are able to create account and manage their services accordingly.</p>
                    <a href="https://github.com/Al-Hackman/albert-hackman-capstone" target="_blank"className="projects__repo-link">GitHub</a>
                    <span className="projects__title-underline"></span>

                    <div className="projects__icons-wrap">
                        <div className="projects__icon-name-wrap">
                            <img src={reactLogo} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">React</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={JS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">JavaScript</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={HTML} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">HTML5</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={FB} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">Firebase</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={SASS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">SASS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={CSS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">CSS</span>
                        </div>
                    </div>
                </div>

                <div className="projects__num2 projects__details">
                    <span className="projects__title">InStock</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">A responsive Inventory Management System built specifically to suit the needs of a particular Company. 
                    Details of the Inventory List, Warehouse List, and Items being stocked in particular Warehouses etc. 
                    Users can see Inventory, Edit (Add or Update) Inventory as well as Warehouse, Delete Items etc. This was a collaborative work with other team members in an Agile environment.</p>
                    <a href="https://github.com/Al-Hackman/xmen-in-stock" target="_blank"className="projects__repo-link">GitHub</a>
                    <span className="projects__title-underline"></span>
                    
                    <div className="projects__icons-wrap">
                        <div className="projects__icon-name-wrap">
                            <img src={SASS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">SASS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={HTML} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">HTML5</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={CSS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">CSS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={NODE} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">Node.js</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={AXIOS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">AXIOS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={JS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">JavaScript</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={reactLogo} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">React</span>
                        </div>
                        
                    </div>
                </div>
                 <div className="projects__num3 projects__details">
                    <span className="projects__title">BrainFlix</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">A responsive Web Application similar to youtube or vimeo. The application allows users to 
                    play and upload various Videos unto the site. The site also incorporates a live comments section with a delete and like buttons.
                    </p>
                    <a href="https://github.com/Al-Hackman/albert-hackman-brainflix" target="_blank"className="projects__repo-link">GitHub</a>
                    <span className="projects__title-underline"></span>
                    
                    <div className="projects__icons-wrap">
                        <div className="projects__icon-name-wrap">
                            <img src={NODE} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">Node.js</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={Express} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">Express</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={reactLogo} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">React</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={JS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">JavaScript</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={SASS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">SASS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={HTML} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">HTML5</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={CSS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">CSS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={AXIOS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">AXIOS</span>
                        </div>
                        
                    </div>
                </div>
                <div className="projects__num4 projects__details">
                    <span className="projects__title">BandSite</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">A simple responsive Website for an up and coming Band. It incorporates a Live Comment Section with an option to Like/Delete a comment, 
                    a page that displays upcoming shows and how to purchase a ticket. Embedded on this page is a Soud cloud for playing songs. </p>
                    <a href="https://github.com/Al-Hackman/albert-hackman-bandsite" target="_blank"className="projects__repo-link">GitHub</a>
                    <span className="projects__title-underline"></span>
                    
                    <div className="projects__icons-wrap">
                        <div className="projects__icon-name-wrap">
                            <img src={JS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">JavaScript</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={SASS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">SASS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={HTML} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">HTML5</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <img src={CSS} alt="" className="projects__icons"/>
                            <span className="projects__icon-name">CSS</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <span className="projects__icon-name">Web APIs</span>
                        </div>
                        <div className="projects__icon-name-wrap">
                            <span className="projects__icon-name">DOM</span>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>    
    )
}

export default ProjectsPage;


