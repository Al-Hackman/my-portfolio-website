import React from 'react';
import ParticlesBackground from '../../ParticlesBackground';
import './MainPage.scss';


function MainPage() {
    return (
        <div className="main-page">

            <ParticlesBackground />

            <section className="main-page__top">
                {/* <span>Good Website!!!</span>  */}
                <div className="main-page__name">ALBERT HACKMAN</div>
                <div className="main-page__title">WEB DEVELOPER</div>
            </section> 

            <section className="main-page__middle">
                <div className="main-page__menu">ABOUT</div>
                <div className="main-page__divider"></div>
                <div className="main-page__menu">PROJECTS</div>
                <div className="main-page__divider"></div>
                <div className="main-page__menu">SKILLS</div>
            </section>

            <section className="main-page__bottom"> 
                <a href="https://github.com/Al-Hackman" className="main-page__contact">GITHUB</a>
                <a href="https://www.linkedin.com/in/alberthackman/" className="main-page__contact">LINKEDIN</a>
            </section>

        </div>
    )
}

export default MainPage



