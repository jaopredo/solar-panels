import React from 'react'

import "./About.area.scss"

/* IMAGES */
import { FiPhoneCall } from 'react-icons/fi'
import OldEngineer from '../../images/old-engineer.jpg'
import YoungEngineer from '../../images/young-engineer.jpg'

function About() {
    return <section id="about-section">
        <article id="phone-article">
            <div id="phone-article-container">
                <h1>Solar Solutions</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam odio minima hic. Sed voluptatem distinctio eligendi quod
                </p>
                <button className='orange-button'><FiPhoneCall/>CALL NOW</button>
            </div>
            <img src={OldEngineer} alt="engenheiro velho" />
        </article>
        <article id="budget-article">
            <div id="budget-article-container">
                <img src={YoungEngineer} alt='engenheiro jovem' />
                <section id="budget-article-section-1">
                    <h2>We Have a Solar Plan<br/>for Almost Any<br/>Budget</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis labore quasi</p>
                </section>
                <section id="budget-article-section-2">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, esse. Officia consectetur, aut quam neque, nisi doloremque ea atque ipsum optio, odit impedit? Quo dolore, similique a ea voluptatum recusandae.</p>
                    <a href="#">MORE</a>
                </section>
            </div>
        </article>
    </section>
}

export default About;