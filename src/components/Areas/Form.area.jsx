import React from 'react'
import { useForm } from 'react-hook-form'

import "./Form.area.scss"

import Sugestion from '../Cards/Sugestion.card'

function Form() {
    const definitionList = [
        { title: "Como sua opinião influencia?" },
        { title: "Como sei que minha opinião foi vista?" },
        { title: "Aonde minha opinião fica?" },
    ]
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)
    
    return <article id="form-article">
        <div id="form-container">
            <form onSubmit={handleSubmit(onSubmit)} id="feedback-form">
                <h1>Get In Touch</h1>
                <input type="text" placeholder="Enter your Name" {...register("name")} />
                <input type="email" placeholder="Enter your Email" {...register("email")} />
                <textarea cols="30" rows="10" placeholder="Enter your Message" {...register("message")}></textarea>
                <button>Submit</button>
            </form>
            <section id="sugestions-section">
                <dl>
                    {React.Children.toArray(definitionList.map(definition => <Sugestion {...definition}/>))}
                </dl>
            </section>
        </div>
    </article>
}

export default Form