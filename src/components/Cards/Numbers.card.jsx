import React from 'react'

// import { Container } from './styles';

function NumberCard({ image, num, text }) {
    return <li>
        <img src={image} alt=""/>
        <p>{num}</p>
        <p>{text}</p>
    </li>
}

export default NumberCard