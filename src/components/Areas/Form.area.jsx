import React from 'react'
import { useForm } from 'react-hook-form'
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go'


function DefinitionItem({ title }) {
    const [ showDefinition, setShowDefinition ] = React.useState(false)

    function onClick() {
        setShowDefinition(!showDefinition)
    }

    return <>
        <dt onClick={onClick}>
            {title}
            {!showDefinition && <GoTriangleRight/>}
            {showDefinition && <GoTriangleDown/>}
        </dt>
        { showDefinition && <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa veritatis tenetur minima praesentium ullam voluptatibus non, ab, temporibus earum explicabo dolore quasi cumque eveniet totam? Debitis eos placeat sint.</dd> }
    </>
}


function Form() {
    const definitionList = [
        { title: "Como sua opnião influencia?" },
        { title: "Como sei que minha opnião foi vista?" },
        { title: "Aonde minha opnião fica?" },
    ]
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)
    
    return <article>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Get In Touch</h1>
            <input type="text" placeholder="Enter your Name" {...register("name")} />
            <input type="email" placeholder="Enter your Email" {...register("email")} />
            <textarea cols="30" rows="10" placeholder="Enter your Message" {...register("message")}></textarea>
            <button>Submit</button>
        </form>
        <section>
            <dl>
                {React.Children.toArray(definitionList.map(definition => <DefinitionItem {...definition}/>))}
            </dl>
        </section>
    </article>
}

export default Form