import React from 'react';

import GreenHouse from '../../images/green-house.jpg'

function Informations() {
    return <>
        <article>
            {/* garage solar panel jpg */}
            <section>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae commodi vitae exercitationem cupiditate, earum tempora a modi illo dolorum temporibus nulla saepe voluptatibus nemo ab dicta in. Eveniet, iste.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at officiis neque natus possimus sapiente corrupti, id, maiores exercitationem nobis quaerat molestiae delectus labore, eum quasi deleniti quae veritatis nostrum.
                    </li>
                    <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptatibus! Voluptate tenetur unde, asperiores, libero quia nemo quas est provident magnam cumque nulla vel at, omnis tempore eum natus totam.
                    </li>
                </ul>
            </section>
        </article>
        <article>
            <section>
                <h1>Energy Freedom with Solar and Storage</h1>
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit cupiditate animi, tempore eveniet, culpa ipsam itaque magni ex inventore accusamus dolores nobis voluptas quod, asperiores beatae id maiores porro!</p>
                <button>LEARN MORE</button>
            </section>
            <img src={GreenHouse} alt="Green House" />
        </article>
    </>
}

export default Informations