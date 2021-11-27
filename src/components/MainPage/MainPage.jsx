import React from 'react';
import {Link} from 'react-router-dom';
import ParticlesBackground from '../../ParticlesBackground';
import './MainPage.scss';
import logo from '../../assets/images/pix.jpg';
import Github from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';


function MainPage() {

    document.title = "Albert Hackman"
    return (
        <div className="main-page">

            <ParticlesBackground />
            <section className="main-page__logo-wrap">
                <img src={logo} alt="" className="main-page__logo"/>
            </section>
            <section className="main-page__content">

            <section className="main-page__top">
                <div className="main-page__name">ALBERT HACKMAN</div>
                <div className="main-page__title">Full Stack Developer</div>
                <span className="main-page__underline"></span>
                <p className="main-page__about">Technology leads, society follows. I'm always exploring other technologies and frameworks 
                that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you!</p>
            </section> 

            <section className="main-page__middle">
                <div className="main-page__divider"></div>
                <Link to="/profile" className="main-page__menu">PROFILE</Link>
                <div className="main-page__divider"></div>
                <Link to="/projects" className="main-page__menu">PROJECTS</Link>
                <div className="main-page__divider main-page__divid"></div>
            </section>

            <section className="main-page__bottom"> 
                <a href="https://github.com/Al-Hackman" target="_blank" title="Github"><img src={Github} alt="" className="main-page__links"/></a>
                <a href="https://www.linkedin.com/in/alberthackman" target="_blank" title="LinkedIn Profile"><img src={LinkedIn} alt="" className="main-page__links"/></a>
            </section>

            </section>

        </div>
    )
}

export default MainPage



