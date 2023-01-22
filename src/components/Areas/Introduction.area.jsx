import React from 'react';

/* IMAGES */
import Partnership from '../../images/partnership.jpg'

import SolarPanel from '../../images/icon.orange.solar-panel.png'
import FanPanel from '../../images/icon.orange.fan-panel.png'
import Plants from '../../images/icon.orange.plants-icon.png'
import Fan from '../../images/icon.orange.fan.png'

/* COMPONENTS */
import IntroCard from '../Cards/Introduction.card';

function Introduction() {
    const IntroCardInfos = [
        { image: SolarPanel, msg: "Inverter Inspection" },
        { image: FanPanel, msg: "Complete Diagnostic" },
        { image: Plants, msg: "Expert Solar Panel Repair" },
        { image: Fan, msg: "Updates & Monitoring" },
    ]

    return <article>
        <img src={Partnership} alt="partnership" />
        <section>
            <h1>How is solar panel work?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur voluptates maxime, enim laboriosam facere</p>
            <ul>
                {React.Children.toArray(IntroCardInfos.map(card => <IntroCard {...card}/>))}
            </ul>
        </section>
    </article>;
}

export default Introduction;