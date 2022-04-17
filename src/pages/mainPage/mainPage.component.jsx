import React from "react";
import { Link } from "react-router-dom";
import { PizzaButton } from "../../components/button/button.component";
import '../../center.css'

import { Conclusion } from "../../components/conclusion/conclusion.component";




export const MainPage = (props) => {
    return (
        <div className="center">
            <h1>?מה תרצה לחשב</h1>
            <Link to={'/pizza-anatot/pizzaCalculator'}><PizzaButton className={'button button--anthe'} text='פיצה' /></Link>
            <div>
                <br></br>
                <Conclusion price={props.price} fTray={props.fTray} usualExtra={props.usualExtra} twoExtra={props.twoExtra}
                    onChangePrice={props.onChangePrice} onChangeUsualExtra={props.onChangeUsualExtra}
                    onChangeTwoExtra={props.onChangeTwoExtra} onChangeFTray={props.onChangeFTray}
                    bigBottle={props.bigBottle}
                    onChangeBigBottle={props.onChangeBigBottle}
                />
            </div>
        </div>
    )
}