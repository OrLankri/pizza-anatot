import React from "react";
import { PizzaButton } from "../button/button.component";
import '../../center.css'


export const Quantity = (props) => {
    return (
        <div className="center">
            <table className="center">
                <tbody>
                    <tr>
                        <td><PizzaButton text={'הוספה'} className={'button button--skoll'} onClick={props.onClickAdd} /></td>
                        <td>{props.text}</td>
                        <td><PizzaButton text='הסרה' disabled={props.quan <= 0} className={'button button--skoll'} onClick={props.onClickRemove} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}