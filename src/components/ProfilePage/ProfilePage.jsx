import React from 'react'
import ProfileBackground from '../../ProfileBackground'
import './profilePage.scss'




function ProfilePage() {
    return (
        <>
            <ProfileBackground />

            <section className="profile">

                <h1 className="profile__header">Hi, I'm Albert.</h1>
                <h3 className="profile__body">A passionate <span className="profile--description">Web Developer</span> with experience in 
                Enterprise Growth and Digital Transformations. My education in Computer Science 
                only reaffirmed my passion for building high impact websites that maximize companies’ 
                productivity and profit.</h3>

            </section>

        </>
    )
}

export default ProfilePage


