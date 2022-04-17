import React from "react";
import { PizzaButton } from "../../components/button/button.component";
import './calculatePizzaPage.css'
import { Quantity } from "../../components/quantity/quantity.component";
import { Conclusion } from "../../components/conclusion/conclusion.component";

export const CalculatePizzaPage = (props) => {

    const fTrayClick = () => {
        props.onChangePrice(props.price + 58)
        props.onChangeFTray(props.fTray + 1)

    }

    const addUsualExtrasClick = () => {
        props.onChangePrice(props.price + 63)
        props.onChangeUsualExtra(props.usualExtra + 1)
    }

    const twoShekelExtraClick = () => {
        props.onChangePrice(props.price + 2)
        props.onChangeTwoExtra(props.twoExtra + 2)
    }

    const removeFClick = () => {
        props.onChangePrice(props.price - 58)
        props.onChangeFTray(props.fTray - 1)
    }

    const remove63Click = () => {
        props.onChangePrice(props.price - 63)
        props.onChangeUsualExtra(props.usualExtra - 1)
    }

    const remove2Click = () => {
        props.onChangePrice(props.price - 2)
        props.onChangeTwoExtra(props.twoExtra - 2)
    }

    const resetAllClick = () => {
        props.onChangePrice(0)
        props.onChangeFTray(0)
        props.onChangeTwoExtra(0)
        props.onChangeUsualExtra(0)
    }

    const bigBottleAddClick = () => {
        props.onChangeBigBottle(props.bigBottle + 1)
        props.onChangePrice(props.price + 12)
    }
    const bigBottleRemoveClick = () => {
        props.onChangeBigBottle(props.bigBottle - 1)
        props.onChangePrice(props.price - 12)
    }

    return (
        <div className="center">
            <h1>חישוב מגשים</h1>
            <table className="center">
                <tbody>
                    <Quantity id='familyTrayQuantity' quan={props.fTray} onClickAdd={fTrayClick} onClickRemove={removeFClick} text='משפחתית' />
                    <tr>
                        <Quantity id='tray63Quantity' quan={props.usualExtra} onClickAdd={addUsualExtrasClick} onClickRemove={remove63Click} text='מגש תוספות (63)' />
                    </tr>
                    <tr>
                        <Quantity id='extras2shekelsQuantity' quan={props.twoExtra} onClickAdd={twoShekelExtraClick} onClickRemove={remove2Click} text='פטריות, בולגרית, אקסטרה גבינה' />
                    </tr>
                    <tr>
                        <Quantity id='bigBottleQuantity' quan={props.bigBottle} onClickAdd={bigBottleAddClick} onClickRemove={bigBottleRemoveClick} text='בקבוק שתיה גדול' />
                    </tr>
                    <tr>
                        <th>{props.price} :מחיר</th>

                    </tr>
                </tbody>
            </table>
            <Conclusion price={props.price} fTray={props.fTray} usualExtra={props.usualExtra} twoExtra={props.twoExtra}
                onChangePrice={props.onChangePrice} onChangeUsualExtra={props.onChangeUsualExtra}
                onChangeTwoExtra={props.onChangeTwoExtra} onChangeFTray={props.onChangeFTray}
                bigBottle={props.bigBottle}
                    onChangeBigBottle={props.onChangeBigBottle}
            />
        </div>


    )
}
