import React from "react";
import "./button.css"
export const PizzaButton = (props) =>
{
    return(
        <div>
            <button  className={'button button--skoll'}{...props}  ><span>{props.text}</span></button>
            
        </div>
        )
}