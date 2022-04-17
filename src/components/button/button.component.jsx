import React from "react";
import "./button.css"
export const PizzaButton = (props) =>
{
    return(
        <div>
            <button  {...props}  ><span>{props.text}</span></button>
        </div>
        )
}