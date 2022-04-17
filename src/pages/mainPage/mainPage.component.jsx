import React from "react";
import { Link } from "react-router-dom";
import { PizzaButton } from "../../components/button/button.component";
import '../../center.css'

import { Conclusion } from "../../components/conclusion/conclusion.component";




export const MainPage = (props) => {
    return (
        <div className="center">
            <h1>?מה תרצה לעשות</h1>
            <Link to={'/pizza-anatot/pizzaCalculator'}><PizzaButton className={'button button--anthe'} text='חישוב הזמנה' /></Link>
            <br></br>
            <Link to={'/pizza-anatot/phoneFormat'}><PizzaButton className={'button button--anthe'} text='פורמט לקיחת הזמנה מלקוח בטלפון'/></Link>
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