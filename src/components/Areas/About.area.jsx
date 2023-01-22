import React from 'react';

/* IMAGES */
import { FiPhoneCall } from 'react-icons/fi'
import OldEngineer from '../../images/old-engineer.jpg'
import YoungEngineer from '../../images/young-engineer.jpg'

function About() {
    return <>
        <article>
            <div>
                <h1>Solar Solutions</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam odio minima hic. Sed voluptatem distinctio eligendi quod earum similique fuga quibusdam tempora, quas cupiditate praesentium esse. Voluptatem, est a?
                </p>
                <button><FiPhoneCall/>CALL NOW</button>
            </div>
            <img src={OldEngineer} alt="engenheiro velho" />
        </article>
        <article>
            <img src={YoungEngineer} alt='engenheiro jovem' />
            <section>
                <h2>We Have a Solar Plan for Almost Any Budget</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis labore quasi</p>
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, esse. Officia consectetur, aut quam neque, nisi doloremque ea atque ipsum optio, odit impedit? Quo dolore, similique a ea voluptatum recusandae.</p>
                <a href="#">MORE</a>
            </section>
        </article>
    </>
}

export default About;