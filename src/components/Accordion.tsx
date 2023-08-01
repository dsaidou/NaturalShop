import { useState } from "react";
import './Accordion.css'
import { nanoid } from "nanoid";

interface Icard {
    toggle: boolean,
    title: string,
    text:string,
    id: string
}

export default function Accordion() {
    const [card, setCard] = useState<Icard[]>([
        {
            toggle: false,
            title: 'Where do we grow our fruits ?',
            text: 'It’s local fruits because we are partner with 100+ organic farms around the world. Every fruits detailed are on our bottle that we maintain to a simple design for transparency.',
            id: nanoid(),
        },
        {
            toggle: false,
            title: 'Where are our drinks shipped from ?',
            text: 'Natural is a compagny that highlights the benefits of organic products in our plates therefore all our fruits are grown in our organic farm at the country you ship them. We adapt our juice propositions to local flavors and seasons to avoid over-production  ',
            id: nanoid(),
        },
        {
            toggle: false,
            title: 'Who created this brand ? ',
            text: 'This brand was created by a family of farmers that were concerned by the ecology and that value the importance of organic farms. Therefore this compagny helps local farmers around the world maintaining great values by founding them and buying their fruits. ',
            id: nanoid(),
        }
    ]);

    const handleToggle = (id: string) =>{
        setCard(card.map((card) => card.id === id ? {...card, toggle: !card.toggle } : card))
    }

  return (
    <>
        {card.map(({toggle,title, text,id})=>{
            return(
                <div className="accordionContainer" key={id}>
                    <button onClick={()=>{handleToggle(id)}} className="accordion-visible">
                        <h2>{title}</h2>
                        <span className="material-symbols-sharp">expand_more</span>
                    </button>
                    <div className={toggle ? "accordion-toggle animated" : 'accordion-toggle'}>
                        <p>{text}</p>
                    </div>
                </div>
            )
        })}

    </>

  )
}
