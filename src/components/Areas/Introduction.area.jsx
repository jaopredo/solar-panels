import React from 'react'

import "./Introduction.area.scss"

/* IMAGES */
import SolarPanel from '../../images/icon.orange.solar-panel.png'
import FanPanel from '../../images/icon.orange.fan-panel.png'
import Plants from '../../images/icon.orange.plants-icon.png'
import Fan from '../../images/icon.orange.fan.png'

/* COMPONENTS */
import IntroCard from '../Cards/Introduction.card'

function Introduction() {
    const IntroCardInfos = [
        { image: SolarPanel, msg: <>Inverter<br/>Inspection</> },
        { image: FanPanel, msg: <>Complete<br/>Diagnostic</> },
        { image: Plants, msg: <>Expert Solar Panel<br/>Repair</> },
        { image: Fan, msg: <>Updates &<br/>Monitoring</> },
    ]

    return <article>
        <div className="partnership-image"></div>
        <section className="introduction-section">
            <h1>How is solar panel work?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur voluptates maxime, enim laboriosam facere</p>
            <ul className='introduction-cards-list'>
                {React.Children.toArray(IntroCardInfos.map(card => <IntroCard {...card}/>))}
            </ul>
        </section>
    </article>
}

export default Introduction