import React from 'react'

import "./Introduction.card.scss"

function IntroCard({ image, msg }) {
    return <li className="introduction-card">
        <img src={image} alt="Imagem" />
        <p>{msg}</p>
    </li>
}

export default IntroCard