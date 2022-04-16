import React from "react";
import { PizzaButton } from "../../components/button/button.component";
import './calculatePizzaPage.css'
import { Quantity } from "../../components/quantity/quantity.component";

export class CalculatePizzaPage extends React.Component {
    constructor() {
        super()


        this.state = {
            price: 0,
            fTray: 0,
            usualExtra: 0,
            twoExtra: 0
        }
    }




    fTrayClick = () => {
        this.setState({ price: this.state.price + 58 }, () => console.log(this.state.price))
        this.setState({ fTray: this.state.fTray + 1 }, () => console.log(this.state.fTray))
    }

    addUsualExtrasClick = () => {
        this.setState({ price: this.state.price + 63 }, () => console.log(this.state.price))
        this.setState({ usualExtra: this.state.usualExtra + 1 }, () => console.log(this.state.usualExtra))
    }

    twoShekelExtraClick = () => {
        this.setState({ price: this.state.price + 2 }, () => console.log(this.state.price))
        this.setState({ twoExtra: this.state.twoExtra + 2 }, () => console.log(this.state.twoExtra))
    }

    removeFClick = () => {
        this.setState({ price: this.state.price - 58 }, () => console.log(this.state.price))
        this.setState({ fTray: this.state.fTray - 1 }, () => console.log(this.state.fTray))
    }

    remove63Click = () => {
        this.setState({ price: this.state.price - 63 }, () => console.log(this.state.price))
        this.setState({ usualExtra: this.state.usualExtra - 1 }, () => console.log(this.state.usualExtra))
    }
    remove2Click = () => {
        this.setState({ price: this.state.price - 2 }, () => console.log(this.state.price))
        this.setState({ twoExtra: this.state.twoExtra - 2 }, () => console.log(this.state.twoExtra))
    }

    resetAllClick = () => {
        this.setState({ fTray: 0 })
        this.setState({ price: 0 })
        this.setState({ usualExtra: 0 })
        this.setState({ twoExtra: 0 })

    }



    render() {
        return (
            <div className="center">
                <h1>חישוב מגשים</h1>
                <table className="center">
                    <tbody>
                        <Quantity id='familyTrayQuantity' quan={this.state.fTray} onClickAdd={this.fTrayClick} onClickRemove={this.removeFClick} text='משפחתית' />
                        <tr>
                            <Quantity id='tray63Quantity' quan={this.state.usualExtra} onClickAdd={this.addUsualExtrasClick} onClickRemove={this.remove63Click} text='מגש תוספות (63)' />
                        </tr>
                        <tr>
                            <Quantity id='extras2shekelsQuantity' quan={this.state.twoExtra} onClickAdd={this.twoShekelExtraClick} onClickRemove={this.remove2Click} text='פטריות, בולגרית, אקסטרה גבינה' />
                        </tr>
                        <tr>
                            <th>{this.state.price} :מחיר</th>
                        </tr>
                        <tr></tr>
                        <tr>
                            <th>:סיכום</th>
                        </tr>
                        <tr>
                            משפחתית: {this.state.fTray}
                            <br />
                            מגש תוספות: {this.state.usualExtra}
                            <br />
                            תוספות 2 שקל: {this.state.twoExtra}</tr>
                        <br />
                        <tr>
                            <td><PizzaButton id="reset" text='איפוס' onClick={this.resetAllClick} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>


        )
    }
}