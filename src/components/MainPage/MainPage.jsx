import React from 'react';
import {Link} from 'react-router-dom';
import ParticlesBackground from '../../ParticlesBackground';
import './MainPage.scss';
import logo from '../../assets/images/pix.jpg';
import Github from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';


function MainPage() {
    return (
        <div className="main-page">

            <ParticlesBackground />
            <section className="main-page__logo-wrap">
                <img src={logo} alt="" className="main-page__logo"/>
            </section>
            <section className="main-page__content">

            <section className="main-page__top">
                {/* <span>Good Website!!!</span>  */}
                <div className="main-page__name">ALBERT HACKMAN</div>
                <div className="main-page__title">WEB DEVELOPER</div>
                <span className="main-page__underline"></span>
                <p className="main-page__about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, asperiores laborum magnam consequatur omnis alias.</p>
            </section> 

            <section className="main-page__middle">
                <div className="main-page__divider"></div>
                <Link to="/profile" className="main-page__menu">PROFILE</Link>
                <div className="main-page__divider"></div>
                <Link to="/projects" className="main-page__menu">PROJECTS</Link>
                <div className="main-page__divider main-page__divid"></div>
                {/* <Link to="#" className="main-page__menu">SKILLS</Link> */}
            </section>

            <section className="main-page__bottom"> 

                <a href="https://github.com/Al-Hackman" target="_blank" title="Github"><img src={Github} alt="" className="main-page__links"/></a>
                <a href="https://www.linkedin.com/in/alberthackman" target="_blank" title="LinkedIn Profile"><img src={LinkedIn} alt="" className="main-page__links"/></a>

                {/* <a href="https://github.com/Al-Hackman" className="main-page__contact">GITHUB</a>
                <a href="https://www.linkedin.com/in/alberthackman/" className="main-page__contact">LINKEDIN</a> */}
            </section>

            </section>

        </div>
    )
}

export default MainPage



