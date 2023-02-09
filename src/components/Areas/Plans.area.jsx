import React from 'react'

import WomanSeeking from '../../images/woman-seeking.jpg'

import "./Plans.area.scss";

function Plans() {
    return <>
        <article id="plans-article">
            <h1>We Have a Solar Plan For Almost Any Budget</h1>
            <ul id="plans-list">
                <li>
                    <h2>Monthly Plan</h2>
                    <p className='plan-spec'>Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
                <li>
                    <h2>Full Amount Lease</h2>
                    <p className="plan-spec">Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
                <li>
                    <h2>System Purchase</h2>
                    <p className="plan-spec">Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
            </ul>
        </article>
        <article id="clean-energy-article">
            <section id="clean-energy-section">
                <h1>Clean Energy</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolore quia possimus laudantium consequatu</p>
                <a href="#">LEARN MORE</a>
            </section>
            <img src={WomanSeeking} id="woman-seeking" alt="Woman Seeking" />
            <span id="orange-block"></span>
        </article>
    </>
}

export default Plans