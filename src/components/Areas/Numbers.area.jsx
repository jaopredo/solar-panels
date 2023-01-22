import React from 'react';

/* COMPONENTS */
import NumberCard from '../Cards/Numbers.card';

/* IMAGES */
import EmployeesIcon from '../../images/icon.black.person.png'
import LeafWireIcon from '../../images/icon.black.leaf-wire.png'
import ProjectsIcon from '../../images/icon.black.reusable.png'
import Co2Icon from '../../images/icon.black.co2.png'

function Numbers() {
    const numberCardsList = [
        { image: EmployeesIcon, num: 2105, text: 'EMPLOYEES' },
        { image: LeafWireIcon, num: 3158, text: 'INSTALLED(MW)' },
        { image: ProjectsIcon, num: 297, text: 'PROJECTS' },
        { image: Co2Icon, num: 5282, text: 'MT CO2' },
    ]
    return <article>
        {React.Children.toArray(numberCardsList.map(card => <NumberCard {...card} />))}
    </article>
}

export default Numbers;