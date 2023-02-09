import React from 'react'

import "./Informations.area.scss"

import GreenHouse from '../../images/green-house.jpg'
import ItemBullet from '../../images/list-disc.png'

function Informations() {
    return <>
        <article id="house-demonstration-container">
            <section id="house-demonstration-text-container">
                <ul>
                    <li>
                        <img src={ItemBullet} alt="" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae commodi vitae exercitationem cupiditate
                    </li>
                    <li>
                        <img src={ItemBullet} alt="" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at officiis neque natus possimus sapiente corrupti
                    </li>
                    <li>
                        <img src={ItemBullet} alt="" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptatibus! Voluptate tenetur unde, asperiores
                    </li>
                </ul>
            </section>
        </article>
        <article id="green-house-article">
            <section>
                <h1>Energy<br/>Freedom with<br/>Solar and<br/>Storage</h1>
            </section>
            <section id="border-section">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit cupiditate animi, tempore eveniet, culpa ipsam itaque magni ex inventore accusamus dolores nobis voluptas quod, asperiores beatae id maiores porro!</p>
                <button className='orange-button'>LEARN MORE</button>
            </section>
            <img src={GreenHouse} alt="Green House" />
        </article>
    </>
}

export default Informations