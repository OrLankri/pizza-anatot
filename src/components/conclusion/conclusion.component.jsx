import React from "react";
import { PizzaButton } from "../button/button.component";
import '../../center.css'


/*
a copy to use with all props:

 <Conclusion price={props.price} fTray={props.fTray} usualExtra={props.usualExtra} twoExtra={props.twoExtra}
                    onChangePrice={props.onChangePrice} onChangeUsualExtra={props.onChangeUsualExtra}
                    onChangeTwoExtra={props.onChangeTwoExtra} onChangeFTray={props.onChangeFTray}
                    bigBottle={props.bigBottle}
                    onChangeBigBottle={(e) => this.setState({ bigBottle: e })}
                />
*/

export const Conclusion = (props) => {

    const resetAllClick = () => {
        props.onChangePrice(0)
        props.onChangeFTray(0)
        props.onChangeTwoExtra(0)
        props.onChangeUsualExtra(0)
        props.onChangeBigBottle(0)
    }

    return (
        <div className="center">
            <table className="center">
                <tr>
                    <th>:סיכום</th>
                </tr>
                <tr>
                    משפחתית: {props.fTray}
                    <br />
                    מגש תוספות: {props.usualExtra}
                    <br />
                    תוספות 2 שקל: {props.twoExtra}
                    <br />
                    בקבוק שתיה גדול: {props.bigBottle}
                </tr>
                <tr></tr>
                <tr>
                    <td><PizzaButton id="reset" className={'button button--skoll'} disabled={props.price == 0} text='איפוס' onClick={resetAllClick} /></td>
                </tr>
            </table>
        </div>
    )
}