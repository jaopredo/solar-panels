import React from 'react'

import "./Numbers.card.scss"

function NumberCard({ image, num, text }) {
    return <li className="number-card">
        <img src={image} alt=""/>
        <p className="number">{num}</p>
        <p>{text}</p>
    </li>
}

export default NumberCard