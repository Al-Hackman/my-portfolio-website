import React from 'react';
import ProfileBackground from '../../ProfileBackground';
import './profilePage.scss';
import logo from '../../assets/logo/logo.png';
import SASS from '../../assets/images/SASS.png';
import reactLogo from '../../assets/images/react.png';
import JS from '../../assets/images/JS.png';
import HTML from '../../assets/images/HTML.png';
import FB from '../../assets/images/FB.png';
import CSS from '../../assets/images/CSS.png';
import NODE from '../../assets/images/node.png';
import EXP from '../../assets/images/exp.png';
import Express from '../../assets/images/express.png';
import AXIOS from '../../assets/images/axios.png';
import Next from '../../assets/images/Next.png';
import Auth from '../../assets/images/Auth.png';
import MatUI from '../../assets/images/matUI.png';
import Github from '../../assets/images/github.png';
import arrow from '../../assets/images/arrow2.png';
import Check from '../../assets/images/check.png';
import { useHistory } from "react-router-dom";




function ProfilePage() {


        let history = useHistory();

    return (
        <div className="profile__wrapper">
            <ProfileBackground />
             <div className="profile__backarrow">
                 <div className="profile__img-wrap">
                    <img src={arrow} alt="" className="profile__arrow" onClick={() => history.goBack()}/>
                 </div>
            </div>
            <section className="profile">
               
                <div className="profile__logo"><img src={logo} className="profile__logo-img" alt="Portfolio Logo" /></div>
                <h1 className="profile__header">Hi, I'm Albert.</h1>
                <div className="profile__content">

                    <h3 className="profile__body">A passionate <span className="profile--description">Full Stack Developer</span> with experience in 
                    Enterprise Growth and Digital Transformations. I started my career as a Project Assistant in a Multi-Donor funded Project Management 
                    Establishment and eventually got promoted as a Project Officer leading a team of over 10 staffs. I was a key member of the team that implemented 
                    the World Bank, DANIDA, Africa Development Bank and KFW/GIZ funded project totalling over US200 Million.  
                    
                    <br /> <br />
                    I leaveraged on my knowledge in computing to help in the design/testing of the proprietary software (which I eventually managed in-house) 
                    used in the management of this multi-donor project.
                    I've always posit that technology plays a pivotal rule in the success of every business.
                    My education in Computer Science only reaffirmed my passion for building high impact websites that maximize companies’ 
                    productivity and profit.

                    <br /> <br />
                    I am currently based in the Greater Toronto Area(GTA), Ontario but you can also find me in Ottawa as well. If you are looking for a developer 
                    to add to your team, I am available and would love to hear from you.</h3>

                    <h2 className="profile__education">Education</h2>
                    <div className="profile__edu-wrap">
                        <img src={Check} alt="" className="profile__check"/>
                        <h3 className="profile__school"><span className="profile__cert">Diploma in Web Development(2021)</span> - BrainStation</h3>
                    </div>
                    <div className="profile__edu-wrap">
                        <img src={Check} alt="" className="profile__check"/>
                        <h3 className="profile__school"><span className="profile__cert">Bachelors in Computer Science(2010)</span> - University of Cape Coast</h3>
                    </div>
                    <div className="profile__edu-wrap">
                        <img src={Check} alt="" className="profile__check"/>
                        <h3 className="profile__school"><span className="profile__cert">Masters in Economics Policy Management(2014)</span> - University of Ghana</h3>
                    </div>

                    <h2 className="profile__skills">Skills</h2>

                    <div className="profile__icons-wrap">

                        <div className="profile__icon-name-wrap">
                            <img src={SASS} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">SASS</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={HTML} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">HTML5</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={CSS} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">CSS3</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={NODE} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Node.js</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={AXIOS} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Axios</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={JS} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">JavaScript</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={reactLogo} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">React</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={Github} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Github</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={FB} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Firebase</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={Express} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Express.js</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={Next} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Next.js</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={Auth} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Auth0</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <img src={MatUI} alt="" className="profile__icons"/>
                            <span className="profile__icon-name">Mat UI</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <span className="profile__icon-name">Web APIs</span>
                        </div>
                        <div className="profile__icon-name-wrap">
                            <span className="profile__icon-name">NPM Libraries</span>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProfilePage


