import React from 'react';
import './projectsPage.scss';
import reactLogo from '../../assets/images/react.png';
import JS from '../../assets/images/JS.png';
import HTML from '../../assets/images/HTML.png';
import FB from '../../assets/images/FB.png';
import SASS from '../../assets/images/SASS.png';
import CSS from '../../assets/images/CSS.png';
import NODE from '../../assets/images/node.png';
import EXP from '../../assets/images/exp.png';
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
                    <span className="projects__title-underline"></span>
                    
                    <img src={reactLogo} alt="" className="projects__icons"/>
                    <img src={JS} alt="" className="projects__icons"/>
                    <img src={HTML} alt="" className="projects__icons"/>
                    <img src={FB} alt="" className="projects__icons"/>
                    <img src={SASS} alt="" className="projects__icons"/>
                    <img src={CSS} alt="" className="projects__icons"/>
                </div>

                <div className="projects__num2 projects__details">
                    <span className="projects__title">InStock</span>
                    <span className="projects__title-underline"></span>
                    <p className="projects__content">A responsive Inventory Management System built specifically to suit the needs of a particular Company. 
                    Details of the Inventory List, Warehouse List, and Items being stocked in particular Warehouses etc. 
                    Users can see Inventory, Edit (Add or Update) Inventory as well as Warehouse, Delete Items etc. This was a collaborative work with other team members in an Agile environment.</p>
                    <span className="projects__title-underline"></span>
                    
                    <img src={SASS} alt="" className="projects__icons"/>
                    <img src={HTML} alt="" className="projects__icons"/>
                    <img src={CSS} alt="" className="projects__icons"/>
                    <img src={NODE} alt="" className="projects__icons"/>
                    <img src={AXIOS} alt="" className="projects__icons"/>
                    <img src={JS} alt="" className="projects__icons"/>
                    <img src={reactLogo} alt="" className="projects__icons"/>
                </div>
            </section>
        </>    
    )
}

export default ProjectsPage;


