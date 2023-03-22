import React from "react"
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go'

import "./Sugestion.card.scss"

function Sugestion({ title }) {
    const [ showDefinition, setShowDefinition ] = React.useState(false)

    return <>
        <dt className="sugestion-card" onClick={() => setShowDefinition(!showDefinition)}>
            {title}
            {!showDefinition && <GoTriangleRight/>}
            {showDefinition && <GoTriangleDown/>}
        </dt>
        { showDefinition && <dd className="sugestion-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa veritatis tenetur minima praesentium ullam voluptatibus non, ab, temporibus earum explicabo dolore quasi cumque eveniet totam? Debitis eos placeat sint.</dd> }
    </>
}

export default Sugestion