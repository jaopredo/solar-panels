import React from 'react'

import WomanSeeking from '../../images/woman-seeking.jpg'

function Plans() {
    return <>
        <article>
            <h1>We Have a Solar Plan For Almost Any Budget</h1>
            <ul>
                <li>
                    <h2>Monthly Plan</h2>
                    <p>Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
                <li>
                    <h2>Full Amount Lease</h2>
                    <p>Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
                <li>
                    <h2>System Purchase</h2>
                    <p>Sample Text. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur itaque, est autem fugiat magnam facere adipisci obcaecati? Dolore iusto laborum nobis quia quos ipsum obcaecati debitis exercitationem facere eveniet?
                    </p>
                    <a href="#">MORE</a>
                </li>
            </ul>
        </article>
        <article>
            <section>
                <h1>CLEAN ENERGY</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolore quia possimus laudantium consequatur beatae nemo adipisci dolorem incidunt ipsam, sunt magnam voluptatibus unde consequuntur blanditiis ullam aperiam facere exercitationem.</p>
                <a href="#">LEARN MORE</a>
            </section>
            <img src={WomanSeeking} alt="Woman Seeking" />
        </article>
    </>
}

export default Plans