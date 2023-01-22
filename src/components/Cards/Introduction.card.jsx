import React from 'react';

// import { Container } from './styles';

function IntroCard({ image, msg }) {
    return <li>
        <figure>
            <img src={image} alt="Imagem" />
            <figcaption>
                {msg}
            </figcaption>
        </figure>
    </li>;
}

export default IntroCard;