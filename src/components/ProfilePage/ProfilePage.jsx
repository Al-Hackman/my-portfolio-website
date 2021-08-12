import React from 'react'
import ProfileBackground from '../../ProfileBackground'
import './profilePage.scss'




function ProfilePage() {
    return (
        <div className="profile__wrapper">
            <ProfileBackground />

            <section className="profile">

                <h1 className="profile__header">Hi, I'm Albert.</h1>
                <div className="profile__content">
                    <h3 className="profile__body">A passionate <span className="profile--description">Web Developer</span> with experience in 
                    Enterprise Growth and Digital Transformations. My education in Computer Science 
                    only reaffirmed my passion for building high impact websites that maximize companies’ 
                    productivity and profit.</h3>
                    <h2 className="profile__education">Education</h2>
                    <h3 className="profile__school"><span className="profile__cert">Diploma in Web Development(2021)</span> - BrainStation</h3>
                    <h3 className="profile__school"><span className="profile__cert">Bachelors in Computer Science(2010)</span> - University of Cape Coast</h3>
                    <h3 className="profile__school"><span className="profile__cert">Masters in Economics Policy Management</span> - University of Ghana</h3>
                </div>
            </section>

        </div>
    )
}

export default ProfilePage


