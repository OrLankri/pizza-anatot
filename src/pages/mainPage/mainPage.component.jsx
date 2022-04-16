import React from "react";
import { Link } from "react-router-dom";
import { PizzaButton } from "../../components/button/button.component";
import '../../center.css'




export const MainPage = ()=>{
    return(
    <div className="center">
        <h1>?מה תרצה לחשב</h1>
        <Link to={'/pizza-anatot/pizzaCalculator'}><PizzaButton className={'button button--anthe'} text='פיצה'/></Link>
    </div>
    )
}