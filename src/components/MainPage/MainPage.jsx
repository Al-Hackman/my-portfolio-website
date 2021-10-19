import React from 'react';
import {Link} from 'react-router-dom';
import ParticlesBackground from '../../ParticlesBackground';
import './MainPage.scss';
import logo from '../../assets/images/pix.jpg';


function MainPage() {
    return (
        <div className="main-page">

            <ParticlesBackground />
            <section className="main-page__logo-wrap">
                <img src={logo} alt="" className="main-page__logo"/>
            </section>
            <section>

            <section className="main-page__top">
                {/* <span>Good Website!!!</span>  */}
                <div className="main-page__name">ALBERT HACKMAN</div>
                <div className="main-page__title">WEB DEVELOPER</div>
            </section> 

            <section className="main-page__middle">
                <Link to="/profile" className="main-page__menu">PROFILE</Link>
                <div className="main-page__divider"></div>
                <Link to="/projects" className="main-page__menu">PROJECTS</Link>
                <div className="main-page__divider main-page__divid"></div>
                {/* <Link to="#" className="main-page__menu">SKILLS</Link> */}
            </section>

            <section className="main-page__bottom"> 
                <a href="https://github.com/Al-Hackman" className="main-page__contact">GITHUB</a>
                <a href="https://www.linkedin.com/in/alberthackman/" className="main-page__contact">LINKEDIN</a>
            </section>

            </section>

        </div>
    )
}

export default MainPage



